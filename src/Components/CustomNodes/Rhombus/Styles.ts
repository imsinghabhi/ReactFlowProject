

import { CSSProperties } from "react";

export const nodeStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  minWidth: '100px',
  minHeight: '100px',
  backgroundColor: '#E0E0E0',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  transform: 'rotate(45deg)', 
  position: 'relative',
  boxSizing: 'border-box',
  aspectRatio: '1/1', 
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  fontSize: '1em',
};

export const inputStyle: CSSProperties = {
  transform: 'rotate(-45deg)', 
  padding: '5px',
  fontSize: '1em',
  backgroundColor: 'transparent',
  textAlign: 'center',
  width: '80%',
  border: 'none',
  zIndex: 1,
  pointerEvents: 'auto',
};

export const handleStyle: CSSProperties = {
  width: '10px',
  height: '10px',
  backgroundColor: 'black',  
  borderRadius: '50%',
  zIndex: 1,
};
