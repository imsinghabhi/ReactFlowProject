import React from 'react';
import { Handle, NodeResizer, Position } from "@xyflow/react";
import { DataProps } from '../../../utils/Interfaces/types';
import { nodeContainerStyle, textareaStyle, handleStyle } from './style'; 

const CommentNode = ({ data, selected }: DataProps) => {
  const { onChange, label, id } = data;

  return (
    <div style={nodeContainerStyle}>
      <textarea
        value={label}
        onChange={(event) => onChange(event.target.value, id)}
        style={textareaStyle}
        placeholder="Enter comment here..."
      />
      <NodeResizer
        minHeight={150}
        minWidth={150}
        keepAspectRatio={true} 
        color="#ff0071"
        isVisible={selected}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
      />
    </div>
  );
};

export default CommentNode;
