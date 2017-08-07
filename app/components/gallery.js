let React = require('react');
let PropTypes = require('prop-types');

class Gallery extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Some title</h1>
                <div className="grid-container">
                    {this.props.sources.map((src) => (
                        <div className="grid-item" key={src.toString()}>
                        <a href=""><img src={src} alt="" /></a></div>
                    ))}
                </div>
            </div>
        )
    }
}

Gallery.propTypes = {
    sources: PropTypes.array.isRequired
};

module.exports = Gallery;
