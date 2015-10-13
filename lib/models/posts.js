function Posts() {
  this.data = [];
}

Posts.prototype.get = function(cb) {
  // TODO: make request

  cb(this.data);
};

module.exports = Posts;
