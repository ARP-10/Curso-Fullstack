const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Hola Terraria!');
});

// Importar las rutas
const rutaNpcs = require('./routes/npcs'); 
const rutaArmas = require('./routes/armas');
const rutaArmaduras = require('./routes/armaduras');
const rutaBiomas = require('./routes/biomas');
const rutaBosses = require('./routes/bosses');

app.use('/npcs', rutaNpcs);
app.use('/armas', rutaArmas);
app.use('/armaduras', rutaArmaduras);
app.use('/biomas', rutaBiomas);
app.use('/bosses', rutaBosses);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
