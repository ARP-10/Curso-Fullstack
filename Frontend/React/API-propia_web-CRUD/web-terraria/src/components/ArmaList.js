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
        <div>
            <ul>
                {armas.map(arma => (
                    <li key={arma.id}>
                        <h4>{arma.nombre}</h4>
                        <p>{arma.clase}</p>
                        <p>{arma.tipo}</p>
                        <p>{arma.danio}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArmaList;
