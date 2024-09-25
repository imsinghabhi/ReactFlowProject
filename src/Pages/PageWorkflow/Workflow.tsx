
import React from 'react';
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
} from '@xyflow/react';
import CustomDrawer from '../../Components/Drawer/ CustomDrawer';
import { useWorkflow } from '../../Hooks/useWorkflow';
import '@xyflow/react/dist/style.css';
import { nodeTypes } from '../../utils/Constants/NodeTypes';
import { workflowContainerStyle } from './StyleWorkflow';



const Workflow: React.FC = () => {
  const {
    drawerOpen, setDrawerOpen, nodes, edges, onNodesChange, 
    onEdgesChange, onConnect, edgeType, handleEdgeTypeChange, 
    handleAddCircleNode, handleAddRhombusNode, handleAddRectangleNode,
    handleAddCommentNode, handleDeleteAllNodes, handleSaveWorkflow, 
    handleLoadWorkflow, handleRemoveWorkflow, savedWorkflows, handleDownloadWorkflow,   handleCreateNewWorkflow,
  } = useWorkflow();

  return (
    <div style={workflowContainerStyle}>
      
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
