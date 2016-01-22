
var React = components.React;
var ReactDOM = components.ReactDOM;

window.ddReact = React;
window.ddcomponents = components;

var Page = components.pages.main.page1;

var IndexPage = React.createClass({

    render: function(){

        return(<Page/>);
    }
});

ReactDOM.render(<Page />, document.getElementById('react-content'));


/*<Page/>*/
