import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

console.log("Below: Need to install react-tap-event-plugin to resolve onTouchTap error");
// FIXME: Need to resolve tap event plugin for Material UI
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
