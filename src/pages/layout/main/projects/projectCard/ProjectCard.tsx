import { StyledImage, ProjectField, StyledLink, StyledButton, CardContainer, ProjectTitle, ProjectDescription, CardFooter, StyledIcon, IconsContainer } from './ProjectCard.styled';
// import { IProjectCardProps } from '../../../../../types/types';
// import { techIcons } from '../../../../../shared/constants';
import cssIcon from '../../../../../assets/images/css.png';
import htmlIcon from '../../../../../assets/images/HTML5.svg';
import jsIcon from '../../../../../assets/images/js.svg';
import reactIcon from '../../../../../assets/images/react-1.svg';
import figmaIcon from '../../../../../assets/images/figma.svg';
import reduxIcon from '../../../../../assets/images/redux.svg';
import reactHFIcon from '../../../../../assets/images/rhf.svg';
import tsIcon from '../../../../../assets/images/typescript.svg';
import muiIcon from '../../../../../assets/images/mui.png';

export const techIcons = {
  html: { icon: htmlIcon, name: 'HTML' },
  css: { icon: cssIcon, name: 'CSS' },
  js: { icon: jsIcon, name: 'JavaScript' },
  react: { icon: reactIcon, name: 'React' },
  redux: { icon: reduxIcon, name: 'Redux' },
  figma: { icon: figmaIcon, name: 'Figma' },
  reactHookForm: { icon: reactHFIcon, name: 'React Hook Form' },
  ts: { icon: tsIcon, name: 'TypeScript' },
  mui: { icon: muiIcon, name: 'MUI' },
}

export enum ETechOptions {
  html = 'html',
  css = 'css',
  js = 'js',
  react = 'react',
  redux = 'redux',
  figma = 'figma',
  reactHookForm = 'reactHookForm',
  ts = 'ts',
  mui = 'mui'
};

export interface IProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  field: string;
  title: string;
  text: string;
  usedTechnologies: ETechOptions[];
  buttonLink: string;
};

interface IProjectCard {
  data: IProjectCardProps;
}

const ProjectCard = ({ data: { imageSrc, imageAlt, field, text, title, usedTechnologies, buttonLink } }: IProjectCard) => {

  return (
    <CardContainer>
      <StyledImage src={imageSrc} alt={imageAlt} />
      <ProjectField>{field}</ProjectField>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{text}</ProjectDescription>
      <CardFooter>
        <IconsContainer>{
          usedTechnologies.map((el) => (
            <StyledIcon
              key={techIcons[el].name}
              src={techIcons[el].icon}
              alt={techIcons[el].name} />
          ))}
        </IconsContainer>
        <StyledButton variant='contained'>
          <StyledLink href={buttonLink} target='_blank'>View code</StyledLink>
        </StyledButton>
      </CardFooter>
    </CardContainer>
  )
};

export default ProjectCard;