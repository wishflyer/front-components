
var React = require("react");
var MainPage = require("./pages/main/page1.jsx");
var LoginPage = require("./pages/login/page1.jsx");
var RegisterPage = require("./pages/register/page1.jsx");


var antd = require("../vendors/antd/antd");


require("../vendors/antd/antd.css");


var ThisPage = React.createClass({

    render: function(){

        return(
        	<RegisterPage/>
        	
        );
    }
});
React.render(<ThisPage />, document.getElementById('content'));

/*
<Login bgImage="../../static/patch/background-size-polyfill-gh-pages/images/algeria.jpg"/>*/