const Router = require('express');
const router = Router();
const brandController = require('../controllers/brandController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), brandController.create);
router.get('/', brandController.get);

module.exports = router;