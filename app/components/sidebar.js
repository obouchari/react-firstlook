let React = require('react');
let Navigation = require('./sidebar/navigation');

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="header">
                    Settings
                </div>

                <Navigation />
            </div>
        )
    }
}

module.exports = Sidebar;
