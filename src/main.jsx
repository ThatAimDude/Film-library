import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.jsx';
import './index.css';
import store from './store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

if (root) {
  const rootElement = createRoot(root);
  rootElement.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root element with id 'root' not found");
}
