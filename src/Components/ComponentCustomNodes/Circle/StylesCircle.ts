import { theme } from "../../../Utils/Themes/Theme";

export const circularNodeStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  minWidth: '150px',
  minHeight: '200px',
  borderRadius: '50%',
  border: `1px solid ${theme.colors.grey}`, 
  backgroundColor: theme.colors.hoverBackground, 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  fontSize: '1em',
};

export const inputStyle: React.CSSProperties = {
  border: 'none',
  background: 'transparent',
  textAlign: 'center',
  fontSize: '1em',
  width: '80%',
  color: theme.colors.darkGrey, 
  outline: 'none',
};


export const handleStyle: React.CSSProperties = {
  width: '10px',
  height: '10px',
  backgroundColor: theme.colors.black, 
  borderRadius: '50%',
};

export const handlePosition = {
  right: { top: '50%' },
  left: { top: '50%' },
  top: { left: '50%' },
  bottom: { left: '50%' },
};
