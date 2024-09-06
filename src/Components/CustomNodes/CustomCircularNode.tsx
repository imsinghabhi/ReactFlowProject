import { NodeProps, NodeResizer, NodeResizerProps, Position } from '@xyflow/react';
import CustomHandle from '../CustomHandle/CustomHandle';
import { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import { DataProps } from '../../utils/types/DataProps';



const  CustomCircularNode: React.FC<DataProps> = ({ data }) => {
    const { label, onChange, id } = data;

  const [inputValue, setInputValue] = useState(label);
 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = event.target.value;
    setInputValue(newLabel);
    onChange(newLabel, id);
  };


  return (
    <>
     <NodeResizer minWidth={100} minHeight={30} keepAspectRatio  />
    
      
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={{
            margin:6,
            width: '90%',
            height:'90%',
            borderRadius: '50%',
          border: 'none',
          backgroundColor: 'transparent',
          textAlign: 'center',
         
        }}
      />
      <CustomHandle id="1" type="source" position={Position.Right} />
      <CustomHandle id="2" type="target" position={Position.Left} />
      <CustomHandle id="3" type="source" position={Position.Top} />
      <CustomHandle id="4" type="target" position={Position.Bottom} />
  
    </>
  );
}


export default CustomCircularNode;