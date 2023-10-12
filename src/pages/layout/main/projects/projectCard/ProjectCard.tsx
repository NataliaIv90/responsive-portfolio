import { StyledImage, ProjectField, StyledLink, StyledButton, CardContainer, ProjectTitle, ProjectDescription, CardFooter, StyledIcon, IconsContainer } from './ProjectCard.styled';
import { IProjectCardProps } from '../../../../../types/types';
import { techIcons } from '../../../../../shared/constants';


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