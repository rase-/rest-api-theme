var React = require('react');

var Comment = require('./comment');

var CommentsComponent = React.createClass({
  render: function() {
    var comments = this.props.comments;

    return (
      <div className="comments">
        <h2>Comments</h2>
        { comments.map(function(comment) {
          return <Comment key={ comment.id } comment={ comment } />
        }) }
      </div>
    );
  }
});

module.exports = CommentsComponent;
