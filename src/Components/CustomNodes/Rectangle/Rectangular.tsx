
import React, { useState, useEffect } from 'react';
import { NodeResizer, Position } from '@xyflow/react';
import CustomHandle from '../../CustomHandle/CustomHandle';
import { DataProps } from '../../../utils/types/interfaces';
import { nodeContainerStyle, inputStyle, handleStyle, handlePositions } from './style';

const CustomRectangularNode = ({ data, selected }: DataProps) => {
  const { label, onChange, id } = data;
  const [inputValue, setInputValue] = useState(label);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = event.target.value;
    setInputValue(newLabel);
    onChange(newLabel, id); 
  };

  return (
    <div style={nodeContainerStyle}>
      
      <NodeResizer minHeight={100} minWidth={100} keepAspectRatio color="#ff0071" isVisible={selected} />
      
     
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
