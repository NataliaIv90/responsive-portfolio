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
} from './Hero.styled';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { links } from '@/shared/constants';

const linksProrps = [
  { key: 'git', icon: faGithub, path: links.github },
  { key: 'linkedin', icon: faLinkedin, path: links.linkedIn },
  { key: 'gmail', icon: faGoogle, path: links.gmail },
]

const Hero = () => {
  return (
    <HeroWrapper>
      <StyledGreeting>hello!</StyledGreeting>
      <StyledTitle>
        <p>I&apos;m Natalia, a coding newbie with big dreams and small syntax errors. I&apos;m here to turn &apos;I have no idea what I&apos;m doing&apos; into &apos;I got this!&apos;</p>
        <p>Welcome to my portfolio.</p>
      </StyledTitle>
      <HeroFooter>
        <IconsContainer>
          {linksProrps.map((el) => (
            <StyledLinkLight key={el.key} href={el.path} target='_blank'>
              <StyledIcon icon={el.icon} />
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
};

export default Hero;