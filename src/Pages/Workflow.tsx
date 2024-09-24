
import React from 'react';
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
} from '@xyflow/react';
import CustomCircularNode from '../Components/CustomNodes/Circle/CustomCircularNode';
import CustomRhombusNode from '../Components/CustomNodes/Rhombus/rhombus';
import CustomRectangularNode from '../Components/CustomNodes/Rectangle/Rectangular';
import CommentNode from '../Components/CustomNodes/Comments/Comments';
import CustomDrawer from '../Components/Drawer/ CustomDrawer';
import { useWorkflow } from '../hooks/useWorkflow';
import '@xyflow/react/dist/style.css';


const nodeTypes = {
  circle: CustomCircularNode,
  rhombus: CustomRhombusNode,
  rectangle: CustomRectangularNode,
  comment: CommentNode,
};

const Workflow: React.FC = () => {
  const {
    drawerOpen, setDrawerOpen, nodes, edges, onNodesChange, 
    onEdgesChange, onConnect, edgeType, handleEdgeTypeChange, 
    handleAddCircleNode, handleAddRhombusNode, handleAddRectangleNode,
    handleAddCommentNode, handleDeleteAllNodes, handleSaveWorkflow, 
    handleLoadWorkflow, handleRemoveWorkflow, savedWorkflows, handleDownloadWorkflow,   handleCreateNewWorkflow,
  } = useWorkflow();

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      
      <CustomDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onAddCircleNode={handleAddCircleNode}
        onAddRhombusNode={handleAddRhombusNode}
        onAddRectangle={handleAddRectangleNode}
        edgeType={edgeType}
        onEdgeTypeChange={handleEdgeTypeChange}
        onDeleteAllNodes={handleDeleteAllNodes}
        onSaveWorkflow={handleSaveWorkflow}
        onLoadWorkflow={handleLoadWorkflow}
        onRemoveWorkflow={handleRemoveWorkflow}
        savedWorkflows={savedWorkflows}
        onAddComments={handleAddCommentNode}
        onDownloadWorkflow={handleDownloadWorkflow}
        onCreateNewWorkflow={handleCreateNewWorkflow}
      />

    
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
  );
};

export default Workflow;
