import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

// Use createRoot from "react-dom/client" instead of ReactDOM.render
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Router>
    <App />
  </Router>
);
