module.exports.blogadd = function(req, res){
	res.render('blog-add', {title: 'Blog Add'});
};

module.exports.bloglist = function(req, res){
	res.render('blog-list', {title: 'Blog List'});
};


module.exports.blogedit = function(req, res){
	res.render('blog-edit', {title: 'Blog Edit'});
};

module.exports.blogdelete = function(req, res){
	res.render('blog-delete', {title: 'Blog Delete'});
};
