var React = require('react');
var $ = window.jQuery;
var Tools = require("../../../utils/tools");

var FullBackgroundImage = require("../../util/fullBackgroundImage");
var antd = require("antd");
var Login = require("../../login/login1");

var LoginPage = React.createClass({

	render: function() {
		return (
			<FullBackgroundImage bgImage="../../../src/static/image/bj2.jpg">
				<br/><br/>

				<br/><br/>
	        	<div className="col-6 col-offset-18 ">
	        		<div className="col-offset-7 ">
	        			<img src="../../../src/static/image/logo.png"/>
	        		</div>
	        		<br/>
					<Login/>
				</div>
			</FullBackgroundImage>

		);
	}

});

module.exports = LoginPage;