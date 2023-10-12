import { SectionWrapper } from '../MainComponent';
import { IProjectCardProps, ETechOptions } from '../../../../types/types';
import ProjectCard from './projectCard/ProjectCard';
import { CardWrapper } from './ProjectsStyled';

const projectsData: IProjectCardProps[] = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    imageAlt: 'Alt',
    title: 'Card',
    text: 'Text',
    field: 'Fiesl',
    buttonLink: 'Link',
    usedTechnologies: [ETechOptions.html, ETechOptions.css, ETechOptions.js]

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
        {projectsData.length > 0
          ? projectsData.map((el, index) => (
            <CardWrapper key={index}>
              <ProjectCard data={el} />
            </CardWrapper>
          ))
          : null}
      </div>
    </SectionWrapper>
  )
};

export default Projects;