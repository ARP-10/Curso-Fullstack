const fs = require('fs');
const path = require('path');

exports.getArmaduras = (req, res) => {
    const armadurasPath = path.join(__dirname, '../data/armaduras.json');
    fs.readFile(armadurasPath, (err, data) => {
        if (err) {
            res.status(500).send('Error al leer los datos de las armaduras');
            return;
        }
        res.json(JSON.parse(data));
    });
};
