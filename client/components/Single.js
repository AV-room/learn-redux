import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  render() {
    const postId = this.props.params.postId;
    const i = this.props.posts.findIndex((post) => post.code === postId )
    const postComments = this.props.comments[postId] ? this.props.comments[postId] : [];

    return (
      <div className='single-photo'>
        <Photo key={ i } i={ i } post={ this.props.posts[i] } {...this.props} />
        <Comments
          postId={ postId }
          comments={ postComments }
          handleAddComment={ this.props.addComment }
          handleRemoveComment={ this.props.removeComment } />
      </div>
    )
  }
}



export default Single;