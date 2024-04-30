const express = require('express');
const router = express.Router();
// Importa el controlador
const { insertEvent } = require('../controllers/eventController');

// Utilitza el controlador per a la ruta que llista tots els usuaris
router.post('/api/events', insertEvent);

// router.get('/api/events/:id', recoverEventById);

module.exports = router;
