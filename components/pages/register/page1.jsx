var React = require('react');

var Register = require('../../register/register1');
var YearMonthDay = require('../../util/YearMonthDay');
var Header = require('../../header/header1');
var FullBackgroundImage = require('../../util/fullBackgroundImage');

var Opacity = require('../../util/opacity');

var antd = require('../../../vendors/antd/antd');


var RegisterPage = React.createClass({

	render: function() {
		return (
			<FullBackgroundImage bgImage="../../../static/image/bg/bg2.jpg">
				<br/><br/><br/>
			
					<div className="col-8 col-offset-8">

						<Opacity>
					<div>
					<center><img src="../../../static/image/logo.png"/></center>
					<br/>
						<Register/>
						</div>
						</Opacity>
					</div>
				
			</FullBackgroundImage>
		);
	}

});

module.exports = RegisterPage;