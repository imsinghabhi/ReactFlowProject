import React from 'react';
import { CommonInputProps } from '../Utils/Type';

const CommonInput: React.FC<CommonInputProps> = ({ value, onChange, inputStyle, error, helperText }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={{ ...inputStyle, borderColor: error ? 'red' : undefined }}
      />
      {error && <span style={{ color: 'red' }}>{helperText}</span>}
    </div>
  );
};

export default CommonInput;
