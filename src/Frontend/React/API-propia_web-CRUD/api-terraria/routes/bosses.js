const express = require('express');
const router = express.Router();
const bossController = require('../controllers/bossController');

// Definir rutas
router.get('/', bossController.getBosses);

module.exports = router;