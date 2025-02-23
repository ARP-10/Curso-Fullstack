import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/biomas';

const BiomaList = () => {
    const [biomas, setBiomas] = useState([]);

    useEffect(() => {
        axios.get(API_URL).then(response => {
            setBiomas(response.data);
        })
        .catch(error => {
            console.error('Hubo un error al obtener los Biomas:', error);
        });

    }, []);

    return(
        <div>
            <ul>
                {biomas.map(bioma => (
                    <li key={bioma.id}>
                        <h4>{bioma.nombre}</h4>
                        <p>{bioma.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BiomaList;