import { Handle } from "@xyflow/react";
import { CustomHandleProps } from "../../utils/Interfaces/types";
import { handleBaseStyle } from './CustomHandleStyles'; 

export default function CustomHandle({ id, style, ...props }: CustomHandleProps) {
  return (
    <Handle
      id={id}
      style={{
        ...handleBaseStyle,  
        ...style, 
      }}
      {...props}
    />
  );
}
