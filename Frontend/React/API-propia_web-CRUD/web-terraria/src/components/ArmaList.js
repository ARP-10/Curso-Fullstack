import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/armas';

const ArmaList = () => {
    const [armas, setArmas] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setArmas(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al obtener las armas:', error);
            });
    }, []);

    return(
        <div style={{paddingTop:'80px'}}>
            <ul className='list-group list-group-flush'>
                {armas.map(arma => (
                    <li key={arma.id} className='list-group-item'>
                        <h4 className='d-flex align-items-center justify-content-center'>{arma.nombre}</h4>
                        <p><strong><em>Clase: </em></strong>{arma.clase}</p>
                        <p><strong><em>Tipo: </em></strong>{arma.tipo}</p>
                        <p><strong><em>Daño: </em></strong>{arma.danio}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArmaList;
