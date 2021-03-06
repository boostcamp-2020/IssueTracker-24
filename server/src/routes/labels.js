const express = require('express');

const router = express.Router();
const labelController = require('../controllers/label');
const { isAuth } = require('../middlewares/auth');

router.get('/', isAuth, labelController.getAllLabels);
router.post('/', isAuth, labelController.createLabel);
router.patch('/:id', isAuth, labelController.patchLabel);
router.delete('/:id', isAuth, labelController.deleteLabel);

module.exports = router;
