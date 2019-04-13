import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {unregister} from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../public/css/default.css'
import '../public/css/layout.css'
import '../public/css/media-queries.css'
import '../public/css/magnific-popup.css'
import '../node_modules/flexslider/jquery.flexslider'
import '../node_modules/waypoints/lib/jquery.waypoints'
import '../node_modules/fittext/dist/jquery.fittext'
import '../node_modules/magnific-popup/dist/jquery.magnific-popup'

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
