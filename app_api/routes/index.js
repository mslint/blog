var express = require('express');
var router = express.Router();
var blogCtrl = require('../controllers/blog');

//list
router.get('/blogs', blogCtrl.blogList);
router.get('/blogs/:blogid', blogCtrl.blogReturnOne);

//add
router.post('/blogs', blogCtrl.blogAdd);

//edit
router.put('/blogs/:blogid', blogCtrl.blogEdit);

//delete
router.delete('/blogs/:blogid', blogCtrl.blogDelete);

module.exports = router;
