import React, { useState } from 'react';
import { NodeResizer } from '@xyflow/react';
import CustomHandle from '../../CustomHandle/CustomHandle';
import { DataProps } from '../../../utils/types/interfaces';
import { circularNodeStyle, inputStyle, handleStyle } from './style';
import { CircularHandles } from '../../utils/constants';

const CustomCircularNode = ({ data, selected }: DataProps) => {
  const { label, onChange, id } = data;
  const [inputValue, setInputValue] = useState<string>(label);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = event.target.value;
    setInputValue(newLabel);
    onChange(newLabel, id); 
  };

  return (
    <div style={circularNodeStyle}>
      <NodeResizer 
        minHeight={150} 
        minWidth={200} 
        keepAspectRatio={true}
        color="#ff0071" 
        isVisible={selected} 
      />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={inputStyle}
      />
      
      {CircularHandles.map(({ id, type, position, style }) => (
        <CustomHandle
          key={id}
          id={id}
          type={type}
          position={position}
          style={{ ...handleStyle, ...style }}
        />
      ))}
    </div>
  );
};

export default CustomCircularNode;
