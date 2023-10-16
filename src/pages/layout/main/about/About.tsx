import { SectionWrapper } from '../MainComponent';
import photo from './photo.jpg';
import { StyledImage, AboutSectionWrapper } from './About.styled';

const About = () => {
  return (
    <SectionWrapper
      id='about'
      text='Hello! I&rsquo;m Natalia Ivantsova, a self-taught frontend developer with a passion for creating intuitive and user-friendly web experiences.'
      title='about me'
    >
      <AboutSectionWrapper>
        <StyledImage
          priority={false}
          src={photo}
          alt='Picture of the author'
        />
        <div>
          <p>My journey into the world of web development started with a thirst for knowledge and a laptop. I didn&apos;t have a formal education in this field, but I was determined to learn, and I believe that passion is the most important ingredient in success.</p>
          <p>I honed my skills by devouring YouTube tutorials, scouring through resources like <em>developer.mozilla.org</em>, <em>React</em>, <em>TypeScript</em> and <em>Redux</em> documentation... This self-guided approach allowed me to grasp the intricacies of frontend development at my own pace.</p>
          <p>Additionally, I had the privilege of attending the <em>TechFabrique Frontend School</em>, where I had the opportunity to learn from industry experts and collaborate with like-minded individuals. This experience not only added to my knowledge but also reinforced the importance of teamwork and effective communication in the development process.</p>
          <p>I believe that the world of web development is a canvas where innovation and creativity can thrive, and I&apos;m excited to be a part of this ever-evolving journey.</p>
        </div>
      </AboutSectionWrapper>
    </SectionWrapper >
  )
};

export default About;