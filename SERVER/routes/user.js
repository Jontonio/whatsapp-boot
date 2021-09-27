const { Router } = require('express');
const { usuarioGet } = require('../controllers/user');

const router = Router();

// empoit get
router.get('/', usuarioGet );


// exportamos la variable router
module.exports = router;