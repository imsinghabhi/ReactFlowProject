import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { CommonSelectProps } from '../Utils/Type';

const CommonSelect: React.FC<CommonSelectProps> = ({ label, value, onChange, options, sx, ...props }) => {
  return (
    <FormControl fullWidth sx={sx}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} {...props} label={label}>
      {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
         {label}
     </MenuItem>
))}
      </Select>
    </FormControl>
  );
};

export default CommonSelect;
