import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './app';
import { Compose } from './app/providers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Compose components={[]}>
    <App/>
  </Compose>
);

