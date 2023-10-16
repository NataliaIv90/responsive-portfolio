import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const CardWrapper = styled('div')(({ theme }) => ({
  textAlign: 'left',
  '&:not(:last-child)': {
    marginBottom: '20px',
    paddingBottom: '25px',
    borderBottom: '1px solid #ddd',
  },
  [theme.breakpoints.up('sm')]: {
    '&:not(:last-child)': {
      borderBottom: 'none',
      marginBottom: '60px',
    },
    display: 'flex',
    justifyContent: 'stretch',
    gap: '16px',
    '&:nth-child(odd)': {
      flexDirection: 'row-reverse'
    }
  },
  [theme.breakpoints.up('md')]: {
    gap: '21px',
  },
  [theme.breakpoints.up('lg')]: {
    gap: '30px',
    '&:not(:last-child)': {
      marginBottom: '103px',
    },
  },
  [theme.breakpoints.up('lg')]: {
    '&:not(:last-child)': {
      marginBottom: '127px',
    },
  },
}));

export const CardImageWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: '49%'
  },
  [theme.breakpoints.up('lg')]: {
    width: '60%'
  },
}));

export const CardContentContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  [theme.breakpoints.up('lg')]: {
    width: '60%'
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: '10px 12px',
  border: '1px solid #ddd',
  borderRadius: '74px',
  color: theme.palette.text.primary,
  borderColor: theme.palette.text.primary,
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    padding: '16px 32px',
  },
}));

export const StyledProjectImg = styled('img')(({ theme }) => ({
  width: '100%',
  aspectRatio: '3/1',
  objectFit: 'cover',
  objectPosition: 'center',
  [theme.breakpoints.up('sm')]: {
    aspectRatio: 'auto',
  },
}));

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

export const CardFooter = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  alignItems: 'center',
  gap: '12px',
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '1fr 1fr',
  },
}));

export const TechItemsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '10px'
});

export const TechItem = styled('span')({
  opacity: 0.9,
});