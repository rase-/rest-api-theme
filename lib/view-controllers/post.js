var React = require('react');

var Comments = require('./comments');

var PostComponent = React.createClass({
  render: function() {
    var post = this.props.post;

    return (
      <div className="post">
        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        <Comments comments={ this.props.comments } />
      </div>
    );
  }
});

module.exports = PostComponent;
