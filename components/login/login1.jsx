var React = require('react');

var $ = require("jQuery");
var Tools = require("../../utils/tools");

require("../../vendors/plugins/jquery.ez-bg-resize.js");
var React = require("react");
var FullBackgroundImage = require("../util/fullBackgroundImage");

/**
 * 全部图片登录框
 */
var Login = React.createClass({



	render: function() {
		return (
			<FullBackgroundImage bgImage="../../static/patch/background-size-polyfill-gh-pages/images/algeria.jpg">
				<p>This is a test</p>
			</FullBackgroundImage>

		);
	}

});

module.exports = Login;