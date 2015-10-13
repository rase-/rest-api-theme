var React = require('react');

var Posts = require('../models/posts');
var PostsComponent = require('../view-controllers/posts');
var PostComponent = require('../view-controllers/post' );

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

    React.render(
      React.createElement(PostsComponent, {
        posts: data
      }),
      document.getElementById('primary')
    );
  });
};

PostsController.prototype.postPage = function(context) {
  var self = this;

  this.posts.get(context.params.postId, function(err, posts) {
    if (err) {
      var errorElement = document.createElement('h1');
      errorElement.text = 'Error loading post data';
      document.getElementById('primary').appendChild(errorElement);
      return;
    }

    self.posts.getComments(context.params.postId, function(err, comments) {
      if (err) {
        var errorElement = document.createElement('h1');
        errorElement.text = 'Error loading post comments';
        document.getElementById('secondary').appendChild(errorElement);
        return;
      }

      React.render(
        React.createElement(PostComponent, {
          post: posts,
          comments: comments
        }),
        document.getElementById('primary')
      );
    });
  });
};

module.exports = PostsController;
