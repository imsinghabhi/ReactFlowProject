import { SelectChangeEvent } from "@mui/material";
import { Edge,Node, HandleProps } from "@xyflow/react";


export interface Workflow {
  name: string;
  nodes: Node[];
  edges: Edge[];
}
export interface DataProps {
    data: {
      id: string;
      label: string;
      onChange(newLabel: string, id: string): void;
    }
    selected?: boolean;
  }


export interface Workflow {
  name: string;
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
    onSaveWorkflow?: (workflowName: string) => void; 
    onLoadWorkflow?: (workflowName: string) => void; 
    onRemoveWorkflow?: (workflowName: string) => void; 
    savedWorkflows: Workflow[]; 
    onDownloadWorkflow:(workflowName: string) => void; 
  }
  
  export interface CustomHandleProps extends HandleProps {
    id: string;
    style?: React.CSSProperties; 
  }
  
  
  

