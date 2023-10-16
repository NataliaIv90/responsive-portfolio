import { styled } from '@mui/material/styles';
import Image from 'next/image';

export const StyledImage = styled(Image)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  [theme.breakpoints.up('sm')]: {
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  },
}));

export const AboutSectionWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '14px',
    textAlign: 'left',
    marginBottom: '112px',
    alignItems: 'center'
  },
  [theme.breakpoints.up('md')]: {
    gap: '18px',
  },
  [theme.breakpoints.up('lg')]: {
    marginBottom: '270px',
    gap: '24px',
  },
  [theme.breakpoints.up('xl')]: {
    gap: '45px',
  },
  '&>p': {
    marginBottom: '16px'
  }
}));