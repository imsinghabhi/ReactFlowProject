import React from 'react';
import { CommonInputProps } from '../utils/type';


const CommonInput: React.FC<CommonInputProps> = ({ value, onChange, inputStyle }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      style={inputStyle}
    />
  );
};

export default CommonInput;
