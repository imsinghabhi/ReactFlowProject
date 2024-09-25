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

export const typographyStyle: SxProps<Theme> = {
  padding: '1px',
  textAlign: 'center',
};

export const selectStyle: SxProps<Theme> = {
  marginBottom: '6px',
  marginTop: '16px',
};

export const textFieldStyle: SxProps<Theme> = {
  marginBottom: '6px',
  marginTop: '16px',
};

export const addNewWorkflowButtonStyle: SxProps<Theme> = {
  marginBottom: '8px',
  minWidth: '250px',
  height: '50px',
};

export const buttonContainerStyle: SxProps<Theme> = {
  display: 'flex',
  gap: 1,
};

export const saveButtonStyle: SxProps<Theme> = {
  minWidth: '130px',
};

export const downloadButtonStyle: SxProps<Theme> = {
  backgroundColor: '#4caf50',
  color: '#fff',
};

export const savedWorkflowsContainerStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px',
};

export const savedWorkflowsTitleStyle: SxProps<Theme> = {
  textAlign: 'center',
  marginTop: '6px',
};
