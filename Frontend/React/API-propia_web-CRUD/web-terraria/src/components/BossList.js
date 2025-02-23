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
        <div>
            <ul>
                {bosses.map(boss => (
                    <li key={boss.id}>
                        <h4>{boss.nombre}</h4>
                        <p>{boss.invocador}</p>
                        <p>{boss.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BossList;