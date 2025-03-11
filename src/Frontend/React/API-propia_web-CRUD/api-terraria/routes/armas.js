const express = require('express');
const router = express.Router();
const armaController = require('../controllers/armaController');

router.get('/', armaController.getArmas);

module.exports = router;