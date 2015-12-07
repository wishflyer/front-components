
import React from 'react';
require("../../static/css/components/ad/adBar1.css");

/**
 * 满屏的横幅广告
 */
var AdBar = React.createClass({

	getDefaultProps: function() {
		return {
			bgColor : "white",
			margin : "auto auto",
			align : "center",
		};
	},

	render: function() {
		return (
			<div className="row-flex row-flex-center" style={{"backgroundColor":this.props.bgColor,"fontSize":"0px"}} >
				<div id="adBar1" style={{"margin":this.props.margin,"textAlign":this.props.align}}>
					{this.props.children}
				</div>
			</div>
		);
	}

});

module.exports = AdBar; 