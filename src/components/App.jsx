require("../static/vendors/antd/antd.css");

var React = require('react');
var ReactDOM = require('react-dom');

var WebsocketSample = require('./websocket/test');


var Panel = require('./panel/panel1');

var Star = require('./util/star');

var List = require('./util/list');

var ThisPage = React.createClass({



    render: function(){

        var DemoCss = {
          "margin": "auto",
          "width":"80%"
        }

        return(
            <div style={DemoCss}>
                <Star/>
                <Star curvalue="3"/>
                <Star type="basic"/>
                <Star type="basic" curvalue="3"/>
                <List/>

                <List justify={true}/>
            </div>

        )

    }
});
//ReactDOM.render(<ThisPage />, document.getElementById('react-content'));
//
module.exports = ThisPage;