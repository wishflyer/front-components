
var React = require("react");
var ReactDOM = require('react-dom');
require('./config.js');

var StackGridWall = require('./picture/stackGridWall');

require("../static/vendors/antd/antd.css");

var ThisPage = React.createClass({

    render: function(){

        var DemoCss = {
          "margin": "auto",
          "width":"80%"
        }

        return(
            <div style={DemoCss}>
                <StackGridWall/>
            </div>
        );
    }
});
ReactDOM.render(<ThisPage />, document.getElementById('content'));
