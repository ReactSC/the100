import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// import Stylesheet
import './index.css';

import Provider from './components/store/MainProvider';

const app = (
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render( app, document.getElementById('root'));
serviceWorker.register();
