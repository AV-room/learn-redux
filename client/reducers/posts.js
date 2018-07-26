// a reducer takes in:
// (1) the action (what happened)
// (2) a COPY of the current state
// and updates the state AS REQUIRED.

// A REDUCER MUST BE A PURE FUNCTION i.e. results should be predictable

// state has a default param
function posts(state = [], action) {
  // we only want to respond to the actions we care about
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('incrementing likes!!!');

      // return the updated state
      const newState = [...state];
      newState[action.index].likes++;
      return newState;

    default:
      return state;
  }
}

export default posts;
