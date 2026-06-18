import { Container, Content, Row, Column } from "./styles/App";
import Button from './components/button/button';
import Input from "./components/input/index";
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const operationOrder = [];

  const handleAddNumber = (number) => {
    setCurrentNumber(prev =>
      prev === "0" ? String(number) : `${prev}${number}`
    );
  };

  const handleSumNumbers = (number) => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      handleCLear();
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    }
    console.log("First number: ", firstNumber);
    console.log("Current NUmber: ", currentNumber);
  };

  const handleCLear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  };

  const handleEquals = () => {

  };

  return (
    <Container>
      <Input value={currentNumber} />
      <Content>

        <Column>
          <Row>
            <Button label={"C"} onClick={() => handleCLear()} />
            <Button label={"^"} onClick={() => handleAddNumber('1')} />
            <Button label={"√"} onClick={() => handleAddNumber('1')} />
          </Row>

          <Row>
            <Button label={1} onClick={() => handleAddNumber('1')} />
            <Button label={2} onClick={() => handleAddNumber('2')} />
            <Button label={3} onClick={() => handleAddNumber('3')} />
          </Row>

          <Row>
            <Button label={4} onClick={() => handleAddNumber('4')} />
            <Button label={5} onClick={() => handleAddNumber('5')} />
            <Button label={6} onClick={() => handleAddNumber('6')} />
          </Row>

          <Row>
            <Button label={7} onClick={() => handleAddNumber('7')} />
            <Button label={8} onClick={() => handleAddNumber('8')} />
            <Button label={9} onClick={() => handleAddNumber('9')} />
          </Row>

          <Button label={0} onClick={() => handleAddNumber('0')} />
        </Column>
        <Column>
          <Button label={"+"} onClick={handleSumNumbers}/>
          <Button label={"-"} />
          <Button label={"x"} />
          <Button label={":"} />
          <Button label={"="} />
        </Column>



      </Content>
    </Container>
  );
}

export default App;
