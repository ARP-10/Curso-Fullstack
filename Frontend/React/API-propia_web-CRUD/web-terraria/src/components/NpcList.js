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
        <div style={{paddingTop:'80px'}}>
            <ul className='list-group list-group-flush'>
                {npcs.map(npc => (
                    <li key={npc.id} className='list-group-item'>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <img src={npc.imagen} alt={npc.nombre} style={{ width: '30px', marginRight: '10px' }} />
                            <h4 className='d-flex align-items-center justify-content-center'>{npc.nombre}</h4>
                        </div>
                        <p><strong><em>Rol:</em></strong> {npc.rol}</p>
                        <p><strong><em>Información:</em></strong> {npc.informacion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NpcList;