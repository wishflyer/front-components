
var React = components.React;
var ReactDOM = components.ReactDOM;


var MainPage = React.createClass({

    render: function(){

        return(<div>
           	This is the main page
        </div>);
    }
});

ReactDOM.render(<MainPage/>,document.getElementById("content"))

