
import React from 'react';
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
} from '@xyflow/react';
import CustomCircularNode from '../Components/CustomNodes/CustomCircularNode';
import CustomRhombusNode from '../Components/CustomNodes/rhombus';
import CustomDrawer from '../Components/Drawer/ CustomDrawer';
import CustomRectangularNode from '../Components/CustomNodes/Rectangular';
import CommentNode from '../Components/CustomNodes/Comments';
import { useWorkflow } from '../hooks/useWorkflow';
import '@xyflow/react/dist/style.css';

const nodeTypes = {
  circle: CustomCircularNode,
  rhombus: CustomRhombusNode,
  rectangle: CustomRectangularNode,
  comment: CommentNode,
};

export const Workflow = () => {
  const {
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
  } = useWorkflow();

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <CustomDrawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        onAddCircleNode={handleAddCircleNode}
        onAddRhombusNode={handleAddRhombusNode}
        onAddRectangle={handleAddRectangle}
        edgeType={edgeType}
        onEdgeTypeChange={handleEdgeTypeChange}
        onDeleteAllNodes={handleDeleteAllNodes}
        onAddComments={handleAddCommentNode}
      />
      <div style={{ flex: 1 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          className="react-flow-node-resizer-example"
          fitView
        >
          <Background />
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};
