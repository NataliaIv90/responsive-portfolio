import { myPages } from "@/shared/constants"
import { StyledDiv, StyledLink } from './FooterStyled';

export const FooterComponent = () => {
  return (
    <footer>
      <StyledDiv>
        {myPages.map((el) => {
          if (el.id !== 'interests') {
            return <StyledLink href={`#${el.id}`} key={el.id}>{el.text}</StyledLink>
          }
        })}
      </StyledDiv>
      <StyledDiv>&copy; Natalia Ivantsova {new Date().getFullYear()}</StyledDiv>
    </footer>
  )
}