import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
import avengerStore from './store/store';

ReactDOM.render(
  <Provider store={avengerStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
