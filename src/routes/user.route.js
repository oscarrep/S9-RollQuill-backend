const express = require('express');
const { userController, getUserByFirebaseUid } = require('../controllers/main.controller');

const router = express.Router();

router.get('/firebase/:uid', getUserByFirebaseUid);

router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.post('/', userController.create);
router.put('/:id', userController.update);

router.patch('/:id/add-character', async (req, res) => {
  const { id } = req.params;
  const { charId } = req.body;

  try {
    console.log('Adding character with id:', charId)
    const updatedUser = await require('../models/user.model.js').findByIdAndUpdate(
      id,
      { $addToSet: { characters: charId } },
      { new: true }
    );
    console.log('Successfully updated user: ', updatedUser)
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user with character', error: err });
  }
});

router.delete('/:id', userController.remove);


module.exports = router;