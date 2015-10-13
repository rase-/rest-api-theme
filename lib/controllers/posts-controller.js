var React = require('react');

var Posts = require('../models/posts');
var PostsComponent = require('../view-controllers/posts');

function PostsController() {
  this.posts = new Posts();
}

PostsController.prototype.postsPage = function(context) {
  this.posts.get(function(err, data) {
    if (err) {
      var errorElement = document.createElement('h1');
      errorElement.text = 'Error loading posts';
      document.getElementById('primary').appendChild(errorElement);
      return;
    }
    console.log(data);

    React.render(
      React.createElement(PostsComponent, {
        posts: data
      }),
      document.getElementById('primary')
    );
  });
};

module.exports = PostsController;
