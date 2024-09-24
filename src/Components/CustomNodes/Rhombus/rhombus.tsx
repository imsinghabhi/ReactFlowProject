

import React, { useState } from 'react';
import { Position, NodeResizer } from '@xyflow/react';
import CustomHandle from '../../CustomHandle/CustomHandle';
import { DataProps } from '../../../utils/types/interfaces';
import { handleStyle, inputStyle, nodeStyle } from './Styles';

const CustomRhombusNode = ({ data, selected }: DataProps) => {
  const { onChange, label, id } = data;
  const [inputValue, setInputValue] = useState<string>(label);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = event.target.value;
    setInputValue(newLabel);
    onChange(newLabel, id);  
  };

  return (
    <div style={nodeStyle}>
      <NodeResizer minHeight={100} minWidth={100} color="#ff0071" keepAspectRatio isVisible={selected} />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={inputStyle}
      />

    
  <CustomHandle
      id="1"
      type="source"
        position={Position.Top}
         style={{ ...handleStyle, top: '0', left: '-1%' }}
       />
      <CustomHandle
         id="2"
        type="target"
                 position={Position.Right}
    style={{ ...handleStyle, right: '0', top: '-1%' }}
      />
       <CustomHandle
         id="3"
         type="source"
         position={Position.Bottom}
         style={{ ...handleStyle, bottom: '0', left: '100%' }}
                />
     <CustomHandle
         id="4"
         type="target"
         position={Position.Left}
         style={{ ...handleStyle, left: '0', top: '100%' }}
       />
    </div>
  );
};

export default CustomRhombusNode;
