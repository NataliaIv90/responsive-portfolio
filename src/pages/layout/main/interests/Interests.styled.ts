import { styled } from '@mui/material/styles';
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
  background: grey[400],
  [theme.breakpoints.up('md')]: {
    height: '120px',
    fontSize: '16px',
    padding: '0 35px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '166px',
    fontSize: '20px',
    padding: '0 50px',
  },
  [theme.breakpoints.up('xl')]: {
    height: '202px',
    padding: '0 56px',
  },
}));
