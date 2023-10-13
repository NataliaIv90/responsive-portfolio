import { SectionWrapper } from '../MainComponent';
import { IProjectCardProps } from '../../../../types/types';
import { CardWrapper, StyledButton } from './Projects.styled';
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
]

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
            <div><img src={el.imageSrc} alt={el.imageAlt} /></div>
            <p>{el.title}</p>
            <p>{el.field}</p>
            <p>{el.text}</p>
            <p>{el.usedTechnologies.map((techEl) => (<span key={techEl}>{techEl}</span>))}</p>
            <Link href={el.buttonLink}><StyledButton>View code</StyledButton></Link>
          </CardWrapper>
        ))}
      </div>
    </SectionWrapper>
  )
};

export default Projects;
