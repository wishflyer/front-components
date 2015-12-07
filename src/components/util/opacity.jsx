var React = require('react');

require('../../static/css/components/util/opacity.css');

var Opacity = React.createClass({

	render: function() {
		return (
			<div className="dd_opacity">
				<div className="dd_opacity_content">
					{this.props.children}
				</div>
			</div>
		);
	}

});

module.exports = Opacity;