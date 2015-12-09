var React = require('react');

var Tools = require("../../utils/tools");

/**
 * Usage: $('#rating').rater('your_servlet', {type:'basic', maxvalue:5, curvalue:0});
 *  
 * @param url The address you want to post the result to. 
 * @param options The type and value attributes
 *
 * Valid options:
 * ---------------------------------------
 *       type:       'basic', 'inline' OR 'small'
 *       maxvalue:    the maximum value / number of stars
 *       curvalue:    the initial value / selected stars
 */ 
var Star = React.createClass({

	getInitialState: function() {
		return {
			id:Tools.uuid() 
		};
	},

	getDefaultProps: function() {
		return {
			maxvalue:5,
			type: 'small',//basic
			curvalue:0,
			style:{},
			change:0
		};
	},



	componentDidMount: function() {

		var self = this;

		Tools.loadCSS(window.dd.vendorsPath+"star/rater.css");
		Tools.loadScript(window.dd.vendorsPath+"star/jquery.rater.js",function(){
			$("#"+self.state.id).rater('ratingsdemo.php', {change:self.props.change, maxvalue:self.props.maxvalue, type:self.props.type, curvalue:self.props.curvalue});
		})
	},

	render: function() {
		console.log(this.state.id); 
		return (
			<div style={this.props.style}>
				<div id={this.state.id} ></div>
			</div>
		);
	}

});

module.exports = Star;

/*

$('#demo1').rater('ratingsdemo.php');
			$('#demo2').rater('ratingsdemo.php', {style: 'small'});

			$('#inline1').rater('ratingsdemo.php', {style: 'inline'});<br />
			$('#inline2').rater('ratingsdemo.php', {style: 'inline', curvalue:3});

			$('#demo5').rater('ratingsdemo.php', {style: 'basic', curvalue:2});
			$('#demo6').rater('ratingsdemo.php', {maxvalue:10, style: 'basic', curvalue:0});
			$('#demo7').rater('ratingsdemo.php', {maxvalue:20, style: 'small', curvalue:3});

<div>
				<h3>Basic</h3>
				<div id="demo1" className="demo">The one we all know and love<br />
			
				</div>
				<h3>Small</h3>
				<div id="demo2" className="demo">Via the options you can switch the style<br />
				</div>
				<h3>Inline</h3>
				<div id="demo3" className="demo">You can chain them, using inline style:<br />
					<span id="inline1"> </span> <b>and</b> <span id="inline2"> </span>
				</div>
				<h3>Basic, with initial value</h3>
				<div id="demo5" className="demo">You can set the initial value in the options too!<br />
				</div>
				<h3>Basic, but more then 5 stars</h3>
				<div id="demo6" className="demo">You can have as many stars you want. CSS is adjusted respectivly.<br />
				</div>
				<h3>Or Small.. doesnt matter</h3>
					<div id="demo7" className="demo">Its all dynamic.. :)<br />
				</div>
			</div>*/