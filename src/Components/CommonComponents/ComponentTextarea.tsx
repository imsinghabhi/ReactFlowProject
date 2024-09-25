import React from 'react';
import { CommonTextareaProps } from '../Utils/Type';

const CommonTextarea: React.FC<CommonTextareaProps> = ({ value, onChange, placeholder, textareaStyle }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      style={textareaStyle}
      placeholder={placeholder}
    />
  );
};

export default CommonTextarea;
