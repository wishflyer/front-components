var React = components.React;
var ReactDOM = components.ReactDOM;
Tools = components.tools;

var RouterControl = React.createClass({

	componentDidMount: function() {
		console.log("》》》》》window.location.hash:"+window.location.hash);
	},

	render: function() {
		return (
			<div />
		);
	}

});

ReactDOM.render(<RouterControl />, document.getElementById('react-content'));