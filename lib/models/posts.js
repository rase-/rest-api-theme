var request = require('superagent');

function Posts() {
  this.data = [];
}

Posts.prototype.get = function(cb) {
  // TODO: make request
  request
    .get('/wp-json/wp/v2/posts')
    .end(function(err, res) {
        if (err) return cb(res);

        cb(null, res.body);
    });
};

module.exports = Posts;
