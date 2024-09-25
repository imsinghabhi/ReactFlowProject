import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { CommonButtonProps } from '../Utils/Type';

const CommonButton: React.FC<CommonButtonProps> = ({ children, onClick, disabled, sx, ...props }) => {
  return (
    <Button onClick={onClick} disabled={disabled} sx={sx} {...props}>
      {children}
    </Button>
  );
};

export default CommonButton;
