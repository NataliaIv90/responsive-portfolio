import { grey } from '@mui/material/colors';
import { styled, Button } from '@mui/material';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeroWrapper = styled('div')({
  background: grey[900],
  color: grey[100],
  padding: '22px 20px',
  borderRadius: '20px',
  textAlign: 'left'
});

export const StyledGreeting = styled('p')({
  fontSize: '28px',
  fontFamily: 'PlayfairDisplay',
  fontStyle: 'italic',
  fontWeight: 400,
  margin: '12px 0',
});
export const StyledTitle = styled('h1')({
  lineHeight: '1.3',
  margin: '12px 0 22px',
  fontSize: '16px',
  fontWeight: 400
});

export const HeroFooter = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: '50px'
});

export const IconsContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '16px',
  width: '100%',
});

export const ButtonsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});
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

export const StyledLinkDark = styled(Link)({
  color: grey[900],
});

export const StyledLinkLight = styled(Link)({
  color: grey[100],
});

export const StyledIcon = styled(FontAwesomeIcon)({
  color: grey[100],
});
