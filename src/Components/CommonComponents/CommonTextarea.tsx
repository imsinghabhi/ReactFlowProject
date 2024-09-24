import React from 'react';

interface CommonTextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  textareaStyle: React.CSSProperties;
}

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
