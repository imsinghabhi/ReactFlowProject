// import React, { useState } from 'react';
// import {NodeResizer, Position } from '@xyflow/react';
// import CustomHandle from '../../CustomHandle/CustomHandle';
// import { DataProps } from '../../../utils/types/DataProps';

// const handleStyle: React.CSSProperties = {
//   zIndex: 1,
// };
// const CustomRectangularNode: React.FC<DataProps> = ({ data },selected) => {
//   const { label, onChange, id } = data;

//   const [inputValue, setInputValue] = useState(label);

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newLabel = event.target.value;
//     setInputValue(newLabel);
//     onChange(newLabel, id);
//   };

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
//         minWidth: '180px',
//         minHeight: '100px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'relative', 
//         fontSize: '1em', 
//       }}
//     >
//       <NodeResizer minHeight={100} minWidth={100} keepAspectRatio isVisible={selected}/>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         style={{
//           textAlign: 'center',
//           fontSize: '1em', 
//           width: '90%',
//           height: '20%',
//           border: 'none',
//           backgroundColor: 'transparent',
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           boxSizing: 'border-box',
//           padding: '0',
//         }}
//       />
//      <CustomHandle
//         id="1"
//         type="source"
//         position={Position.Right}
//         style={{ ...handleStyle, right: '0%', top: '1%' }}
//       />
//       <CustomHandle
//         id="2"
//         type="target"
//         position={Position.Left}
//         style={{ ...handleStyle, left: '0', top: '100%' }}
//       />
//       <CustomHandle
//         id="3"
//         type="source"
//         position={Position.Top}
//         style={{ ...handleStyle, top: '0', left: '-1%' }}
//       />
//       <CustomHandle
//         id="4"
//         type="target"
//         position={Position.Bottom}
//         style={{ ...handleStyle, bottom: '0', left: '100%' }}
//       />
//     </div>
//   );
// };

// export default CustomRectangularNode;


import React, { useState } from 'react';
import { NodeResizer, Position } from '@xyflow/react';
import CustomHandle from '../../CustomHandle/CustomHandle';
import { DataProps } from '../../../utils/types/DataProps';
import { nodeContainerStyle, inputStyle, handleStyle, handlePositions } from './style'; 
const CustomRectangularNode: React.FC<DataProps> = ({ data }, selected) => {
  const { label, onChange, id } = data;

  const [inputValue, setInputValue] = useState(label);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = event.target.value;
    setInputValue(newLabel);
    onChange(newLabel, id);
  };

  return (
    <div style={nodeContainerStyle}>
      <NodeResizer minHeight={100} minWidth={100} keepAspectRatio isVisible={selected} />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={inputStyle}
      />
      <CustomHandle
        id="1"
        type="source"
        position={Position.Right}
        style={{ ...handleStyle, ...handlePositions.right }}
      />
      <CustomHandle
        id="2"
        type="target"
        position={Position.Left}
        style={{ ...handleStyle, ...handlePositions.left }}
      />
      <CustomHandle
        id="3"
        type="source"
        position={Position.Top}
        style={{ ...handleStyle, ...handlePositions.top }}
      />
      <CustomHandle
        id="4"
        type="target"
        position={Position.Bottom}
        style={{ ...handleStyle, ...handlePositions.bottom }}
      />
    </div>
  );
};

export default CustomRectangularNode;
