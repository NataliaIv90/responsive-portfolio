import { IMyPagesItem } from './interfaces';
// import cssIcon from '../assets/images/css.png';
// import htmlIcon from '../assets/images/HTML5.svg';
// import jsIcon from '../assets/images/js.svg';
// import reactIcon from '../assets/images/react-1.svg';
// import figmaIcon from '../assets/images/figma.svg';
// import reduxIcon from '../assets/images/redux.svg';
// import reactHFIcon from '../assets/images/rhf.svg';
// import tsIcon from '../assets/images/typescript.svg';
// import muiIcon from '../assets/images/mui.png';
// import gmailIcon from '../assets/images/gmail.svg';
// import githubIcon from '../assets/images/github.png';
// import linkedinIcon from '../assets/images/linkedin.svg';

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
  { key: 'git', icon: '../assets/images/github.png', path: links.github },
  { key: 'linkedin', icon: '../assets/images/linkedin.svg', path: links.linkedIn },
  { key: 'gmail', icon: '../assets/images/gmail.svg', path: links.gmail },
];

export const techIcons = {
  html: { icon: '../assets/images/HTML5.svg', name: 'HTML' },
  css: { icon: '../assets/images/css.png', name: 'CSS' },
  js: { icon: '../assets/images/js.svg', name: 'JavaScript' },
  react: { icon: '../assets/images/react-1.svg', name: 'React' },
  redux: { icon: '../assets/images/redux.svg', name: 'Redux' },
  figma: { icon: '../assets/images/figma.svg', name: 'Figma' },
  reactHookForm: { icon: '../assets/images/rhf.svg', name: 'React Hook Form' },
  ts: { icon: '../assets/images/typescript.svg', name: 'TypeScript' },
  mui: { icon: '../assets/images/mui.png', name: 'MUI' },
  github: { icon: '../assets/images/github.png', name: 'GitHub' },
  linkedinIcon: { icon: '../assets/images/linkedin.svg', name: 'LinkedIn' },
  gmail: { icon: '../assets/images/gmail.svg', name: 'Gmail' },
}