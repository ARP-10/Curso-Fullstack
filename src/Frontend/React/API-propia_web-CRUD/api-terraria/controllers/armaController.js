const fs = require('fs');
const path = require('path');

exports.getArmas = (req, res) => {
    const npcPath = path.join(__dirname, '../data/armas.json');
        fs.readFile(npcPath, (err, data) => {
            if (err) {
                res.status(500).send('Error al leer los datos de las armas');
                return;
            }
            res.json(JSON.parse(data));
        });
};