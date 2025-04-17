const express = require('express');
const router = express.Router();
const Character = require('../models/character.model.js');
const { getCharacters, getCharacter, createCharacter, deleteCharacter, updateCharacter } = require('../controllers/character.controller.js');

router.get('/', getCharacters)
router.get('/:id', getCharacter)
router.post('/', createCharacter)
router.put('/:id', updateCharacter)
router.delete('/:id', deleteCharacter)


modula.exports = router;