import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics (numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <h1 className='titulo'>Contador</h1>
      <div className='contenedor-principal'>
        <Contador
        numClics={numClics}/>
        <Boton
          texto='Click'
          esBotonDeClic={ true }
          manejarClic={manejarClic} />
          <Boton
          texto='Reiniciar'
          esBotonDeClic={ false }
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
