
var React = components.React;
var ReactDOM = components.ReactDOM;

window.ddReact = React;
window.ddcomponents = components;

var Page = components.pages.main.page1;

var IndexPage = React.createClass({

    render: function(){

        return(
        <div>
        	This is the index.jsx file.
        	<a href="/main" data-tohash>goto main.jsx</a>
            
        </div>);
    }
});

ReactDOM.render(<IndexPage />, document.getElementById('react-content'));


/*<Page/>*/
