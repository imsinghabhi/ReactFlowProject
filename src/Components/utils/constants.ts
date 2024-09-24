import { Position } from "@xyflow/react";
import { HandleType } from "../../utils/Interfaces/types";
import { handlePositions } from "../CustomNodes/Rectangle/style";
import { handlePosition} from '../CustomNodes/Circle/style'; 
import { handlePositin } from "../CustomNodes/Rhombus/Styles";

export const RectHandles = [
    { id: '1', type: HandleType.Source, position: Position.Right, style: handlePositions.right },
    { id: '2', type: HandleType.Target, position: Position.Left, style: handlePositions.left },
    { id: '3', type: HandleType.Source, position: Position.Top, style: handlePositions.top },
    { id: '4', type: HandleType.Target, position: Position.Bottom, style: handlePositions.bottom },
  ];

export const CircularHandles = [
    { id: '1', type: HandleType.Source, position: Position.Right, style: handlePosition.right },
    { id: '2', type: HandleType.Target, position: Position.Left, style: handlePosition.left },
    { id: '3', type: HandleType.Source, position: Position.Top, style: handlePosition.top },
    { id: '4', type: HandleType.Target, position: Position.Bottom, style: handlePosition.bottom },
  ];
  
export const RhombusHandles = [
    { id: '1', type: HandleType.Source, position: Position.Top, style:  handlePositin.top },
    { id: '2', type: HandleType.Target, position: Position.Right, style:  handlePositin.right },
    { id: '3', type: HandleType.Source, position: Position.Bottom, style: handlePositin.bottom },
    { id: '4', type: HandleType.Target, position: Position.Left, style:  handlePositin.left },
  ];
  