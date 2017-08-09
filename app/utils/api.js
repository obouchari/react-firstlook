let axios = require('axios');
let sources = require('./sources');

module.exports = {
    fetchRequestedPhotos: function(query) {
        let encodedURI = window.encodeURI(sources[0].parseURL(query, 10));
        console.log(encodedURI);
        return axios.get(encodedURI)
                    .then((response) => response.data);
    }
};
