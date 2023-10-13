import Link from 'next/link';
import { IProjectCardProps } from '../../../../../types/types';
import { FC } from 'react';
import { Button } from '@mui/material';

const ProjectCard: FC<{ data: IProjectCardProps }> = ({ data }) => {
  const { title, field, text, usedTechnologies, imageSrc, imageAlt, buttonLink } = data;

  return (
    <div>
      <div><img src={imageSrc} alt={imageAlt} /></div>
      <p>{title}</p>
      <p>{field}</p>
      <p>{text}</p>
      <p>{usedTechnologies.map((el) => (<span key={el}>{el}</span>))}</p>
      <Link href={buttonLink}><Button>View code</Button></Link>
    </div>
  )
};

export default ProjectCard;