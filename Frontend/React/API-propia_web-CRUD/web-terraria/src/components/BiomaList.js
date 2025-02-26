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
                    <div className='d-flex flex-column align-items-center mb-3'>
                    <img src={bioma.imagen} alt={bioma.nombre} style={{ width: '200px', marginTop: '10px' }} />
                    <h4 className='mt-3'>{bioma.nombre}</h4>
                    </div>
                    <p>{bioma.descripcion}</p>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default BiomaList;