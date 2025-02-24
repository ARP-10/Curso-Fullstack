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
        <div style={{paddingTop:'80px'}}>
            <ul className='list-group list-group-flush'>
                {biomas.map(bioma => (
                    <li key={bioma.id} className='list-group-item'>
                        <h4 className='d-flex align-items-center justify-content-center'>{bioma.nombre}</h4>
                        <p>{bioma.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BiomaList;