const express = require('express');
const { characterController, getCharactersByIds } = require('../controllers/main.controller');

const router = express.Router();

router.post('/batch', getCharactersByIds);

router.get('/', characterController.getAll);
router.get('/:id', characterController.getOne);
router.post('/', characterController.create);
router.put('/:id', characterController.update);
router.delete('/:id', characterController.remove);

module.exports = router;