import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { CommonSelectProps } from '../utils/type';

const CommonSelect: React.FC<CommonSelectProps> = ({ label, value, onChange, options, sx, ...props }) => {
  return (
    <FormControl fullWidth sx={sx}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} {...props} label={label}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CommonSelect;
