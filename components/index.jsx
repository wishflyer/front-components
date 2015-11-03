
var React = require("react");
var MainPage = require("./pages/main/page1.jsx");
var LoginPage = require("./pages/login/page1.jsx");
var RegisterPage = require("./pages/register/page1.jsx");

require('./config.js');

var Carousal = require("./carousel/carousel2");

var SearchBar = require("./searchBar/searchBar1");
var AddressSelect = require('./util/addressSelect');

var antd = require("../vendors/antd/antd");


require("../vendors/antd/antd.css");


var ThisPage = React.createClass({

    render: function(){

        return(
        	<div >
        	<SearchBar/>
        	<AddressSelect/>
        	</div>
        );
    }
});
React.render(<ThisPage />, document.getElementById('content'));

/*
<Login bgImage="../../static/patch/background-size-polyfill-gh-pages/images/algeria.jpg"/>*/