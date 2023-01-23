const express = require('express');
const router = express.Router();

const controller = require('../controllers/usersController');

router.get('/', controller.lista);
router.get('/:id', controller.show);
router.post('/', controller.store);
router.delete('/:id', controller.delete);

module.exports = router;