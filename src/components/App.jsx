require("../static/vendors/antd/antd.css");

var React = require('react');
var ReactDOM = require('react-dom');

var WebsocketSample = require('./websocket/websocketSample');



var ThisPage = React.createClass({



    render: function(){

        var DemoCss = {
          "margin": "auto",
          "width":"80%"
        }

        return(
            <div style={DemoCss}>
                <WebsocketSample/>
            </div>
        );
    }
});
//ReactDOM.render(<ThisPage />, document.getElementById('react-content'));
//
module.exports = ThisPage;