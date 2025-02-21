const express = require('express');
const router = express.Router();
const npcController = require('../controllers/npcController');

// Definir rutas
router.get('/', npcController.getNpcs);

module.exports = router;