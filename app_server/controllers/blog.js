module.exports.blogadd = function(req, res){
	res.render('blog-add', {title: 'Blog Add'});
};

module.exports.bloglist = function(req, res){
	res.render('blog-list', {
		title: 'Blog List',
	blogEntries: [{
		blog_title: 'Post 1',
		blog_text: 'I dont wanna get this bread anymore',
		createdOn: '9/28/2020'
	},

	{	
		blog_title: 'Post 2',
		blog_text: 'Im tired',
		createdOn: '9/28/2020'
	},

	{
		blog_title: 'Post 3',
		blog_text: 'I am ready to pass away',
		createdOn: '9/28/2020'
	}

	]
	
	});
};

module.exports.blogedit = function(req, res){
	res.render('blog-edit', {title: 'Blog Edit'});
};

module.exports.blogdelete = function(req, res){
	res.render('blog-delete', {title: 'Blog Delete'});
};
