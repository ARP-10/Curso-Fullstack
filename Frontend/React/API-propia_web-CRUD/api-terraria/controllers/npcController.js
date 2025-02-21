const fs = require('fs');
const path = require('path');

// Controlador para obtener los NPCs
exports.getNpcs = (req, res) => {
    const npcPath = path.join(__dirname, '../data/npcs.json');
    fs.readFile(npcPath, (err, data) => {
        if (err) {
            res.status(500).send('Error al leer los datos de los NPCs');
            return;
        }
        res.json(JSON.parse(data));
    });
};
