import { PropsWithChildren, ReactElement } from 'react';
import { Contacts } from './conacts/Contacts';
import { MainWrapper, StyledText, StyledTitle, SectionContainer } from './Main.styled';
import { About } from './about/About';
import { Interests } from './interests/Interests';
import { Projects } from './projects/Projects';
import { Hero } from './hero/Hero';

interface ISectionWrapper {
  title: string,
  text: string,
  id: string,
  children: ReactElement
}

export const SectionWrapper = ({
  title, text, children, id
}: PropsWithChildren<ISectionWrapper>) => {
  return (
    <SectionContainer id={id}>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
      {children}
    </SectionContainer>
  )
}

export const Main = () => {
  return (
    <MainWrapper>
      <Hero />
      <About />
      <Interests />
      <Projects />
      <Contacts />
    </MainWrapper>
  )
}