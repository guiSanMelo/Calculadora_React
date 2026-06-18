import { Container, Content, Row, Column } from "./styles/App";
import Button from './components/button/button';
import Input from "./components/input/index";
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [result, setResult] = useState('0');
  const [operation, setOperation] = useState([]);
  const [operands, setOperands] = useState([])

  const handleAddNumber = (number) => {
    setCurrentNumber(prev =>
      prev === "0" ? String(number) : `${prev}${number}`
    );
  };

  const handleCLear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation([]);
    setOperands([])
  };

  const handleOperation = (number, op) => {
    const num = Number(number);

    setOperands(prev => [...prev, num]);
    setOperation(prev => [...prev, op]);
    setCurrentNumber('0');
  };

  const handleEquals = () => {
    const newOperands = [...operands, currentNumber]; 
    const newOperation = [...operation];

    let acc = Number(newOperands.shift());

    for (let i = 0; i < newOperation.length; i++) {
      const sinal = newOperation[i];
      const next = Number(newOperands[i]);

      switch (sinal) {
        case "+":
          acc = acc + next;
          break;
        case "-":
          acc = acc - next;
          break;
        case "*":
          acc = acc * next;
          break;
        case "/":
          if (next === 0) {
            console.log(`Impossível dividir ${acc}/${next}`);
            return;
          }
          acc = acc / next;
          break;
        case "^":
          acc = acc ** next;
          break;
        case "√":
          acc = acc ** (1 / next);
          break;
        default:
          break;
      }
    }
    acc = Math.round(acc);
    setResult(acc);
    setCurrentNumber(String(acc));
    setOperands([]);
    setOperation([]);
  };

  return (
    <Container>
      <Input
        // value={
        //   currentNumber === '0'
        //     ? ''
        //     : [...operands, currentNumber].join(' ')
        // }
        value={currentNumber}
      />
      <Content>

        <Column>
          <Row>
            <Button label={"C"} onClick={() => handleCLear()} />
            <Button label={"^"} onClick={() => handleOperation(currentNumber, "^")} />
            <Button label={"√"} onClick={() => handleOperation(currentNumber, "√")} />
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
          <Button label={"+"} onClick={() => handleOperation(currentNumber, '+')} />
          <Button label={"-"} onClick={() => handleOperation(currentNumber, '-')} />
          <Button label={"x"} onClick={() => handleOperation(currentNumber, '*')} />
          <Button label={"/"} onClick={() => handleOperation(currentNumber, '/')} />
          <Button label={"="} onClick={() => handleEquals()} />
        </Column>



      </Content>
    </Container>
  );
}

export default App;
