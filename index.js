var page = require('page');

// Controllers
var PostsController = require('./lib/controllers/posts-controller');

var postsController = new PostsController();

page('/', postsController.postsPage.bind(postsController));
page.start();
