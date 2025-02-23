const fs = require('fs');
const path = require('path');

// Controlador para obtener los NPCs
exports.getBosses = (req, res) => {
    const bossPath = path.join(__dirname, '../data/bosses.json');
    fs.readFile(bossPath, (err, data) => {
        if (err) {
            res.status(500).send('Error al leer los datos de los Bosses');
            return;
        }
        res.json(JSON.parse(data));
    });
};
