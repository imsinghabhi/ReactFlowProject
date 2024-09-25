import { Position } from "@xyflow/react";
import { HandleType } from "../../Utils/Interfaces/Types";
import { handlePositions } from "../ComponentCustomNodes/Rectangle/StylesRectangle";
import { handlePosition} from '../ComponentCustomNodes/Circle/StylesCircle'; 
import { handlePositin } from "../ComponentCustomNodes/Rhombus/StylesRhombus";

export const rectHandles = [
    { id: '1', type: HandleType.Source, position: Position.Right, style: handlePositions.right },
    { id: '2', type: HandleType.Target, position: Position.Left, style: handlePositions.left },
    { id: '3', type: HandleType.Source, position: Position.Top, style: handlePositions.top },
    { id: '4', type: HandleType.Target, position: Position.Bottom, style: handlePositions.bottom },
  ];
  
export const circularHandles = [
    { id: '1', type: HandleType.Source, position: Position.Right, style: handlePosition.right },
    { id: '2', type: HandleType.Target, position: Position.Left, style: handlePosition.left },
    { id: '3', type: HandleType.Source, position: Position.Top, style: handlePosition.top },
    { id: '4', type: HandleType.Target, position: Position.Bottom, style: handlePosition.bottom },
  ];
  
export const rhombusHandles = [
    { id: '1', type: HandleType.Source, position: Position.Top, style:  handlePositin.top },
    { id: '2', type: HandleType.Target, position: Position.Right, style:  handlePositin.right },
    { id: '3', type: HandleType.Source, position: Position.Bottom, style: handlePositin.bottom },
    { id: '4', type: HandleType.Target, position: Position.Left, style:  handlePositin.left },
  ];
  