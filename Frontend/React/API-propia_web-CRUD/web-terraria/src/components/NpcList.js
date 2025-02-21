import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/npcs';

const NpcList = () => {
    const [npcs, setNpcs] = useState([]);

    useEffect(() => {
        axios.get(API_URL).then(response => {
            setNpcs(response.data);
        })
        .catch(error => {
            console.error('Hubo un error al obtener los NPC:', error);
        });

    }, []);

    return(
        <div>
            <ul>
                {npcs.map(npc => (
                    <li key={npc.id}>
                        <h4>{npc.nombre}</h4>
                        <p>{npc.rol}</p>
                        <p>{npc.informacion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NpcList;