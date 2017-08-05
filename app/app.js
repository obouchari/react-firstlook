let React = require('react');
let ReactDOM = require('react-dom');

require('./_styles.scss');

class App extends React.Component {
    render() {
        return (
            <h1>Hello world!!</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));