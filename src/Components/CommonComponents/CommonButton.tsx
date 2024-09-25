import React from 'react';
import { Button} from '@mui/material';
import { CommonButtonProps } from '../utils/type';



const CommonButton: React.FC<CommonButtonProps> = ({ children, onClick, sx, ...props }) => {
  return (
    <Button onClick={onClick} sx={sx} {...props}>
      {children}
    </Button>
  );
};

export default CommonButton;
