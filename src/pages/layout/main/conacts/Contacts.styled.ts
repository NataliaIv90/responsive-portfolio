import { styled } from '@mui/material/styles';

export const IconsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '44px',
});

export const StyledLink = styled('a')(({ theme }) => ({
  margin: '20px 0',
  color: theme.palette.text.primary,
  transition: 'color 0.15s ease-in',
  '&:hover': {
    color: theme.palette.text.secondary
  }
}));

