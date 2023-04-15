const Express = require('express');
const router2 = new Express();
const loadController = require('../controllers/loadController.ts');
// const userController = require('../controllers/userController');
// const authMiddleware = require('../middleware/authMiddleware');

router2.get('/', loadController.getAll);
router2.post('/', loadController.create);
// router.post('/login', userController.login);
// router.get('/auth', authMiddleware, userController.check);

module.exports = router2;
