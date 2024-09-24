import { CSSProperties } from 'react';

export const nodeContainerStyle: CSSProperties = {
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '10px',  
  backgroundColor: '#E0E0E0',  
  width: '100%',
  height: '100%',
    minWidth: '150px',
  minHeight: '150px',
  boxSizing: 'border-box',
  fontSize: '1em',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',  
};

export const textFieldStyle: CSSProperties = {
  margin: 2,
  width: '100%',
  height: '100%',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: '1em',
  textAlign: 'center',
  zIndex: 1,
  position: 'relative',
};

export const textareaStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  padding: '8px',
  fontSize: '1em',
  boxSizing: 'border-box',
  border: '1px solid #ddd',
  borderRadius: '8px',
  resize: 'none',  
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
};

export const handleStyle: CSSProperties = {
  backgroundColor: 'black',  
  borderRadius: '50%',
};
