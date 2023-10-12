import { SectionWrapper } from '../MainComponent';
import photo from './photo.jpg';
import { StyledImage } from './AboutStyled';

export const About = () => {
  return (
    <SectionWrapper
      id='about'
      text='Hello! I&rsquo;m Natalia Ivantsova, a self-taught frontend developer with a passion for creating intuitive and user-friendly web experiences.'
      title='about me'
    >
      <div>
        <StyledImage
          src={photo}
          alt='Picture of the author'
        />
        <p>My journey into the world of web development started with a thirst for knowledge and a laptop. I didn't have a formal education in this field, but I was determined to learn, and I believe that passion is the most important ingredient in success.</p>
        <p>I honed my skills by devouring YouTube tutorials, scouring through resources like developer.mozilla.org, React, TypeScript and Redux documentation... This self-guided approach allowed me to grasp the intricacies of frontend development at my own pace.</p>
        <p>To further expand my knowledge, I embarked on a journey with Coursera, where I completed courses to solidify my foundation in web development. The mix of self-teaching and structured learning has been instrumental in my growth as a developer.</p>
        <p>Additionally, I had the privilege of attending the TechFabrique Frontend School, where I had the opportunity to learn from industry experts and collaborate with like-minded individuals. This experience not only added to my knowledge but also reinforced the importance of teamwork and effective communication in the development process.</p>
        <p>My goal is to create seamless and visually appealing web solutions while continuously learning and staying up-to-date with the latest technologies and best practices in the industry. I believe that the world of web development is a canvas where innovation and creativity can thrive, and I'm excited to be a part of this ever-evolving journey.</p>
        <p>Thank you for visiting my portfolio. Feel free to explore my work and connect with me on social media to stay updated on my latest projects and insights.</p>
      </div>
    </SectionWrapper >
  )
}