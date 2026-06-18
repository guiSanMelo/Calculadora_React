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
    setOperation('');
    setOperands('')
  };

  const handleOperation = (number, operation) => {
    const num = Number(number);
    switch (operation) {
      case '+':
        setOperands(prevOperands => {
          if (prevOperands.length === 0) {
            return [num];
          }

          return [...prevOperands, currentNumber];
        });
        setCurrentNumber('0')
        setOperation('+');
        break;
      case '-':
        setOperands(prevOperands => {
          if (prevOperands.length === 0) {
            return [num];
          }

          return [...prevOperands, currentNumber];
        });
        setCurrentNumber('0');
        setOperation('-');
        break;
      case '*':
        setOperands(prevOperands => {
          if (prevOperands.length === 0) {
            return [num];
          }

          return [...prevOperands, currentNumber];
        });
        setCurrentNumber('0');
        setOperation('*');
        break;
      case '/':
        setOperands(prevOperands => {
          if (prevOperands.length === 0) {
            return [num];
          }

          return [...prevOperands, currentNumber];
        });
        setCurrentNumber('0');
        setOperation('/');
        break;
      case '^':
        setOperands(prevOperands => {
          if (prevOperands.length === 0) {
            return [num];
          }

          return [...prevOperands, currentNumber];
        });
        setCurrentNumber('0');
        setOperation('^');
        break;
      case '√':
        setOperands(prevOperands => {
          if (prevOperands.length === 0) {
            return [num];
          }
          return [...prevOperands, currentNumber];
        });
        setCurrentNumber(num);
        setOperation('√');
        break;
      default:
        break;
    }
  }

  const handleEquals = () => {
    const newOprands = [...operands]
    // if (top!=Number) {

    // }
    let top = newOprands.shift()
    if (top == Number) {
      setResult(top)
    } else {

    }
    for (let index = 0; index < operands.length; index++) {
      let sinal = newOprands.shift()
      switch (sinal) {
        case "+":

          break;
        case "+":

          break;
        case "-":

          break;
        case "*":

          break;
        case "/":

          break;
        case "^":

          break;
        case "√":

          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Input
        value={
          currentNumber === '0'
            ? ''
            : [...operands, currentNumber].join(' ')
        }
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
          <Button label={"="} />
        </Column>



      </Content>
    </Container>
  );
}

export default App;
