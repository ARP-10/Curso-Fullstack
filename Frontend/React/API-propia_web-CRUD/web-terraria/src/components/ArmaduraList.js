import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/armaduras';

const ArmaduraList = () => {
    const [armaduras, setArmaduras] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setArmaduras(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al obtener las armaduras:', error);
            });
    }, []);

    return(
        <div style={{paddingTop:'80px'}}>
            <ul className='list-group list-group-flush'>
                {armaduras.map(armadura => (
                    <li key={armadura.id} className='list-group-item'>
                        <h4 className='d-flex align-items-center justify-content-center'>{armadura.nombre}</h4>
                        <p><strong><em>Defensa: </em></strong>{armadura.defensa}</p>
                        <p><strong><em>Bonificación: </em></strong>{armadura.bonificacion}</p>
                        <p><strong><em>Crafteo: </em></strong>{armadura.crafteo}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArmaduraList;
