import React from 'react';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <Router>
    <App/>
  </Router>);

