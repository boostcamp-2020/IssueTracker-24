const express = require('express');

const router = express.Router();
const labelController = require('../controllers/label');

router.get('/', labelController.getAllLabels);
module.exports = router;
