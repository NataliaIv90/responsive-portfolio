import { styled } from '@mui/material/styles';

export const MainWrapper = styled('main')(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.primary,
  fontSize: '16px',
  fontWeight: 400,
  margin: '25px',
}));

export const SectionContainer = styled('section')({
  margin: '40px 0',
  textAlign: 'center',
});

export const StyledText = styled('p')({
  margin: '20px 0',
});

export const StyledTitle = styled('h2')({
  fontSize: '28px',
  fontFamily: 'PlayfairDisplay',
  fontWeight: 600,
  fontStyle: 'italic',
});