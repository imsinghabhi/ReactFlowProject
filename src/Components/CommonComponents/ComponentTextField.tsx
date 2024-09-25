import React from 'react';
import { TextField } from '@mui/material';
import { CommonTextFieldProps } from '../Utils/Type';

const CommonTextField: React.FC<CommonTextFieldProps> = ({ label, value, onChange, variant = 'outlined', sx, error, helperText, ...props }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      variant={variant}
      sx={sx}
      error={error}
      helperText={error ? helperText : ""}
      {...props}
    />
  );
};

export default CommonTextField;
