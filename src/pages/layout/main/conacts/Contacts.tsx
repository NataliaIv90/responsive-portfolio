import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconsContainer, StyledLink } from './Contacts.styled';
import { SectionWrapper } from '../MainComponent';
import { links } from '@/shared/constants';

const linksProrps = [
  { key: 'git', icon: faGithub, path: links.github },
  { key: 'linkedin', icon: faLinkedin, path: links.linkedIn },
  { key: 'gmail', icon: faGoogle, path: links.gmail },
]

const Contacts = () => {
  return (
    <SectionWrapper
      id='contacts'
      text='I’m  currently open to new opportunities, inbox is always open! You can contact me by the links below.'
      title='get in touch'
    >
      <IconsContainer>
        {linksProrps.map((el) => (
          <StyledLink key={el.key} href={el.path} target='_blank'>
            <FontAwesomeIcon icon={el.icon} size="2x" />
          </StyledLink>
        ))}
      </IconsContainer>
    </SectionWrapper>
  )
};

export default Contacts;