import React from 'react';
import { render } from 'react-dom';
import App from 'src/components/App';
import { Provider } from 'react-redux';
import store from './store';

const ReactRootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(ReactRootComponent, document.getElementById('root'));
