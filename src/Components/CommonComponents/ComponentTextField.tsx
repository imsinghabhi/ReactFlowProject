import React, { ChangeEvent } from 'react';
import { SxProps, TextField} from '@mui/material';
import { CommonTextFieldProps } from '../Utils/Type';

const CommonTextField: React.FC<CommonTextFieldProps> = ({ label, value, onChange, variant = 'outlined', sx, ...props }) => {
  return (
    <TextField
      label={label} 
      value={value} 
      onChange={onChange} 
      variant={variant} 
      sx={sx} 
      {...props} 
    />
  );
};

export default CommonTextField;
