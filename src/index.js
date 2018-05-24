import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import data from './mock-data.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
