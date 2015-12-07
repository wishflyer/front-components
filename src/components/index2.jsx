
var React = require("react");
var ReactDOM = require('react-dom');

var Demo = require('./demo/demo');

require("../static/vendors/antd/antd.css");

var ThisPage = React.createClass({

    render: function(){

        var DemoCss = {
          "margin": "auto",
          "width":"80%"
        }

        return(
            <div style={DemoCss}>
                <Demo/>
            </div>
        );
    }
});
ReactDOM.render(<ThisPage />, document.getElementById('content'));
