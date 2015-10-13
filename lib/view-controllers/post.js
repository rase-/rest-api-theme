var React = require('react');

var PostComponent = React.createClass({
  render: function() {
    var post = this.props.post;

    console.log(post);
    return (
      <div className="post">
        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      </div>
    );
  }
});

module.exports = PostComponent;
