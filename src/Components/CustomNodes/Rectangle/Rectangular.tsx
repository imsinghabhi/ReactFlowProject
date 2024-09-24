import React, { useState } from 'react';
import { NodeResizer} from '@xyflow/react';
import CustomHandle from '../../CustomHandle/CustomHandle';
import { DataProps,} from '../../../utils/Interfaces/types';
import { nodeContainerStyle, inputStyle, handleStyle, handlePositions } from './style';
import { RectHandles } from '../../utils/constants';


const CustomRectangularNode = ({ data, selected }: DataProps) => {
  const { label, onChange, id } = data;
  const [inputValue, setInputValue] = useState<string>(label);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = event.target.value;
    setInputValue(newLabel);
    onChange(newLabel, id); 
  };

 

  return (
    <div style={nodeContainerStyle}>
      <NodeResizer 
        minHeight={100} 
        minWidth={100} 
        keepAspectRatio 
        color="#ff0071" 
        isVisible={selected} 
      />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={inputStyle}
      />
     
      {RectHandles.map(({ id, type, position, style }) => (
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

export default CustomRectangularNode;
