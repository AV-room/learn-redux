// updates comments saved for single post
function postComments(state = [], action) {
  debugger;
  switch(action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        { user: action.author, text: action.comment }
      ];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.commentIndex),
        ...state.slice(action.commentIndex + 1)
      ];
    default:
      return state;
  }

  return state;
}

// updates overall comments state
function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action) // overwrite this post with the new one
    };
  }

  return state;
}

export default comments;
