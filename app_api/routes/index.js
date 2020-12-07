var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({ 
  secret: process.env.JWT_SECRET,
  algorithms: ['RS256'],
  userProperty: 'payload'
});
var blogCtrl = require('../controllers/blog');
var ctrlAuth = require('../controllers/authentication');
var ctrlChat = require('../controllers/chatBackend');

//list
router.get('/blogs', blogCtrl.blogList);
router.get('/blogs/:blogid', blogCtrl.blogReturnOne);
router.get('/chat', ctrlChat.getChats);

//add
router.post('/blogs', blogCtrl.blogAdd);

//edit
router.put('/blogs/:blogid', blogCtrl.blogEdit);

//delete
router.delete('/blogs/:blogid', blogCtrl.blogDelete);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
