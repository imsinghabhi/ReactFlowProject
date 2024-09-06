import { CSSProperties } from 'react';


export const nodeContainerStyle: CSSProperties = {
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  minWidth: '180px',
  minHeight: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  fontSize: '1em',
};


export const inputStyle: CSSProperties = {
  textAlign: 'center',
  fontSize: '1em',
  width: '90%',
  height: '20%',
  border: 'none',
  backgroundColor: 'transparent',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxSizing: 'border-box',
  padding: '0',
};


export const handleStyle: CSSProperties = {
  zIndex: 1,
};


export const handlePositions: Record<string, CSSProperties> = {
  right: { right: '0%', top: '1%' },
  left: { left: '0', top: '100%' },
  top: { top: '0', left: '-1%' },
  bottom: { bottom: '0', left: '100%' },
};
