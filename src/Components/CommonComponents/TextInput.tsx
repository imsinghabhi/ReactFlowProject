import React from 'react';
import { CommonInputProps } from '../../utils/Interfaces/types';



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
