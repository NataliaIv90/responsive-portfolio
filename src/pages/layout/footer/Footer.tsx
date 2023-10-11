import { myPages } from "@/shared/constants"
import { StyledDiv, StyledLink } from './Footer.styled';

export const Footer = () => {
  return (
    <footer>
      <StyledDiv>
        {myPages
          .filter((el) => { return el.key !== 'interests' })
          .map((el) => {
            return (<StyledLink href={el.key} key={el.key}>{el.text}</StyledLink>)
          })}
      </StyledDiv>
      <StyledDiv>&copy; Natalia Ivantsova {new Date().getFullYear()}</StyledDiv>
    </footer>
  )
}