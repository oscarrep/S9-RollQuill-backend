const Character = require('../models/character.model');
const User = require('../models/user.model');
const generateController = require('../utils/generateController');

const characterController = generateController(Character);
const userController = generateController(User);

const getUserByFirebaseUid = async (req, res) => {
  try {
    const user = await User.findOne({ fireUid: req.params.uid });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  characterController,
  userController,
  getUserByFirebaseUid
};