import { StyledImage, ProjectField, StyledLink, StyledButton, CardContainer, ProjectTitle, ProjectDescription, CardFooter, TechName, IconsContainer } from './ProjectCard.styled';
import { IProjectCardProps } from '../../../../../types/types';
// import { techIcons } from '../../../../../shared/constants';
interface IProjectCard {
  data: IProjectCardProps;
};

export const techIcons = {
  html: { icon: '../../../../../assets/images/HTML5.svg', name: 'HTML' },
  css: { icon: '../../../../../assets/images/css.png', name: 'CSS' },
  js: { icon: '../../../../../assets/images/js.svg', name: 'JavaScript' },
  react: { icon: '../../../../../assets/images/react-1.svg', name: 'React' },
  redux: { icon: '../../../../../assets/images/redux.svg', name: 'Redux' },
  figma: { icon: '../../../../../assets/images/figma.svg', name: 'Figma' },
  reactHookForm: { icon: '../../../../../assets/images/rhf.svg', name: 'React Hook Form' },
  ts: { icon: '../../../../../assets/images/typescript.svg', name: 'TypeScript' },
  mui: { icon: '../../../../../assets/images/mui.png', name: 'MUI' },
  github: { icon: '../../../../../assets/images/github.png', name: 'GitHub' },
  linkedinIcon: { icon: '../../../../../assets/images/linkedin.svg', name: 'LinkedIn' },
  gmail: { icon: '../../../../../assets/images/gmail.svg', name: 'Gmail' },
}

const ProjectCard = ({ data: { imageSrc, imageAlt, field, text, title, usedTechnologies, buttonLink } }: IProjectCard) => {

  return (
    <CardContainer>
      <StyledImage src={imageSrc} alt={imageAlt} />
      <ProjectField>{field}</ProjectField>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{text}</ProjectDescription>
      <CardFooter>
        <IconsContainer>
          {usedTechnologies.map((el) => (
            //   <StyledIcon
            //     key={techIcons[el].name}
            //     src={techIcons[el].icon}
            //     alt={techIcons[el].name} />
            // ))
            <TechName
              key={techIcons[el].name}>
              {techIcons[el].name}
            </TechName>
          ))
          }
        </IconsContainer>
        <StyledButton variant='contained'>
          <StyledLink href={buttonLink} target='_blank'>View code</StyledLink>
        </StyledButton>
      </CardFooter>
    </CardContainer>
  )
};

export default ProjectCard;