
var React = require("react");
var Page = require("./pages/main/page1.jsx");
var LoginPage = require("./pages/login/page1.jsx");

var antd = require("../vendors/antd/antd");


require("../vendors/antd/antd.css");


var MainPage = React.createClass({

    render: function(){

        return(
        	<LoginPage/>
        	
        );
    }
});
React.render(<MainPage />, document.getElementById('content'));

/*
<Login bgImage="../../static/patch/background-size-polyfill-gh-pages/images/algeria.jpg"/>*/