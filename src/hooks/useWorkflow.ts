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
import { v4 as uuidv4 } from 'uuid';
import { SelectChangeEvent } from '@mui/material';
import localforage from 'localforage';
import { debounce } from 'lodash';
import { initialEdges, initialNodes } from '../utils/Workflow.constants';
import { Workflow } from '../utils/types/interfaces';

export const useWorkflow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true);
  const [edgeType, setEdgeType] = useState<string>('default');
  const [savedWorkflows, setSavedWorkflows] = useState<Workflow[]>([]);
  const [autoSaveInterval, setAutoSaveInterval] = useState<number>(3000);
  const [activeWorkflowName, setActiveWorkflowName] = useState<string | null>(null);
  const [userActive, setUserActive] = useState<boolean>(false);
  const [activityTimeout, setActivityTimeout] = useState<NodeJS.Timeout | null>(null);

  const loadSavedWorkflows = async () => {
    const workflows = await localforage.getItem<Workflow[]>('workflows');
    if (workflows) {
      setSavedWorkflows(workflows);
    }
  };

  const handleNodeLabelChange = useCallback(
    (newLabel: string, nodeId: string) => {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === nodeId
            ? { ...node, data: { ...node.data, label: newLabel } }
            : node
        )
      );
    },
    []
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge: Edge = {
        ...connection,
        animated: true,
        id: uuidv4(),
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
    const nodeId = uuidv4();
    const newNode: Node = {
      id: nodeId,
      type: 'circle',
      position: { x: Math.random() * 200, y: Math.random() * 200 },
      data: {
        label: 'Circle Node',
        onChange: (newLabel: string) => handleNodeLabelChange(newLabel, nodeId),
        id: nodeId,
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleAddRhombusNode = () => {
    const nodeId = uuidv4();
    const newNode: Node = {
      id: nodeId,
      type: 'rhombus',
      position: { x: Math.random() * 200, y: Math.random() * 200 },
      data: {
        label: 'Rhombus Node',
        onChange: (newLabel: string) => handleNodeLabelChange(newLabel, nodeId),
        id: nodeId,
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleAddRectangleNode = () => {
    const nodeId = uuidv4();
    const newNode: Node = {
      id: nodeId,
      type: 'rectangle',
      position: { x: Math.random() * 200, y: Math.random() * 200 },
      data: {
        label: 'Rectangle Node',
        onChange: (newLabel: string) => handleNodeLabelChange(newLabel, nodeId),
        id: nodeId,
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleAddCommentNode = () => {
    const nodeId = uuidv4();
    const newNode: Node = {
      id: nodeId,
      type: 'comment',
      position: { x: Math.random() * 200, y: Math.random() * 200 },
      data: {
        label: '',
        onChange: (newLabel: string) => handleNodeLabelChange(newLabel, nodeId),
        id: nodeId,
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


  const debouncedAutoSaveWorkflow = useCallback(
    debounce(async () => {
      if (activeWorkflowName && userActive) {
        await handleSaveWorkflow(activeWorkflowName);
      }
    }, 1000),
    [nodes, edges, activeWorkflowName, userActive]
  );

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
            onChange: (newLabel: string) => handleNodeLabelChange(newLabel, node.id),
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

  const resetActivityTimer = () => {
    setUserActive(true);
    if (activityTimeout) {
      clearTimeout(activityTimeout);
    }
    setActivityTimeout(setTimeout(() => setUserActive(false), 3000));
  };

  useEffect(() => {
    loadSavedWorkflows();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      debouncedAutoSaveWorkflow();
    }, autoSaveInterval);

    return () => clearInterval(interval);
  }, [nodes, edges, activeWorkflowName, autoSaveInterval]);

  useEffect(() => {
    const handleActivity = () => resetActivityTimer();
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
    };
  }, [activityTimeout]);


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
const handleCreateNewWorkflow = async (name: string) => {
    if (!name) {
      console.error("Workflow name cannot be empty.");
      return;
    }

    try {
      const existingWorkflows = (await localforage.getItem<Workflow[]>('workflows')) || [];
      const workflowExists = existingWorkflows.some(workflow => workflow.name === name);
      if (workflowExists) {
        alert("This workflow already exists. Please enter a new name."); 
        return;
      }
      const newWorkflow: Workflow = {
        name,
        nodes: [],
        edges: [],
      };


      const updatedWorkflows = [...existingWorkflows, newWorkflow];
      await localforage.setItem('workflows', updatedWorkflows);

      setSavedWorkflows(updatedWorkflows);
      setNodes([]);
      setEdges([]);
      setActiveWorkflowName(name);

      console.log('New workflow created and saved successfully');
    } catch (error) {
      console.error('Error creating new workflow:', error);
    }
  };




  return {
    nodes,
    edges,
    edgeType,
    onNodesChange,
    onEdgesChange,
    onConnect,
    handleEdgeTypeChange,
    drawerOpen,
    setDrawerOpen,
    handleAddCircleNode,
    handleAddRhombusNode,
    handleAddRectangleNode,
    handleAddCommentNode,
    handleDeleteAllNodes,
    handleSaveWorkflow,
    handleLoadWorkflow,
    handleRemoveWorkflow,
    handleDownloadWorkflow,
    savedWorkflows,
    setAutoSaveInterval,
    autoSaveInterval,
    handleCreateNewWorkflow,
  };
};
