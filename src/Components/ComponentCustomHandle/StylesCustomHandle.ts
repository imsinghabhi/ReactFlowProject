import { CSSProperties } from 'react';
import { theme } from '../../Utils/Themes/Theme';

export const handleBaseStyle: CSSProperties = {
  width: 6,
  height: 6,
  background: theme.colors.black,
  border: `2px solid ${theme.colors.black}`, 
  borderRadius: '50%',
};