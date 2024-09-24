
import { SxProps, Theme } from '@mui/material/styles';

export const drawerStyles: SxProps<Theme> = {
  width: 300,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 300,
    boxSizing: 'border-box',
    backgroundColor: '#f5f5f5',
    paddingTop: '20px',
  },
};

export const listContainerStyle: SxProps<Theme> = {
  padding: '0 16px',
};

export const listItemStyle: SxProps<Theme> = {
  padding: '10px 0',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
};

export const formControlStyle: SxProps<Theme> = {
  marginTop: '16px',
};

export const buttonStyle: SxProps<Theme> = {
  minWidth: '250px',
  padding: '10px 16px',
  marginRight: '8px',
};
export const btnStyle: SxProps<Theme> = {
  minWidth: '130px',
  padding: '10px 16px',
  marginRight: '8px',
};