var React = require('react');

require("../../static/css/components/ad/adBar1.css");

var AdBar = React.createClass({

	getDefaultProps: function() {
		return {
			bgColor : white,
			margin : "20px auto"
		};
	},

	render: function() {
		return (
			<div className="row-flex row-flex-center" />
				<div id="adBar1" style={{"background-color":this.props.bgColor,"margin":this.props.margin}}>>
					{this.props.children}
				</div>
			</div>
		);
	}

});

module.exports = AdBar;