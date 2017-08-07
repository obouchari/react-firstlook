let React = require('react');
// let PropTypes = require('prop-types');

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEntry: 'All'
        };

        this.updateSelected = this.updateSelected.bind(this);
    }

    updateSelected(entry) {
        this.setState(() => ({selectedEntry: entry}));
    }

    collections() {
        let list = ['Smart photos', 'Tech pictures', 'Inspirations'];
        return list;
    }

    render() {
        return (
            <div className="sidebar">
                <div className="header">
                    Settings
                </div>

                <div className="nav">
                    <ul>
                        <li
                            key="All"
                            onClick={this.updateSelected.bind(null, 'All')}
                            className={'All' === this.state.selectedEntry ? 'selected' : null}
                        >All</li>
                        <li key="Favorites" onClick={this.updateSelected}>Favorites</li>
                        <li>Collections (20)</li>
                        {this.collections().map( entry => (
                            <li
                                key={entry}
                                onClick={this.updateSelected.bind(null, entry)}
                                className={entry === this.state.selectedEntry ? 'selected' : null}
                            >
                                {entry}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

// Sidebar.propTypes = {
//     prop: PropTypes.array.isRequired
// };

module.exports = Sidebar;
