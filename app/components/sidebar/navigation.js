let React = require('react');
let PropTypes = require('prop-types');
let _ = require('lodash');

let api = require('../../utils/api');

function NavUI(props) {
    return (
        <div className="nav">
            <ul>
                {_.map(props.collections, (entry) => (
                    <li key={entry.text}
                        onClick={props.onSelect.bind(null, entry.text)}
                        className={entry.text === props.selected ? 'selected' : null}>
                        {entry.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

NavUI.propTypes = {
    selected: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    collections: PropTypes.array.isRequired
};

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEntry: 'All',
            photos: null
        };

        this.updateSelected = this.updateSelected.bind(this);
    }

    componentDidMount() {
        this.updateSelected(this.state.selectedEntry);
    }

    updateSelected(entry) {
        this.setState(() => ({selectedEntry: entry, photos: null}));
        api.fetchRequestedPhotos(entry).then((photos) => {console.log(photos)});
    }

    collections() {
        let list = [
            {
                text: "All"
            },
            {
                text: "Favorites"
            },
            {
                text: "Collections (20)"
            }
        ];

        // Retrieve this from a DB
        let collectionsMenu = [
            {
                text: "Smart photos"
            },
            {
                text: "Tech pictures"
            },
            {
                text: "Inspirations"
            }];

        return _.concat(list, collectionsMenu);
    }

    render() {
        return (
            <NavUI onSelect={this.updateSelected}
                   selected={this.state.selectedEntry}
                   collections={this.collections()}
            />
        )
    }
}

module.exports = Navigation;
