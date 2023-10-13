import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const CardWrapper = styled('div')({
  '&:not(:last-child)': {
    marginBottom: '20px',
    paddingBottom: '25px',
    borderBottom: '1px solid #ddd',
  }
});

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: '10px 12px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  color: theme.palette.text.primary,
  borderColor: theme.palette.text.primary,
}));
