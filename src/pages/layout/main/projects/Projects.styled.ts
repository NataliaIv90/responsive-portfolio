import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const CardWrapper = styled('div')({
  textAlign: 'left',
  '&:not(:last-child)': {
    marginBottom: '20px',
    paddingBottom: '25px',
    borderBottom: '1px solid #ddd',
  }
});

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: '10px 12px',
  border: '1px solid #ddd',
  borderRadius: '74px',
  color: theme.palette.text.primary,
  borderColor: theme.palette.text.primary,
  width: '100%',
}));

export const StyledProjectImg = styled('img')({
  width: '100%',
  aspectRatio: '3/1',
  objectFit: 'cover',
  objectPosition: 'center',
});

export const StyledFielDescription = styled('p')({
  padding: '7px 0',
  textTransform: 'uppercase',
  opacity: 0.9,
  margin: 0,
});

export const StyledTitle = styled('h3')({
  fontSize: '24px',
  textTransform: 'capitalize',
  fontFamily: 'PlayfairDisplay',
  fontWeight: 400,
  margin: 0,
});

export const StyledText = styled('p')({
  padding: 0,
});

export const CardFooter = styled('div')({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  alignItems: 'center',
  gap: '12px',
});

export const TechItemsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '10px'
});

export const TechItem = styled('span')({
  opacity: 0.9,
});