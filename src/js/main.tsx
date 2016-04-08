import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from 'components/app';
import Saying from 'saying';

function addSaying(state = [] as Saying[], action) {
  switch (action.type) {
    case 'ADD_SAYING':
      return state.concat([{
        quote: action.quote,
        author: action.author,
      }]);
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
