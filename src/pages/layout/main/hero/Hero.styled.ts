import { grey } from '@mui/material/colors';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeroWrapper = styled('div')(({ theme }) => ({
  background: grey[900],
  color: grey[100],
  padding: '22px 20px',
  borderRadius: '20px',
  textAlign: 'left',
  marginBottom: '85px',
  [theme.breakpoints.up('sm')]: {
    padding: '70px',
    marginBottom: '97px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '75px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '95px',
    marginBottom: '275px',
  },
}));

export const StyledGreeting = styled('p')({
  fontSize: '28px',
  fontFamily: 'PlayfairDisplay',
  fontStyle: 'italic',
  fontWeight: 400,
  margin: '12px 0',
});
export const StyledTitle = styled('h1')(({ theme }) => ({
  lineHeight: '1.3',
  margin: '12px 0 22px',
  fontSize: '16px',
  fontWeight: 400,
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
  },
}));

export const HeroFooter = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: '50px'
});

export const IconsContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  gap: '16px',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '20px'
  },
}));

export const ButtonsContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '10px',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr',
  },
}));

export const StyledHeroButton = styled(Button)({
  borderRadius: '74px',
  padding: '10px 12px',
  border: `1px solid ${grey[100]}`,
  '&:hover': {
    borderColor: grey[100]
  }
});

export const StyledContainedButton = styled(StyledHeroButton)(({ theme }) => ({
  background: grey[100],
  '&:hover': {
    background: grey[200],
  }
}));

export const StyledLinkDark = styled('a')({
  color: grey[900],
});

export const StyledLinkLight = styled('a')({
  color: grey[100],
});

export const StyledIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  color: grey[100],
  height: '25px',
  width: 'auto',
  [theme.breakpoints.up('xs')]: {
    height: '32px'
  },
}));
