import { SxProps, Theme } from '@mui/material/styles';
import { theme } from '../../Utils/Themes/Theme';

export const drawerStyles: SxProps<Theme> = {
  width: 300,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 300,
    boxSizing: 'border-box',
    backgroundColor: theme.colors.drawerBackground,
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
    backgroundColor: theme.colors.hoverBackground,
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
  minWidth:'270px'
};

export const addNewWorkflowButtonStyle: SxProps<Theme> = {
  marginBottom: '8px',
  minWidth: '270px',
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
  backgroundColor: theme.colors.downloadButtonBackground,
  color: theme.colors.downloadButtonText, 
};

export const savedWorkflowsContainerStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'space-between',
  padding: '8px',
  gap: '8px',
};
export const savedWorkflowsTitleStyle: SxProps<Theme> = {
  textAlign: 'center',
  marginTop: '6px',
};
