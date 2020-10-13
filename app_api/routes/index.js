var express = require('express');
var router = express.Router();
var blogCtrl  = require('../controllers/blog');

/* Setting up routes */
router.get('/blogs', blogCtrl.blogList);
router.get('/blogs/:blogid', blogCtrl.blogReturnOne);
router.post('/blogs', blogCtrl.blogAddOne);
router.put('/blogs/:blogid', blogCtrl.blogUpdate);
router.delete('/blogs/:blogid', blogCtrl.blogDelete);

module.exports = router;    