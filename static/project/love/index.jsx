
var React = components.React;
var ReactDOM = components.ReactDOM;

window.ddReact = React;
window.ddcomponents = components;

var Page = components.pages.main.page1;

var MainPage = React.createClass({

    render: function(){

        return(
        <div>
        	<a href="/main">gotoMain</a>
            <Page/>
        </div>);
    }
});

ReactDOM.render(<MainPage />, document.getElementById('content'));

