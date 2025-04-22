const Character = require('../models/character.model');
const User = require('../models/user.model');
const generateController = require('../utils/generateController');

const characterController = generateController(Character);
const userController = generateController(User);

module.exports = {
  characterController,
  userController
};