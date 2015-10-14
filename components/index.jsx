
var React = require("react");

/*
var components = require("./release-entry.js");
var Tools = require("./utils/tools.js");
var Report = components.Report;

var Demo = components.Demo;*/

var Page = require("./pages/main/page1");


var MainPage = React.createClass({

    render: function(){

        return(
        	<Page/>
        	);
    }
});
React.render(<MainPage />, document.getElementById('content'));