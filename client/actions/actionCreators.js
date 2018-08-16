// DESCRIBE THE POSSIBLE ACTIONS IN OUR APP
// ACTIONS ARE JUST OBJECTS WITH A TYPE (NAME) AND SMALL PAYLOAD

// increment likes
export function increment(_index) {
  return {
    type: 'INCREMENT_LIKES',
    index: _index
  }
}

// add comment
export function addComment(_postId, _author, _comment) {
  console.log('ADD COMMENT');

  return {
    type: 'ADD_COMMENT',
    postId: _postId,
    author: _author,
    comment: _comment
  }
}

// remove comment
export function removeComment(_postId, _commentIndex) {
  console.log('REMOVE COMMENT', _postId, _commentIndex);
  return {
    type: 'REMOVE_COMMENT',
    postId: _postId,
    commentIndex: _commentIndex
  }
}

// routing is also an action (registered as LOCATION_CHANGE)