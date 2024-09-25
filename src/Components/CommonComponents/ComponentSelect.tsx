import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { CommonSelectProps } from '../Utils/Type';


const CommonSelect: React.FC<CommonSelectProps> = ({ label, value, onChange, options, error, helperText, sx, ...props }) => {
  return (
    <FormControl fullWidth sx={sx} error={error}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} {...props} label={label}>
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CommonSelect;