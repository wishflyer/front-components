var React = require('react');
var $ = require("jQuery");
var Tools = require("../../../utils/tools");

var FullBackgroundImage = require("../../util/fullBackgroundImage");
var antd = require("../../../vendors/antd/antd");
var Login = require("../../login/login1");

var LoginPage = React.createClass({

	render: function() {
		return (
			<FullBackgroundImage bgImage="../../../static/image/bj2.jpg">
				<br/><br/>

				<br/><br/>
	        	<div className="col-6 col-offset-18 ">
	        		<div className="col-offset-7 ">
	        			<img src="../../../static/image/logo.png"/>
	        		</div>
	        		<br/>
					<Login/>
				</div>
			</FullBackgroundImage>

		);
	}

});

module.exports = LoginPage;