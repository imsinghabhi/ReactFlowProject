import { CSSProperties } from 'react';
import { theme } from '../../../Utils/Themes/Theme';

export const nodeContainerStyle: CSSProperties = {
  padding: '10px',
  border: `1px solid ${theme.colors.grey}`, 
  backgroundColor: theme.colors.hoverBackground, 
  width: '100%',  
  height: '100%', 
  minWidth: '180px',
  minHeight: '100px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
  fontSize: '1em',
};

export const inputStyle: CSSProperties = {
  border: 'none',
  background: 'transparent',
  textAlign: 'center',
  fontSize: '1em',
  width: '80%',
  color: theme.colors.darkGrey, 
  outline: 'none',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const handleStyle: CSSProperties = {
  width: '10px',
  height: '10px',
  backgroundColor: theme.colors.black, 
  borderRadius: '50%',
  zIndex: 1,
};

export const handlePositions: Record<string, CSSProperties> = {
  right: { right: '-5px', top: '100%', transform: 'translateY(-50%)' },
  left: { left: '-5px', top: '0%', transform: 'translateY(-50%)' },
  top: { top: '-5px', left: '100%', transform: 'translateX(-50%)' },
  bottom: { bottom: '-5px', left: '0%', transform: 'translateX(-50%)' },
};

