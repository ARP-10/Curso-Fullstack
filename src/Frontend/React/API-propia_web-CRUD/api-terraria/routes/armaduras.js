const express = require('express');
const router = express.Router();
const armaduraController = require('../controllers/armaduraController');

// Definir rutas
router.get('/', armaduraController.getArmaduras);

module.exports = router;
