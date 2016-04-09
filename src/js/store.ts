import { createStore, combineReducers } from 'redux';

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

export default function createSayingsStore() {
  return createStore(addSaying);
}
