import { ButtonContainer } from "../../styles/button";

const Button = ({
  label,
  onClick
}) => {
  
  return <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
}



export default Button;