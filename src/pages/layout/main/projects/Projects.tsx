import { SectionWrapper } from '../MainComponent';
import { IProjectCardProps } from '../../../../types/types';
import {
  CardWrapper, StyledButton, StyledProjectImg, StyledFielDescription,
  StyledText,
  StyledTitle,
  CardFooter,
  TechItemsContainer,
  TechItem
} from './Projects.styled';
import Link from 'next/link';

const projectsData: IProjectCardProps[] = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    imageAlt: 'Alt',
    title: 'Card',
    text: 'Text',
    field: 'Fiesl',
    buttonLink: 'Link',
    usedTechnologies: ['HTML', 'CSS', 'JavaScript']

  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    imageAlt: 'Alt',
    title: 'Card',
    text: 'Text',
    field: 'Fiesl',
    buttonLink: 'Link',
    usedTechnologies: ['Figma', 'JavaScript']

  },
];

const Projects = () => {
  return (
    <SectionWrapper
      id='projects'
      text='Some things I’ve worked (or am working) on'
      title='projects'
    >
      <div>
        {projectsData.map((el, index) => (
          <CardWrapper key={index}>
            <div><StyledProjectImg src={el.imageSrc} alt={el.imageAlt} /></div>
            <StyledFielDescription>{el.field}</StyledFielDescription>
            <StyledTitle>{el.title}</StyledTitle>
            <StyledText>{el.text}</StyledText>
            <CardFooter>
              <TechItemsContainer>{el.usedTechnologies.map((techEl) => (
                <TechItem key={techEl}>{techEl}</TechItem>
              ))}
              </TechItemsContainer>
              <Link href={el.buttonLink}><StyledButton>View code</StyledButton></Link>
            </CardFooter>
          </CardWrapper>
        ))}
      </div>
    </SectionWrapper>
  )
};

export default Projects;
