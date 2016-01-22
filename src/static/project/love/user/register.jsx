var React = components.React;
var ReactDOM = components.ReactDOM;

var RegisterPage = components.pages.register.page1;

var Register = React.createClass({

	render: function() {
		return (
			<RegisterPage />
		);
	}

});

ReactDOM.render(<Register />, document.getElementById('react-content'));