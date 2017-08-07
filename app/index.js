let React = require('react');
let ReactDOM = require('react-dom');
let App = require('./components/app');

require('./assets')();


ReactDOM.render(<App />, document.getElementById('app'));
