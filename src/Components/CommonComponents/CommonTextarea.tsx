import React from 'react';
import { CommonTextareaProps } from '../utils/type';

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
