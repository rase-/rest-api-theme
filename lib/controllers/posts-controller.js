var React = require('react');
var request = require('superagent');

var Posts = require('../models/posts');
var PostsComponent = require('../view-controllers/posts');

function PostsController() {
  this.posts = new Posts();
}

PostsController.prototype.postsPage = function(context) {
  this.posts.get(function(data) {
    React.render(
      React.createElement(PostsComponent, {
        posts: data
      }),
      document.getElementById('primary')
    );
  });
};

module.exports = PostsController;
