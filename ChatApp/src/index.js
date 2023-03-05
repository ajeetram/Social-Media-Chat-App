import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import { ChatAppProvider } from './Components/Context/ChatAppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter> 
  <ChatAppProvider>
  <App />
  </ChatAppProvider>
  </BrowserRouter> 
  </React.StrictMode>
);


