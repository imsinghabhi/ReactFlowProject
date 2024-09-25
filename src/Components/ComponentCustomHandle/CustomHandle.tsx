import { Handle } from "@xyflow/react";
import { CustomHandleProps } from "../../Utils/Interfaces/Types";
import { handleBaseStyle } from './StylesCustomHandle'; 

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
