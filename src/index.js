import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {unregister} from './registerServiceWorker';

//CSS
import './css/layout.css'
import './css/default.css'
import './css/media-queries.css'

// Node Modules CSS
import '../node_modules/font-awesome/css/font-awesome.min.css'

// Initialize
import './DOM/init'

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
