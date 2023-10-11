import { styled, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

export const GridItem = styled('div')(({ theme }) => ({
  height: '80px',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px solid ${theme.palette.text.primary}`,
  borderRadius: '10px',
  fontSize: '14px',
  fontWeight: 700,
  textTransform: 'uppercase',
  background: grey[400]
}));
