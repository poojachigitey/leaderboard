import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';



const app = (
    <div>
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  </div>
);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
