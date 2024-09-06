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
import { initialEdges, initialNodes } from '../utils/Workflow.constants';

export const useWorkflow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [edgeType, setEdgeType] = useState('default');

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
          strokeWidth:1.5,
          stroke: 'pink' },
      };

      setEdges((prevEdges: Edge[]) => addEdge(edge, prevEdges));
    },
    [edges, edgeType]
  );

  const handleEdgeTypeChange = (event: SelectChangeEvent<string>) => {
    setEdgeType(event.target.value as string);
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

  const handleAddCircleNode = () => {
    const newNode: Node = {
      id: `node_${nodes.length + 1}`,
      type: 'circle',
      position: { x: Math.random() * 200, y: Math.random() * 200 },
      data: { label: 'Circle Node', onChange: handleNodeLabelChange },
      style: {
        width: 150,
        height: 200,
        borderRadius: '50%',
        backgroundColor: 'grey',
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleAddRhombusNode = () => {
    const newNode: Node = {
      id: `node_${nodes.length + 1}`,
      type: 'rhombus',
      position: { x: Math.random() * 200, y: Math.random() * 200 },
      data: { label: 'Rhombus Node', onChange: handleNodeLabelChange },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleAddRectangle = () => {
    const newNode: Node = {
      id: `node_${nodes.length + 1}`,
      type: 'rectangle',
      position: { x: Math.random() * 200, y: Math.random() * 200 },
      data: { label: 'Rectangle', onChange: handleNodeLabelChange },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleAddCommentNode = () => {
    const newNode: Node = {
      id: `comment_${nodes.length + 1}`,
      type: 'comment',
      position: { x: Math.random() * 200, y: Math.random() * 200 },
      data: { label: '', onChange: handleNodeLabelChange, id: `comment_${nodes.length + 1}` },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleDeleteAllNodes = () => {
    setNodes([]);
    setEdges([]);
  };

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

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    edgeType,
    handleEdgeTypeChange,
    handleAddCircleNode,
    handleAddRhombusNode,
    handleAddRectangle,
    handleAddCommentNode,
    handleDeleteAllNodes,
    drawerOpen,
    handleCloseDrawer,
  };
};
