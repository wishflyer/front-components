
var React = require("react");

/*
var components = require("./release-entry.js");
var Tools = require("./utils/tools.js");
var Report = components.Report;

var Demo = components.Demo;*/

var antd = require("../vendors/antd/antd");



var Collapse = antd.Collapse;
var Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

var text = " A dog is a type of domesticated animal.";


var MainPage = React.createClass({

    render: function(){

        return(
        	<div>
        		<button type="button">This is a button</button>
        		<antd.Datepicker />
        		<Collapse defaultActiveKey={["1"]} onChange={callback}>
			    <Panel header={`This is panel header 1`} key="1">
			      <p>{text}</p>
			    </Panel>
			    <Panel header={`This is panel header 2`} key="2">
			      <p>{text}</p>
			    </Panel>
			    <Panel header={`This is panel header 3`} key="3">
			      <p>{text}</p>
			    </Panel>
			  </Collapse>
        	</div>
        	);
    }
});
React.render(<MainPage />, document.getElementById('content'));