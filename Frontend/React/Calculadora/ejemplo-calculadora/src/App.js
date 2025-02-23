import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState } from 'react';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';

function App() {
  const buttonStyle = { width: '60px', height: '60px' };
  const buttonClear = { width: '262px', height: '60px' };
  const container = { width: '300px'}

  const [mostrarValor, setMostrarValor] = useState('');
  const [op1, setOp1] = useState(null);
  const [op, setOp] = useState(null); 

  const handleButtonClick = (valor) => {
    if (['+', '-', '*', '/'].includes(valor)){
      setOp(valor);
      setOp1(parseFloat(mostrarValor));
      setMostrarValor('');
    } else if (valor === '=') {
      if (op1 !== null && op !== null) {
        const op2 = parseFloat(mostrarValor);
        realizarOp(op1, op2, op);
      }
    } else if (valor === 'C') {
      resetCalculadora();
    } else {
      setMostrarValor(mostrarValor + valor);
    }
  };

  const realizarOp = (op1, op2, op) => {
    let resultado;
    switch(op) {
      case '+':
        resultado = op1 + op2;
        break;

      case '-':
        resultado = op1 - op2;
        break;

      case '*':
        resultado = op1 * op2;
        break;

      case '/':
        resultado = op1 / op2;
        break;

      default:
        break;
    }

    setMostrarValor(resultado.toString());
    setOp1(null);
    setOp(null);
  }

  const resetCalculadora = () => {
    setMostrarValor('');
    setOp1(null);
    setOp(null);
  };

  return (
    <div className="text-center bg-white">
      <h1 className="text-primary m-3">CALCULADORA</h1>
      <div className="container border border-primary rounded p-3" style={container}>
        {/* Pantalla */}
        <Pantalla className="custom-class" value={mostrarValor} />

        {/* Filas de botones */}
        <div className="d-flex justify-content-center my-2">
          <Boton variant="outline-primary" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('7')}>7</Boton>
          <Boton variant="outline-primary" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('8')}>8</Boton>
          <Boton variant="outline-primary" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('9')}>9</Boton>
          <Boton variant="outline-info" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('/')}>/</Boton>
        </div>

        <div className="d-flex justify-content-center my-2">
          <Boton variant="outline-primary" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('4')}>4</Boton>
          <Boton variant="outline-primary" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('5')}>5</Boton>
          <Boton variant="outline-primary" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('6')}>6</Boton>
          <Boton variant="outline-info" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('*')}>*</Boton>
        </div>

        <div className="d-flex justify-content-center my-2">
          <Boton variant="outline-primary" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('1')}>1</Boton>
          <Boton variant="outline-primary" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('2')}>2</Boton>
          <Boton variant="outline-primary" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('3')}>3</Boton>
          <Boton variant="outline-info" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('-')}>-</Boton>
        </div>

        <div className="d-flex justify-content-center my-2">
          <Boton variant="success" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('=')}>=</Boton>
          <Boton variant="outline-primary" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('0')}>0</Boton>
          <Boton variant="outline-primary" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('.')}>.</Boton>
          <Boton variant="outline-info" style={buttonStyle} className="mx-1" onClick={() => handleButtonClick('+')}>+</Boton>
        </div>

        <div className="d-flex justify-content-center my-2">
          <Boton variant="danger" style={buttonClear} className="mx-1" onClick={() => handleButtonClick('C')}>C</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
