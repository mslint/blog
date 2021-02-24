var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    blogTitle: String,
    blogText: String,
    email: String,
    userName: String,
    dateStamp: {
        type: Date,
        "default": Date.now
    },
});                

var commentSchema = new mongoose.Schema({
    commentID: String,
    commentText: String,
    commentName: String,
    commentDate: {
	    type: Date,
	    "default": Date.now
    },

});

mongoose.model('blogs', blogSchema);
mongoose.model('Comment', commentSchema);