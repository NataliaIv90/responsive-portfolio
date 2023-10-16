import { styled } from '@mui/material/styles';

export const MainWrapper = styled('main')(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.primary,
  fontSize: '16px',
  fontWeight: 400,
  margin: '25px',
  [theme.breakpoints.up('md')]: {
    margin: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
    margin: '165px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px',
    margin: '250px',
  },
}));

export const SectionContainer = styled('section')(({ theme }) => ({
  margin: '40px 0',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    marginBottom: '70px',
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: '260px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
    marginBottom: '330px',
  },

}));

export const StyledText = styled('p')(({ theme }) => ({
  margin: '20px 0',
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px',
    margin: '15px 0 26px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
    margin: '23px 0 45px',
  },
}));

export const StyledTitle = styled('h2')(({ theme }) => ({
  fontSize: '28px',
  fontFamily: 'PlayfairDisplay',
  fontWeight: 600,
  fontStyle: 'italic',
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '36px',
  },
}));
