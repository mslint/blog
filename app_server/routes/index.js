var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/home');
var blogCtrl = require('../controllers/blog');

/* GET home page. */
router.get('/', homeCtrl.home);

router.get('/bloglist', blogCtrl.blogList);

router.get('/blogadd', blogCtrl.blogAdd);
router.post('/blogadd', blogCtrl.addBlog);

router.get('/blogedit/:blogid', blogCtrl.blogEdit);
router.post('/blogedit/:blogid', blogCtrl.editPost);

router.get('/blogdelete/:blogid', blogCtrl.blogDelete);
router.post('/blogdelete/:blogid', blogCtrl.deletePost);

module.exports = router;
