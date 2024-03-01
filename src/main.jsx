import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextStates from './context/ContextStates.jsx'
import store from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextStates>
    <Provider store={store}>
    <App />
    </Provider>
    </ContextStates>
  </React.StrictMode>,
)
