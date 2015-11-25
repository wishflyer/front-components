var React=components.React;
var ReactDOM = components.ReactDOM;

var Base = React.createClass({
	displayName: 'Base',
    componentDidMount: function(){
    	console.log("接管a点击事件")
	    Tools.handleA();
	},
	render: function(){

		return(<div>
	1231232<a href="/index" data-tohash>click to index page</a>
		</div>)
	}
});

ReactDOM.render(<Base />, document.getElementById("content"));

	/*	This is the Base page<br/>
			<a href="#/index" data-tohash>click to index page</a>*/