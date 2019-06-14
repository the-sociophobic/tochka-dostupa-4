import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';

import Loader from 'components/Loader'

hydrate(
  <BrowserRouter>
    <div>
      <Loader disappear/>
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
