import React from "react";

import '../styles/BotonClear.css';

const BotonClear = ({ children, manejarClear}) => (
    <div
    className='boton-clear'
    onClick={manejarClear}>
        {children}
    </div>
);

export default BotonClear;