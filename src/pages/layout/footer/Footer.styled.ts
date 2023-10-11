import { useTheme } from '@emotion/react';
import { styled } from '@mui/material';
import { muiTheme, darkTheme } from '../../../theme/muiTheme';
import { grey } from '@mui/material/colors';

export const StyledDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px',
  marginBottom: '26px',
  fontSize: '16px',
  fontWeight: 400,
});

export const StyledLink = styled('a')({
  color: grey[700],
  textTransform: 'uppercase',
});
