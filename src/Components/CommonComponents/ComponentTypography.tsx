import React from 'react';
import { Typography } from '@mui/material';
import { CommonTypographyProps } from '../Utils/Type';

const CommonTypography: React.FC<CommonTypographyProps> = ({ text, sx, error, ...props }) => {
  return (
    <Typography sx={{ ...sx, color: error ? 'red' : undefined }} {...props}>
      {text}
    </Typography>
  );
};

export default CommonTypography;
