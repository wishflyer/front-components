
var React = components.React;
var ReactDOM = components.ReactDOM;

var antd = components.antd;
var Button = antd.Button;


var MainPage = React.createClass({

    render: function(){

        return(<div>
           	This is the main.jsx file.
           	<Button>Test</Button>
			<a href="/index" data-tohash>click to index.jsx</a>
			
        </div>);
    }
});

ReactDOM.render(<MainPage/>,document.getElementById("react-content"))

