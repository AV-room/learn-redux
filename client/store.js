import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

// using es6 shorthand, could write this as defaultState = { posts, comments }
const defaultState = {
  posts: posts,
  comments: comments
}

// export so we can use these in main js file
export const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);