import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/bosses';

const BossList = () => {
    const [bosses, setBosses] = useState([]);

    useEffect(() => {
        axios.get(API_URL).then(response => {
            setBosses(response.data);
        })
        .catch(error => {
            console.error('Hubo un error al obtener los Bosses:', error);
        });

    }, []);

    return(
        <div style={{ paddingTop: '80px', color: '#261914' }}>
            <ul className='list-group list-group-flush'>
                {bosses.map(boss => (
                    <li key={boss.id} className='list-group-item'>
                    <div className='d-flex align-items-center justify-content-center mb-3'>
                        <img src={boss.imagen} alt={boss.nombre} style={{ width: '100px', marginRight: '10px' }} />
                        <h4>{boss.nombre}</h4>
                    </div>
                    <p><strong><em>Invocador: </em></strong>{boss.invocador}</p>
                    <p>{boss.descripcion}</p>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default BossList;