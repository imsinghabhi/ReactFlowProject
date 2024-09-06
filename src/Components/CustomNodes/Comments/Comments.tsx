// import React from 'react';
// import { Handle, NodeResizer, Position } from "@xyflow/react";
// import TextField from '@mui/material/TextField';
// import { DataProps } from '../../../utils/types/DataProps';



// const CommentNode = ({ data }: DataProps) => {
//   const { onChange, label, id } = data;

//   return (
//     <div
//       style={{
//         padding: '10px',
//         border: '1px solid #ddd',
//         borderRadius: '5px',
//         backgroundColor: '#f9f9f9',
//         width: '100%',
//         height: '100%',
//         boxSizing: 'border-box', 
//         minWidth: '150px',
//         minHeight: '150px',
//       }}
//     >
//       <TextField
//         label="Comment"
//         multiline
//         rows={4}
//         value={label}
//         onChange={(event) => onChange(event.target.value, id)}  
//         fullWidth
//         style={{
//             margin:2,
//             width: '100%',
//             height: '100%',
//           border: 'none',
//           backgroundColor: 'transparent',
//           textAlign: 'center',
//           zIndex: 1, 
//           position: 'relative',
//           pointerEvents: 'auto',
//         }}
//       />
//       <NodeResizer minHeight={150} minWidth={150} />
//       <Handle
//         type="target"
//         position={Position.Bottom}
//         id="a"
//         style={{ background: '#555' }}
//       />
//     </div>
//   );
// };

// export default CommentNode;



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
