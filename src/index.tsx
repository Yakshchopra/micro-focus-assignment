import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import reducer, { initialState } from './store/reducer';
import { StateProvider } from './store/StateProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// parent component for injecting data to HTML
// also responsible for handling the global states and acts as the provider for states from the store

root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </StateProvider>
);

reportWebVitals();
