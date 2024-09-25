import React from 'react';
import { Typography} from '@mui/material';
import { CommonTypographyProps } from '../utils/type';


const CommonTypography: React.FC<CommonTypographyProps> = ({ text, sx, ...props }) => {
  return (
    <Typography sx={sx} {...props}>
      {text}
    </Typography>
  );
};

export default CommonTypography;
