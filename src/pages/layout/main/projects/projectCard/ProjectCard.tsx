import { StyledImage, ProjectField, StyledLink, StyledButton, CardContainer, ProjectTitle, ProjectDescription, CardFooter, TechName, IconsContainer } from './ProjectCard.styled';
import { IProjectCardProps } from '../../../../../types/types';

interface IProjectCard {
  data: IProjectCardProps;
};

export const techIcons = {
  html: { iconSrc: '../../../../../assets/images/HTML5.svg', name: 'HTML' },
  css: { iconSrc: '../../../../../assets/images/css.png', name: 'CSS' },
  js: { iconSrc: '../../../../../assets/images/js.svg', name: 'JavaScript' },
  react: { iconSrc: '../../../../../assets/images/react-1.svg', name: 'React' },
  redux: { iconSrc: '../../../../../assets/images/redux.svg', name: 'Redux' },
  figma: { iconSrc: '../../../../../assets/images/figma.svg', name: 'Figma' },
  reactHookForm: { iconSrc: '../../../../../assets/images/rhf.svg', name: 'React Hook Form' },
  ts: { iconSrc: '../../../../../assets/images/typescript.svg', name: 'TypeScript' },
  mui: { iconSrc: '../../../../../assets/images/mui.png', name: 'MUI' },
  github: { iconSrc: '../../../../../assets/images/github.png', name: 'GitHub' },
  linkediniconSrc: { iconSrc: '../../../../../assets/images/linkedin.svg', name: 'LinkedIn' },
  gmail: { iconSrc: '../../../../../assets/images/gmail.svg', name: 'Gmail' },
}

const ProjectCard = ({ data }: IProjectCard) => {
  const { imageSrc, imageAlt, field, text, title, usedTechnologies, buttonLink } = data;

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