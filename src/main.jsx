import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './Component/Redux/store'
import { Provider } from 'react-redux'


//import mongoose from 'mongoose';
//mongoose.connect()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
