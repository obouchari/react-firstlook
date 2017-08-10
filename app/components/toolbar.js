let React = require('react');
// let PropTypes = require('prop-types');
let SearchPhoto = require('./toolbar/search');


class Toolbar extends React.Component {
    render() {
        return (
            <div className="header">
                <SearchPhoto />
            </div>
        )
    }
}

// Toolbar.propTypes = {
//     prop: PropTypes.array.isRequired
// };

module.exports = Toolbar;
