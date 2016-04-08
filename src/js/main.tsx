import App from 'app';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

function addSaying(state = ["saying..."] as string[], action) {
  switch (action.type) {
    case 'ADD_SAYING':
      return state.concat([action.saying]);
    default:
      return state;
  }
}

export default function main() {
  const store = createStore(addSaying);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app-container'));
}
