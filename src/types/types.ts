export enum ETechOptions {
  thtml = 'html',
  tcss = 'css',
  tjs = 'js',
  treact = 'react',
  tredux = 'redux',
  tfigma = 'figma',
  treactHookForm = 'reactHookForm',
  tts = 'ts',
  tmui = 'mui'
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