import { styled } from '@mui/material';

export const CardWrapper = styled('div')({
  '&:not(:last-child)': {
    marginBottom: '20px',
    paddingBottom: '25px',
    borderBottom: '1px solid #ddd',
  }
});