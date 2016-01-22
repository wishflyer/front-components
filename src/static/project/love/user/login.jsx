var React = components.React;
var ReactDOM = components.ReactDOM;

var LoginPage = components.pages.login.page1;

var Login = React.createClass({

	render: function() {
		return(<LoginPage/>);
	}

});

ReactDOM.render(<Login />, document.getElementById('react-content'));