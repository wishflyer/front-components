var React = require('react');
var Tools = require('../../utils/tools');
var $ = require('jQuery')

require('../../static/css/components/carousel/superSlideCarousel2.15.css');

var SuperSlideCarousel = React.createClass({

	componentDidMount: function() {
		Tools.loadScript(window.dd.vendorsPath+"superSlide/jquery.SuperSlide.js",function(){
			/*鼠标移过，左右按钮显示*/
			window.$(".superSlide .focusBox").hover(function(){ $(this).find(".prev,.next").stop(true,true).fadeTo("show",0.2) },function(){ $(this).find(".prev,.next").fadeOut() });
			/*SuperSlide图片切换*/
			window.$(".superSlide .focusBox").slide({ mainCell:".pic",effect:"fold", autoPlay:true, delayTime:600, trigger:"click"});

		})
	},

	render: function() {
		return (
			<div className="superSlide">
				<div className="focusBox" style={{"margin":"0 auto"}}>
					<ul className="pic">
							<li><a href="http://www.SuperSlide2.com" target="_blank"><img src="static/image/bigbar1.jpg"/></a></li>
							<li><a href="http://www.SuperSlide2.com" target="_blank"><img src="static/image/bigbar2.jpg"/></a></li>
							<li><a href="http://www.SuperSlide2.com" target="_blank"><img src="static/image/bigbar3.jpg"/></a></li>
							<li><a href="http://www.SuperSlide2.com" target="_blank"><img src="static/image/bigbar4.jpg"/></a></li>
					</ul>
					<a className="prev" href="javascript:void(0)"></a>
					<a className="next" href="javascript:void(0)"></a>
					<ul className="hd">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		);
	}

});

module.exports = SuperSlideCarousel;