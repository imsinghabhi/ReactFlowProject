import { SelectChangeEvent } from "@mui/material";
import { HandleProps } from "@xyflow/react";

export interface DataProps {
    data: {
      id: string;
      label: string;
      onChange(newLabel: string, id: string): void;
    };
  }


  export interface DrawerProps {
    open: boolean;
    onClose: () => void;
    onAddCircleNode: () => void;
    onAddRhombusNode: () => void;
    onAddRectangle: () => void;
    edgeType?: string;
    onEdgeTypeChange?: (event: SelectChangeEvent<string>) => void;
    onDeleteAllNodes: () => void; 
    onAddComments?: () => void; 
  }

  export interface CustomHandleProps extends HandleProps {
    id: string;
    style?: React.CSSProperties; 
  }
  
  