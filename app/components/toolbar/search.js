let React = require('react');
let PropTypes = require('prop-types');
let api = require('../../utils/api');


function SearchUI(props) {
    return (
        <button onClick={props.onSearch.bind(null, 'cars')}>Search for Photos...</button>
    )
}

SearchUI.propTypes = {
    onSearch: PropTypes.func.isRequired
};

class SearchPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search(query) {
        api.fetchRequestedPhotos(query).then((photos) => {console.log(photos)});
    }

    render() {
        return (
            <SearchUI onSearch={this.search} />
        )
    }
}


module.exports = SearchPhoto;
