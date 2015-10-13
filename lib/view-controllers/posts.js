var React = require('react');

var Post = require('./post');

var PostsComponent = React.createClass({
  render: function() {
    var posts = this.props.posts;

    return (
      <div className="posts">
        <h1>Posts</h1>
        { posts.map(function(post) {
          return <Post key={ post.id } post={ post } />
        }) }
      </div>
    );
  }
});

module.exports = PostsComponent;
