import { SectionWrapper } from '../MainComponent';
import { Grid } from '@mui/material';
import { GridItem } from './Interests.styled';

const interests = [
  { key: '1', name: 'Drawing & Painting' },
  { key: '2', name: 'Photography' },
  { key: '3', name: 'Hiking' },
  { key: '4', name: 'Travelling' },
  { key: '5', name: 'Reading' },
  { key: '6', name: 'Cooking' },
];

const Interests = () => {
  return (
    <SectionWrapper
      id='interests'
      text='Some things I enjoy learning about & doing'
      title='interests'
    >
      <Grid container spacing={2} my={2}>
        {interests.map((el) => (
          <Grid item xs={6} key={el.key}>
            <GridItem><span>{el.name}</span></GridItem>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  )
};

export default Interests;