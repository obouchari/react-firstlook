let React = require('react');
let ReactDOM = require('react-dom');

require('./_styles.scss');

// let img = require('./assets/images/img-1.jpg');

class App extends React.Component {
    render() {
        return (
            <h1 >Hello world! this is {this.props.name}
            </h1>
        )
    }
}

ReactDOM.render(<App name="Omar Bouchari"/>, document.getElementById('myapp'));
