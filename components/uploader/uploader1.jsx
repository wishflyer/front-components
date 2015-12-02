var React = require('react');

var Tools = require("../../utils/tools");

var Uploader = React.createClass({

	componentDidMount: function() {

		Tools.loadCSS(window.dd.vendorsPath+"webuploader/dist/webuploader.css");
		Tools.loadCSS(window.dd.vendorsPath+"webuploader/dist/image-upload/style.css");
		Tools.loadScript(window.dd.vendorsPath+"webuploader/dist/webuploader.js",function(){
			Tools.loadScript(window.dd.vendorsPath+"webuploader/dist/image-upload/upload.js");
		});

	},

	render: function() {
		return (
			<div id="webuploader">
				<div id="wrapper">
			        <div id="container">
			            <div id="uploader">
			                <div className="queueList">
			                    <div id="dndArea" className="placeholder">
			                        <div id="filePicker"></div>
			                        <p style={{"margin-bottom": "10px"}}>或将照片拖到这里，单次最多可选300张</p>
			                    </div>
			                </div>
			                <div className="statusBar" style={{"display":"none"}}>
			                    <div className="progress">
			                        <span className="text">0%</span>
			                        <span className="percentage"></span>
			                    </div><div className="info"></div>
			                    <div className="btns">
			                        <div id="filePicker2"></div><div className="uploadBtn">开始上传</div>
			                    </div>
			                </div>
			            </div>
			        </div>
		    	</div>
		    </div>
		);
	}

});

module.exports = Uploader;