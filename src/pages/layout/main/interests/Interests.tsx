import { SectionWrapper } from '../Main';
import { Grid } from '@mui/material';
import { GridItem } from './Interests.styled';

export const Interests = () => {
  return (
    <SectionWrapper
      id='interests'
      text='Some things I enjoy learning about & doing'
      title='interests'
    >
      <Grid container spacing={2} my={2}>
        <Grid item xs={6}>
          <GridItem><span>Drawing & Painting</span></GridItem>
        </Grid>
        <Grid item xs={6}>
          <GridItem><span>Photography</span></GridItem>
        </Grid>
        <Grid item xs={6}>
          <GridItem><span>Hiking</span></GridItem>
        </Grid>
        <Grid item xs={6}>
          <GridItem><span>Travelling</span></GridItem>
        </Grid>
        <Grid item xs={6}>
          <GridItem><span>Reading</span></GridItem>
        </Grid>
        <Grid item xs={6}>
          <GridItem><span>Cooking</span></GridItem>
        </Grid>
      </Grid>
    </SectionWrapper>
  )
}