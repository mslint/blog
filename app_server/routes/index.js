var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/home');
var blogCtrl = require('../controllers/blog');

/* GET home page. */
router.get('/', homeCtrl.home);
router.get('/bloglist', blogCtrl.bloglist);

router.get('/blogadd', blogCtrl.blogadd);
router.post('/blogadd', blogCtrl.addBlog);

router.get('/blogedit/:blogid', blogCtrl.readOne);
router.post('/blogedit/:blogid', blogCtrl.editPost);

router.get('/blogdelete/:blogid', blogCtrl.blogdelete);
router.post('/blogdelete/:blogid', blogCtrl.deletePost);

module.exports = router;
