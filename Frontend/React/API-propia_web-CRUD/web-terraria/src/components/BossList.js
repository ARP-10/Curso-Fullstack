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
        <div style={{paddingTop:'80px'}}>
            <ul className='list-group list-group-flush'>
                {bosses.map(boss => (
                    <li key={boss.id} className='list-group-item'>
                        <h4 className='d-flex align-items-center justify-content-center'>{boss.nombre}</h4>
                        <p><strong><em>Invocador: </em></strong>{boss.invocador}</p>
                        <p>{boss.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BossList;