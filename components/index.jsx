
var React = require("react");
var Page = require("./pages/main/page1.jsx");
var Login = require("./login/login1.jsx");

require("../vendors/antd/antd.css");

var MainPage = React.createClass({

    render: function(){

        return(
        	<div>
                <Login bgImage="../../static/patch/background-size-polyfill-gh-pages/images/algeria.jpg"/>
        	</div>
        	
        	);
    }
});
React.render(<MainPage />, document.getElementById('content'));