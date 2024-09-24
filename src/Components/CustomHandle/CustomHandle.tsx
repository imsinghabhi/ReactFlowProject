import React from "react";
import { Handle, HandleProps } from "@xyflow/react";
import { CustomHandleProps } from "../../utils/Interfaces/types";


export default function CustomHandle({ id, style, ...props }: CustomHandleProps) {
  return (
    <Handle
      id={id}
      style={{
        width: 6,
        height: 6,
        background: "pink",
        border: "2px solid black",
        borderRadius: '50%',
        ...style, 
      }}
      {...props}
    />
  );
}
