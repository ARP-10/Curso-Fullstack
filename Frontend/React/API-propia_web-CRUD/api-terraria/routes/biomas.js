const express = require('express');
const router = express.Router();
const biomaController = require('../controllers/biomaController');

// Definir rutas
router.get('/', biomaController.getBiomas);

module.exports = router;