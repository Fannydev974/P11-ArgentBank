import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App.jsx';

//Redux
import store from './Redux/store.jsx';
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>//pour stocker le store
);

