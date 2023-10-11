import { grey } from '@mui/material/colors';
import { styled } from '@mui/material';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';

export const StyledImage = styled('img')({
  width: '100%',
  aspectRatio: '3/1',
  objectFit: 'cover',
  objectPosition: 'center',
});

export const ProjectField = styled('p')({
  textTransform: 'uppercase',
  opacity: 0.8,
});

export const ProjectTitle = styled('h3')({
  fontFamily: 'PlayfairDisplay',
  fontSize: '24px',
});

export const ProjectDescription = styled('p')({});

export const CardFooter = styled('div')({
  display: 'grid',
  gridTemplateColumns: '65% 35%',
});

export const StyledIcon = styled(Image)({
  height: '27px',
  width: 'auto'
});

export const IconsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '10px',
  alignItems: 'center',
});

export const StyledButton = styled(Button)(({ theme }) => ({
  background: grey[500],
  color: 'white',
  padding: '10px 12px',
  fontSize: '14px',
  fontWeight: 700,
  textTransform: 'uppercase',
  borderRadius: '74px',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const CardContainer = styled('div')({
  textAlign: 'left',
});
