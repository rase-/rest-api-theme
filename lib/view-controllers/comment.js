var React = require('react');

var CommentComponent = React.createClass({
  render: function() {
    var comment = this.props.comment;

    return (
      <div className="comment">
        <a href={ comment.author_url }><h3> { comment.author_name }</h3></a>
        <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />
      </div>
    );
  }
});

module.exports = CommentComponent;
