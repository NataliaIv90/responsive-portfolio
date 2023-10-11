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