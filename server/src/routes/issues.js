const express = require('express');
const issueController = require('../controllers/issue');
const { isAuth } = require('../middlewares/auth');

const router = express.Router();

// TODO: isAuth 미들웨어 추가
router.get('/', isAuth, issueController.getAllIssues);
router.post('/', isAuth, issueController.createAllIssues);
module.exports = router;
