var React = require('react');

var PostComponent = React.createClass({
  render: function() {
    var post = this.props.post;

    return (
      <div className="post">
        <a href={ '/' + post.id }><h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></a>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      </div>
    );
  }
});

module.exports = PostComponent;
