const express = require('express');
const issueController = require('../controllers/issue');
const { isAuth } = require('../middlewares/auth');

const router = express.Router();

router.get('/', isAuth, issueController.getAllIssues);
router.post('/', isAuth, issueController.createIssue);
router.get('/:id', isAuth, issueController.getIssue);
router.patch('/:id', isAuth, issueController.patchIssue);
router.post('/:id/comments', isAuth, issueController.createComment);
module.exports = router;
