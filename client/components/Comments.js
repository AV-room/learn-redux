import React from 'react';

class Comments extends React.Component {
  renderComment(comment, i) {
    return (
      <div className='comment' key={ i }>
        <p>
          <strong>{ comment.user }</strong>
          { comment.text }
          <button className='remove-comment' onClick={ this.props.handleRemoveComment.bind(this, this.props.postId, i) }>&times;</button>
        </p>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();

    // add this data to our store
    const postId = this.props.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.handleAddComment(postId, author, comment);

    // now reset form fields
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className='comments'>
        { this.props.comments.map(this.renderComment.bind(this)) }
        <form ref='commentForm' className='comment-form' onSubmit={ this.handleSubmit.bind(this) }>
          <input type='text' ref='author' placeholder='author'/>
          <input type='text' ref='comment' placeholder='comment'/>
          <input type='submit' hidden/>
        </form>
      </div>
    );
  }
}

export default Comments;