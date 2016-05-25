var React = require('react');
var Tools = require('../../utils/tools');
var $ = window.jQuery;

require('../../static/css/components/carousel/superSlideCarousel2.26.css');

var SuperSlideCarousel = React.createClass({

	componentDidMount: function() {
		Tools.loadScript(window.dd.vendorsPath+"superSlide/jquery.SuperSlide.js",function(){
			/* 把最后一个放到第一个前面，然后通过外层ul{margin-left:-980px !important; }来显示第一个 */
			window.$(".superSlide .slider .bd li").first().before( window.$("superSlide .slider .bd li").last() );
			/* 控制左右按钮显示 */
			window.$(".superSlide .slider").hover(function(){ window.$(this).find(".arrow").stop(true,true).fadeIn(300) },function(){ window.$(this).find(".arrow").fadeOut(300) });
			/* 调用SuperSlide */
			window.$(".superSlide .slider").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop",  autoPlay:true, vis:3, autoPage:true, trigger:"click"});
			
		})
	},

	render: function() {
		return (
			<div className="superSlide">
				
				<div className="slider">
					
					<div className="bd">
						<ul>
							
							<li><a target="_blank" href="http://www.superslide2.com"><img src="src/static/image/1.jpg" /></a></li>
							<li><a target="_blank" href="http://www.superslide2.com"><img src="src/static/image/2.jpg" /></a></li>
							<li><a target="_blank" href="http://www.superslide2.com"><img src="src/static/image/3.jpg" /></a></li>	
							<li><a target="_blank" href="http://www.superslide2.com"><img src="src/static/image/4.jpg" /></a></li>	

						</ul>
					</div>

					<div className="hd"><ul></ul></div>

					<div className="pnBtn prev">
						<span className="blackBg"></span>
						<a className="arrow" href="javascript:void(0)"></a>
					</div>
					<div className="pnBtn next">
						<span className="blackBg"></span>
						<a className="arrow" href="javascript:void(0)"></a>
					</div>

				</div>

			</div>
		);
	}

});

module.exports = SuperSlideCarousel;