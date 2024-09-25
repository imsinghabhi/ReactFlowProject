import React, { useState } from 'react';
import { NodeResizer } from '@xyflow/react';
import CustomHandle from '../../ComponentCustomHandle/CustomHandle';
import { DataProps } from '../../../Utils/Interfaces/Types';
import { circularNodeStyle, inputStyle, handleStyle } from './StylesCircle';
import { circularHandles } from '../../Utils/Constants';
import CommonInput from '../../CommonComponents/ComponentTextInput';

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

       <CommonInput
        value={inputValue}
        onChange={handleInputChange}
        inputStyle={inputStyle}  
      />
     
      {circularHandles.map(({ id, type, position, style }) => (
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
