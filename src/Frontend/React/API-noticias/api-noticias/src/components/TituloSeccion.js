import React from 'react';
import '../styles/TituloSeccion.css';

const TituloSeccion = ({ texto }) => {
  return (
    <div className='decoracion-container'>
      <span className='decoracion-linea'></span>
      <span className='decoracion-texto'>{texto}</span>
      <span className='decoracion-linea'></span>
    </div>
  );
}

export default TituloSeccion;
