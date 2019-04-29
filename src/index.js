import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import {StoreProvider} from './store';

ReactDOM.render(
   <StoreProvider>
      <App />
   </StoreProvider>, 
   document.getElementById('root')
);