var React=components.React;
var ReactDOM = components.ReactDOM;

var Tools = components.tools;

var Base = React.createClass({
	displayName: 'Base',
    componentDidMount: function(){
	    Tools.handleA();
	},
	render: function(){

		return(<div>
			123
		</div>)
	}
});

ReactDOM.render(<Base />, document.getElementById("base"));

	/*	This is the Base page<br/>
			<a href="#/index" data-tohash>click to index page</a>*/