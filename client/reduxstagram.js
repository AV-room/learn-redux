import React from 'react';
import { render } from 'react-dom';

// replaced browserHistory with history exported from store.js
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { store, history } from './store';
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import css from './styles/style.styl';

const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ Main }>
        <IndexRoute component={ PhotoGrid }></IndexRoute>
        <Route path="/view/:postId" component={ Single }></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
