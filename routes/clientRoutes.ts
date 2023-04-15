const { Client } = require('../models');

const Router = require('express');
const router = new Router();
// const userController = require('../controllers/userController');
// const authMiddleware = require('../middleware/authMiddleware');

router.get('/', async (req, res) => {
	const clients = await Client.findAll({});

	// const allUsers = '';

	return res.json({ clients: clients });
});
// router.post('/login', userController.login);
// router.get('/auth', authMiddleware, userController.check);

module.exports = router;
