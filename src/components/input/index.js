import { InputContainer } from "../../styles/input";

const Input = ({
  value
})=>  {
  return (
    <InputContainer className="Imput">
      <input value={value}/>
    </InputContainer>
  );
}

export default Input;
