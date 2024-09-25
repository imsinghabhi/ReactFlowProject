import React from 'react';
import { CommonTextareaProps } from '../Utils/Type';

const CommonTextarea: React.FC<CommonTextareaProps> = ({ value, onChange, placeholder, textareaStyle, error, helperText }) => {
  return (
    <div>
      <textarea
        value={value}
        onChange={onChange}
        style={{ ...textareaStyle, borderColor: error ? 'red' : undefined }}
        placeholder={placeholder}
      />
      {error && <span style={{ color: 'red' }}>{helperText}</span>}
    </div>
  );
};

export default CommonTextarea;
