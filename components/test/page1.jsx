var React = require('react');

var Page1 = React.createClass({

	render: function() {
		return (
			<div>
				<a href="#/test/page2" data-tohash>click me to go to the page2</a>
			</div>
		);
	}

});

module.exports = Page1;