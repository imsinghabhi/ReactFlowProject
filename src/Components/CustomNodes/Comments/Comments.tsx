import React from 'react';
import { Handle, NodeResizer, Position } from "@xyflow/react";
import TextField from '@mui/material/TextField';
import { DataProps } from '../../../utils/types/interfaces';
import { nodeContainerStyle, textFieldStyle, handleStyle } from './style'; // Adjust the path as needed

const CommentNode: React.FC<DataProps> = ({ data }) => {
  const { onChange, label, id } = data;

  return (
    <div style={nodeContainerStyle}>
      <TextField
        label="Comment"
        multiline
        rows={4}
        value={label}
        onChange={(event) => onChange(event.target.value, id)}
        fullWidth
        style={textFieldStyle}
      />
      <NodeResizer minHeight={150} minWidth={150} />
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
