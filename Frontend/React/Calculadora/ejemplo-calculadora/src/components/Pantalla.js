import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Pantalla({ className, value }) {
    return (
        <input className={`text mb-3 form-control text-end ${className}`} value={ value }readOnly />
    );
}

export default Pantalla;
