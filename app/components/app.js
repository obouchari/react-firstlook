let React = require('react');
let Gallery = require('./gallery');
let Sidebar = require('./sidebar');
let Toolbar = require('./toolbar');

function App() {
    let images = [];
    let i = 0;
    while (i < 34) {
        images.push(require('../assets/images/img-' + ++i + '.jpg'));
    }

    return (
        <div className="window">
            <Sidebar />
            <div className="main">
                <Toolbar />
                <div className="content">
                    <Gallery sources={images} />
                </div>
            </div>
        </div>
    )
}

module.exports = App;
