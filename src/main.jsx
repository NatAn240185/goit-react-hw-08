import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter> 
        <React.StrictMode>
          <App />
  </React.StrictMode>
    </BrowserRouter>
    </PersistGate>
  </Provider>
)