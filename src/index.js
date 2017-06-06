import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// FIXME: Need to resolve tap event plugin for Material UI
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
