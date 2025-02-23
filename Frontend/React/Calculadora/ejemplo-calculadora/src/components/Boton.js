import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'react-bootstrap';

function Boton({ variant, children, onClick, className, style }) {
    return(
        <Button
            variant={variant}
            onClick={onClick}
            className={className}
            style={style}>
            { children }
        </Button>
    );
};

export default Boton;