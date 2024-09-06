import { SxProps, Theme } from '@mui/material/styles';


export const drawerStyles: SxProps<Theme> = {
  width: 250,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 250,
    boxSizing: 'border-box',
  },
};

export const listContainerStyle: React.CSSProperties = {
  width: 250,
};

export const listItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

export const formControlStyle: React.CSSProperties = {
  margin: 'dense',
};
