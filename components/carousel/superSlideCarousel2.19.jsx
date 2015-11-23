var React = require('react');
var Tools = require('../../utils/tools');
var $ = require('jQuery')

require('../../static/css/components/carousel/superSlideCarousel2.19.css');

var SuperSlideCarousel = React.createClass({

	componentDidMount: function() {
		Tools.loadScript(window.dd.vendorsPath+"superSlide/jquery.SuperSlide.js",function(){
			
			window.$(".superSlide .fullSlide").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click" });
	
		})
	},

	render: function() {
		return (
			<div className="superSlide">
				<div className="fullSlide">
		
					<div className="bd">
						<ul>
							<li style={{"background":"url(static/image/1.jpg) #194982 center 0 no-repeat"}}><a target="_blank" href="http://www.superslide2.com"></a></li>
							<li style={{"background":"url(static/image/2.jpg) #15181e center 0 no-repeat"}}><a target="_blank" href="http://www.superslide2.com"></a></li>
							<li style={{"background":"url(static/image/3.jpg) #0b0b0b center 0 no-repeat"}}><a target="_blank" href="http://www.superslide2.com"></a></li>
							<li style={{"background":"url(static/image/4.jpg) #000000 center 0 no-repeat"}}><a target="_blank" href="http://www.superslide2.com"></a></li>
							<li style={{"background":"url(static/image/5.jpg) #04304b center 0 no-repeat"}}><a target="_blank" href="http://www.superslide2.com"></a></li>
						</ul>
					</div>

					<div className="hd"><ul></ul></div>
				</div>
			</div>
		);
	}

});

module.exports = SuperSlideCarousel;