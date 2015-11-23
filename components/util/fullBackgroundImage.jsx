var React = require("react");
var Tools = require("../../utils/tools");

var FullBackgroundImage = React.createClass({

	getDefaultProps: function() {
		return {
			bgImage : "../../static/patch/background-size-polyfill-gh-pages/images/algerian1.jpg"
		};
	},

	componentDidMount: function() {

		var self = this;
		Tools.loadScript("../../vendors/plugins/jquery.ez-bg-resize.js",function(){

		  	window.$(".loginBlackgroundCover").ezBgResize({
            	img     : self.props.bgImage, // Relative path example.  You could also use an absolute url (http://...).
            	opacity : 1, // Opacity. 1 = 100%.  This is optional.
            	center  : true // Boolean (true or false). This is optional. Default is true.
        	});
		})

		
	},

	render: function() {
		return (
			<div className="loginBlackgroundCover" >
				{this.props.children}
			</div>

		);
	}

});

module.exports = FullBackgroundImage;