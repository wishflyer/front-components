var React = require('react');

var Page1 = React.createClass({

	render: function() {
		return (
			<div>
				<a href="#/test/page1" data-tohash>click me to go to the page1</a>
			</div>
		);
	}

});

module.exports = Page1;