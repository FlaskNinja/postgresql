const express = require('express');
const router = express.Router();
const { getUser, postUser, getUserId, updateUser, deleteUser } = require('../controllers/usercontrollers');

router.get('/', getUser);
router.post('/', postUser);
router.get('/:id', getUserId);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
