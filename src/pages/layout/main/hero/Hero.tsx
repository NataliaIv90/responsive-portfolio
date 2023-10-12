import {
  HeroWrapper,
  StyledTitle,
  StyledGreeting,
  HeroFooter,
  IconsContainer,
  ButtonsContainer,
  StyledHeroButton,
  StyledLinkDark,
  StyledLinkLight,
  StyledIcon,
  StyledContainedButton
} from './HeroStyled';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

const linksProrps = [
  { key: 'git', icon: faGithub, path: '' },
  { key: 'linkedin', icon: faLinkedin, path: '' },
  { key: 'gmail', icon: faGoogle, path: '' },
]

export const Hero = () => {
  return (
    <HeroWrapper>
      <StyledGreeting>hello!</StyledGreeting>
      <StyledTitle>I'm Natalia, a coding newbie with big dreams and small syntax errors. I'm here to turn 'I have no idea what I'm doing' into 'I got this!'</StyledTitle>
      <HeroFooter>
        <IconsContainer>
          {linksProrps.map((el) => (
            <StyledLinkLight key={el.key} href={el.path}>
              <StyledIcon icon={el.icon} size="2x" />
            </StyledLinkLight>
          ))}
        </IconsContainer>
        <ButtonsContainer>
          <StyledHeroButton variant='outlined'>
            <StyledLinkLight href='/'>view projects</StyledLinkLight>
          </StyledHeroButton>
          <StyledContainedButton variant='contained'>
            <StyledLinkDark href='/'>get in touch</StyledLinkDark>
          </StyledContainedButton>
        </ButtonsContainer>
      </HeroFooter>
    </HeroWrapper>
  )
}