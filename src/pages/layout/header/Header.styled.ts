import { AppBar, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const StyledLink = styled('a')(({ theme }) => ({
  fontFamily: 'PlayfairDisplay',
  fontWeight: 600,
  fontStyle: 'italic',
  fontSize: '30px',
  color: theme.palette.text.primary,
}));

export const StyledNavigationButtonLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const StyledAppBar = styled(AppBar)({
  '&.MuiAppBar-root': {
    background: grey[400],
  }
});

export const StyledPaper = styled(Paper)({
  marginTop: '14px',
});