const { User } = require('../models');

const createUser = async (req, res) => {
	const newUser = {
		firstName: req.body.firstName,
	};

	try {
		await User.create(newUser);
		res.send('create successfully');
	} catch (error) {
		console.log(error);
		res.send('loi roi be oi');
	}
};

const getAllUser = async (req, res) => {
	try {
		const data = await User.findAll();
		res.send(data);
	} catch (error) {
		res.send(error);
	}
};

const getUserById = async (req, res) => {
	const { id } = req.params;
	try {
		const data = await User.findOne({ where: { id: id } });
		res.render('index', { title: 'user info', message: data.firstName });
	} catch (error) {
		res.send(error);
	}
};

const updateUserById = async (req, res) => {
	const { id, lastName } = req.body;
	try {
		const data = await User.update(
			{ lastName: lastName },
			{ where: { id: id } }
		);
		res.send(data);
	} catch (error) {
		res.send(error);
	}
};

const deleteUserByid = async (req, res) => {
	const { id } = req.params;
	try {
		await User.destroy({ where: { id: id } });
		res.send('delete successfully');
	} catch (error) {
		res.send(error);
	}
};

module.exports = {
	createUser,
	getAllUser,
	getUserById,
	updateUserById,
	deleteUserByid,
};
