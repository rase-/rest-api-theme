var request = require('superagent');

function Posts() {
  this.data = [];
}

Posts.prototype.get = function(postId, cb) {
  if ('function' === typeof postId) {
    cb = postId;
    postId = null;
  }

  var url = '/wp-json/wp/v2/posts';

  if (postId) {
    url += '/' + postId;
  }

  request
    .get(url)
    .end(function(err, res) {
        if (err) return cb(err);

        cb(null, res.body);
    });
};

Posts.prototype.getComments = function(postId, cb) {
  request
    .get('/wp-json/wp/v2/comments?post=' + postId)
    .end(function(err, res) {
      if (err) return cb(err);

      cb(null, res.body);
    });
};

module.exports = Posts;
