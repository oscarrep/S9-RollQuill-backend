const express = require('express');
const { userController, getUserByFirebaseUid } = require('../controllers/main.controller');

const router = express.Router();

router.get('/firebase/:uid', getUserByFirebaseUid);

router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);


module.exports = router;