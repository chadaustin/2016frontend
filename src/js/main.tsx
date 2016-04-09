import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createSayingsStore from 'store';

import App from 'components/app';

export default function main() {
  const store = createSayingsStore();

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app-container'));
}
