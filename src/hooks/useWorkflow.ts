

import { useCallback, useEffect, useState } from 'react';
import {
  addEdge,
  Connection,
  Edge,
  MarkerType,
  Node,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';
import { SelectChangeEvent } from '@mui/material';
import localforage from 'localforage';
import { initialEdges, initialNodes } from '../utils/Workflow.constants';
import { Workflow } from '../utils/types/interfaces';


export const useWorkflow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [edgeType, setEdgeType] = useState('default');
  const [savedWorkflows, setSavedWorkflows] = useState<Workflow[]>([]);
  const [autoSaveInterval, setAutoSaveInterval] = useState<number>(3000); 
  const [activeWorkflowName, setActiveWorkflowName] = useState<string | null>(null);

  const loadSavedWorkflows = async () => {
    const workflows = await localforage.getItem<Workflow[]>('workflows');
    if (workflows) {
      setSavedWorkflows(workflows);
    }
  };

  const handleNodeLabelChange = (newLabel: string, nodeId: string) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, label: newLabel } }
          : node
      )
    );
  };

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge: Edge = {
        ...connection,
        animated: true,
        id: `${edges.length + 1}`,
        type: edgeType,
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#FF0072',
        },
        style: {
          strokeWidth: 1.5,
          stroke: 'pink',
        },
      };

      setEdges((prevEdges: Edge[]) => addEdge(edge, prevEdges));
    },
    [edges, edgeType]
  );

  const handleEdgeTypeChange = (event: SelectChangeEvent<string>) => {
    setEdgeType(event.target.value as string);
  };

  const handleAddCircleNode = () => {
    const newNode: Node = {
      id: `node_${nodes.length + 1}`,
      type: 'circle',
      position: { x: Math.random() * 200, y: Math.random() * 200 },
      data: {
        label: 'Circle Node',
        onChange: handleNodeLabelChange,
        id: `node_${nodes.length + 1}`,
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleAddRhombusNode = () => {
    const newNode: Node = {
      id: `node_${nodes.length + 1}`,
      type: 'rhombus',
      position: { x: Math.random() * 200, y: Math.random() * 200 },
      data: {
        label: 'Rhombus Node',
        onChange: handleNodeLabelChange,
        id: `node_${nodes.length + 1}`,
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleAddRectangleNode = () => {
    const newNode: Node = {
      id: `node_${nodes.length + 1}`,
      type: 'rectangle',
      position: { x: Math.random() * 200, y: Math.random() * 200 },
      data: {
        label: 'Rectangle Node',
        onChange: handleNodeLabelChange,
        id: `node_${nodes.length + 1}`,
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleAddCommentNode = () => {
    const newNode: Node = {
      id: `comment_${nodes.length + 1}`,
      type: 'comment',
      position: { x: Math.random() * 200, y: Math.random() * 200 },
      data: {
        label: '',
        onChange: handleNodeLabelChange,
        id: `comment_${nodes.length + 1}`,
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleDeleteAllNodes = () => {
    setNodes([]);
    setEdges([]);
  };

  const handleSaveWorkflow = async (name: string) => {
    const workflow: Workflow = {
      name,
      nodes: nodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          onChange: undefined, 
        },
      })),
      edges,
    };

    const existingWorkflows = (await localforage.getItem<Workflow[]>('workflows')) || [];
    const updatedWorkflows = existingWorkflows.filter(w => w.name !== name);
    updatedWorkflows.push(workflow);

    try {
      await localforage.setItem('workflows', updatedWorkflows);
      setSavedWorkflows(updatedWorkflows);
      console.log('Workflow saved successfully');
    } catch (error) {
      console.error('Error saving workflow:', error);
    }
  };

  const handleAutoSaveWorkflow = async () => {
    if (activeWorkflowName) {
      await handleSaveWorkflow(activeWorkflowName);
    }
  };

  const handleLoadWorkflow = async (name: string) => {
    try {
      const savedWorkflows = await localforage.getItem<Workflow[]>('workflows');
      const workflow = savedWorkflows?.find(w => w.name === name);
      if (workflow) {
        setActiveWorkflowName(name);
        setNodes(workflow.nodes.map((node) => ({
          ...node,
          data: {
            ...node.data,
            onChange: handleNodeLabelChange,
          },
        })));
        setEdges(workflow.edges);
      }
    } catch (error) {
      console.error('Error loading workflow:', error);
    }
  };

  const handleRemoveWorkflow = async (name: string) => {
    const existingWorkflows = await localforage.getItem<Workflow[]>('workflows') || [];
    const updatedWorkflows = existingWorkflows.filter(w => w.name !== name);

    try {
      await localforage.setItem('workflows', updatedWorkflows);
      setSavedWorkflows(updatedWorkflows);
      console.log('Workflow removed successfully');
    } catch (error) {
      console.error('Error removing workflow:', error);
    }
  };
 
const handleDownloadWorkflow = (workflowName: string) => {
  const workflow = savedWorkflows.find(w => w.name === workflowName);
  if (workflow) {
    const workflowData = JSON.stringify(workflow, null, 2);
    const blob = new Blob([workflowData], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${workflowName}.json`;
    link.click();
  } else {
    console.error('Workflow not found');
  }
};


  useEffect(() => {
    loadSavedWorkflows();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleAutoSaveWorkflow();
    }, autoSaveInterval);

    return () => clearInterval(interval); 
  }, [nodes, edges, activeWorkflowName, autoSaveInterval]);
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === 'a') {
      const nodeIds = nodes.map((node) => node.id);
      setNodes((nds) =>
        nds.map((node) => ({
          ...node,
          selected: nodeIds.includes(node.id),
        }))
      );
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nodes]);

  return {
    drawerOpen,
    setDrawerOpen,
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    edgeType,
    handleEdgeTypeChange,
    handleAddCircleNode,
    handleAddRhombusNode,
    handleAddRectangleNode,
    handleDeleteAllNodes,
    handleSaveWorkflow,
    handleLoadWorkflow,
    handleRemoveWorkflow,
    savedWorkflows,
    handleAddCommentNode,
    setAutoSaveInterval, 
    handleDownloadWorkflow  
  };
};
