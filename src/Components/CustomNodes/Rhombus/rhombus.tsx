import React, { useState } from 'react';
import { NodeResizer } from '@xyflow/react';
import CustomHandle from '../../CustomHandle/CustomHandle';
import { DataProps } from '../../../utils/Interfaces/types';
import { nodeStyle, inputStyle, handleStyle } from './Styles';
import { RhombusHandles } from '../../utils/constants';
import CommonInput from '../../CommonComponents/TextInput';


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
      <NodeResizer
        minHeight={100}
        minWidth={100}
        keepAspectRatio
        color="#ff0071"
        isVisible={selected}
      />

      <CommonInput
        value={inputValue}
        onChange={handleInputChange}
        inputStyle={inputStyle}  
      />
      
      {RhombusHandles.map(({ id, type, position, style }) => (
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

export default CustomRhombusNode;
