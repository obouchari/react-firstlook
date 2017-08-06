let React = require('react');
let ReactDOM = require('react-dom');
let { array } = require('prop-types');

require('./_styles.scss');

class Images extends React.Component {
    render() {
        return (
            <ul>
                {this.props.sources.map(function(src) {
                    return <li key={src.toString()}><img src={src} /></li>;
                })}
            </ul>
        )
    }
}

Images.propTypes = {
    sources: array.isRequired
}

class App extends React.Component {
    render() {

        let images = [];
        let i = 0;
        while (i < 34) {
            images.push(require('./assets/images/img-' + ++i + '.jpg'));
        }

        return (
            <div>
                <h1 >Hello world! this is</h1>
                <Images sources={images} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('myapp'));