import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Redux
import store from './Redux/store';
import { Provider } from 'react-redux'


//import mongoose from 'mongoose';
//mongoose.connect()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>//pour stocker le store
);
