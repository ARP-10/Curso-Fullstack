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
        <div>
            <ul>
                {armaduras.map(armadura => (
                    <li key={armadura.id}>
                        <h4>{armadura.nombre}</h4>
                        <p>{armadura.defensa}</p>
                        <p>{armadura.bonificacion}</p>
                        <p>{armadura.crafteo}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArmaduraList;
