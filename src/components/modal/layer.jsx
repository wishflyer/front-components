var React = require('react');
var Tools = require('../../utils/tools');

var antd = require('antd');
var Button =  antd.Button;

var Layer = React.createClass({

	componentDidMount: function() {
		Tools.loadCSS(window.dd.vendorsPath+"layer/layer/skin/layer.css");
		Tools.loadScript(window.dd.vendorsPath+"layer/layer/layer.js",function(){
				
		});
	},


	alert:function(content){
		layer.alert(content)
	},

	open:function(type){
		console.log(type)
		//iframe层-父子操作
		layer.open({
		    type: type,
		    area: ['700px', '530px'],
		    fix: false, //不固定
		    maxmin: true,
		    content: 'http://www.baidu.com'
		});	
		/*
		layer.open({
		    type: 2,
		    title: false,
		    area: ['630px', '360px'],
		    shade: 0.8,
		    closeBtn: 0,
		    shadeClose: true,
		    content: 'http://player.youku.com/embed/XMjY3MzgzODg0'
		});*/
	},

	render: function() {
		return (
			<div>
				<div>Alert</div>
				<Button onClick={this.alert.bind(this,"This is a test")} style={{"border-radius":"0"}}>Alert 1</Button>

				<div>Open</div>
				<Button onClick={this.open.bind(this,2)}>Open Type 2</Button>

			</div>
		);
	}

});

module.exports = Layer;