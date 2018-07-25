// a reducer takes in:
// (1) the action (what happened)
// (2) a COPY of the current state

function posts(state = [], action) {
  console.log('the post will change');
  console.log(state, action);
  return state;
}

export default posts;
