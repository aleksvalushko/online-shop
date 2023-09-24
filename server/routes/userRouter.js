const Router = require('express');
const router = Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.checkAuthorization);
router.get('/users', checkRoleMiddleware('ADMIN'), userController.getUsers);

module.exports = router;