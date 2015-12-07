var React = require('react');
var $  =  require('jquery');

var antd = require("antd");
var Popover = antd.Popover;
var Button = antd.Button;

require('../../static/css/components/util/popover.css');

var dd_popover_width = "4400px";
var dd_popover_height="25px";

var dd_popover_content = <div id="dd_popover_content" style={{"width":dd_popover_width,"height":dd_popover_height}}>

		<div className="row">
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('1')">1</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('2')">2</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('3')">3</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('4')">4</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('5')">5</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('6')">6</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('7')">7</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('8')">8</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('9')">9</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('10')">10</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('11')">11</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('12')">12</a></div>
		  </div>
	</div>;

var PopoverDiv = React.createClass({

	componentDidMount: function() {
		$(".dd_popover > .ant-popover-inner").css({
			"max-width": dd_popover_width
		});
	},
	

	render: function() {
		return (
			<div className="dd_popover">
			  <Popover overlay={dd_popover_content} placement="bottom" title="Test" trigger="click" prefixCls="dd_popover ant-popover" overlayStyle={{"background-color":"red"}} >
			    <Button type="ghost"><span id="dd_content">点击</span></Button>
			  </Popover>
			   
			</div>
		);
	}

});

module.exports = PopoverDiv;