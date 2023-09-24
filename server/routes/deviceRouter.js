const Router = require('express');
const router = Router();
const deviceController = require('../controllers/deviceController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), deviceController.create);
router.get('/', deviceController.getDevices);
router.get('/:id', deviceController.getDevice);

module.exports = router;