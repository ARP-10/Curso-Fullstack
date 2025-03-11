const fs = require('fs');
const path = require('path');

exports.getBiomas = (req, res) => {
    const biomaPath = path.join(__dirname, '../data/biomas.json');
    fs.readFile(biomaPath, (err, data) => {
        if (err) {
            res.status(500).send('Error al leer los datos de los Biomas');
            return;
        }
        res.json(JSON.parse(data));
    });
};
