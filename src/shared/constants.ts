import { IMyPagesItem } from './interfaces';
import cssIcon from '../assets/images/css.png';
import htmlIcon from '../assets/images/HTML5.svg';
import jsIcon from '../assets/images/js.svg';
import reactIcon from '../assets/images/react-1.svg';
import figmaIcon from '../assets/images/figma.svg';
import reduxIcon from '../assets/images/redux.svg';
import reactHFIcon from '../assets/images/rhf.svg';
import tsIcon from '../assets/images/typescript.svg';
import muiIcon from '../assets/images/mui.png';
import gmailIcon from '../assets/images/gmail.svg';
import githubIcon from '../assets/images/github.png';
import linkedinIcon from '../assets/images/linkedin.svg';

export const myPages: IMyPagesItem[] = [
  { id: 'about', text: 'About Me' },
  { id: 'interests', text: 'Interests' },
  { id: 'projects', text: 'Projects' },
  { id: 'contacts', text: 'Get in touch' },
];

export const links = {
  linkedIn: 'https://www.linkedin.com/in/natalia-ivantsova-46017b238/',
  github: 'https://github.com/NataliaIv90',
  gmail: 'mailto:ivantsovana1@gmail.com'
};

export const linksProrps = [
  { key: 'git', icon: githubIcon, path: links.github },
  { key: 'linkedin', icon: linkedinIcon, path: links.linkedIn },
  { key: 'gmail', icon: gmailIcon, path: links.gmail },
];

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
  github: { icon: githubIcon, name: 'GitHub' },
  linkedinIcon: { icon: linkedinIcon, name: 'LinkedIn' },
  gmail: { icon: gmailIcon, name: 'Gmail' },
}