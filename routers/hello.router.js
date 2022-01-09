var express = require('express');
const {
	createUser,
	getAllUser,
	getUserById,
	updateUserById,
	deleteUserByid,
} = require('../controllers/user.controllers');
var router = express.Router();

router.get('/', getAllUser);
router.post('/', createUser);
router.get('/:id', getUserById);
router.put('/', updateUserById);
router.delete('/:id', deleteUserByid);

module.exports = router;
