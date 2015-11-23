var React = require('react');
var Tools = require('../../utils/tools');
var $ = require('jQuery')

require('../../static/css/components/carousel/superSlideCarousel2.4.css');

var SuperSlideCarousel = React.createClass({

	getInitialState: function() {
		return {
			componentUUID : "uuid_"+Tools.uuid() 
		};
	},

	componentDidMount: function() {
		Tools.loadScript(window.dd.vendorsPath+"superSlide/jquery.SuperSlide.js",function(){

			//大图切换
			window.$(".superSlide .game163").slide({ titCell:".smallImg li", mainCell:".bigImg", effect:"fold", autoPlay:true,delayTime:200,
				startFun:function(i,p){
					//控制小图自动翻页
					if(i==0){ window.$(".game163 .sPrev").click() } else if( i%4==0 ){ window.$(".game163 .sNext").click()}
				}
			});

			//小图左滚动切换
			window.$(".game163 .smallScroll").slide({ mainCell:"ul",delayTime:100,vis:4,scroll:4,effect:"left",autoPage:true,prevCell:".sPrev",nextCell:".sNext",pnLoop:false });

		})
	},

	render: function() {
		return (
			<div className={"superSlide "+this.state.componentUUID}>
				
				<div className="game163" style={{"margin":"0 auto"}}>
					<ul className="bigImg">
						<li>
							<a href="http://www.SuperSlide2.com" target="_blank"><img src="/static/image/1.jpg" /></a>
							<h4 className="pictureTips"><a href="http://www.SuperSlide2.com" target="_blank">美女玩家猎魔人 Cosplay</a></h4>
						</li>
						<li>
							<a href="http://www.SuperSlide2.com" target="_blank"><img src="/static/image/2.jpg" /></a>
							<h4 className="pictureTips"><a href="#">《第2次机战OG》魔装机神系机体情报</a></h4></li>
						<li>
							<a href="http://www.SuperSlide2.com" target="_blank"><img src="/static/image/3.jpg" /></a>
							<h4 className="pictureTips"><a href="#">Dreamhack冬季赛：Hero夺冠 香槟狂欢</a></h4>
						</li>
						<li>
							<a href="http://www.SuperSlide2.com" target="_blank"><img src="/static/image/4.jpg" /></a>
							<h4 className="pictureTips"><a href="#">妹子战丧尸！Bioware王牌画师插画赏</a></h4>
						</li>
						<li>
							<a href="http://www.SuperSlide2.com" target="_blank"><img src="/static/image/5.jpg" /></a>
							<h4 className="pictureTips"><a href="#">《刺客信条3》简体中文版已送审</a></h4>
						</li>
						<li>
							<a href="http://www.SuperSlide2.com" target="_blank"><img src="/static/image/1.jpg" /></a>
							<h4 className="pictureTips"><a href="#">《上古世纪》 中文版截图独家曝光</a></h4>
						</li>
						<li>
							<a href="http://www.SuperSlide2.com" target="_blank"><img src="/static/image/2.jpg" /></a>
							<h4 className="pictureTips"><a href="#">本周精选大湿级Cos欣赏 佐助亲吻小樱</a></h4>
						</li>
						<li>
							<a href="http://www.SuperSlide2.com" target="_blank"><img src="/static/image/3.jpg" /></a>
							<h4 className="pictureTips"><a href="#">《斗仙》11月29日封测 试玩截图首曝</a></h4>
						</li>
					</ul>

					<div className="smallScroll">
						<a className="sPrev" href="javascript:void(0)">←</a>
						<div className="smallImg">
								 <ul>
									<li><a><img src="/static/image/1.jpg" /></a></li>
									<li><a><img src="/static/image/2.jpg" /></a></li>
									<li><a><img src="/static/image/3.jpg" /></a></li>
									<li><a><img src="/static/image/4.jpg" /></a></li>
									<li><a><img src="/static/image/5.jpg" /></a></li>
									<li><a><img src="/static/image/1.jpg" /></a></li>
									<li><a><img src="/static/image/2.jpg" /></a></li>
									<li><a><img src="/static/image/3.jpg" /></a></li>
								</ul>
						</div>
						<a className="sNext" href="javascript:void(0)">→</a>
					</div>

					<div className="pageState pictureTips"></div>

				</div>

			</div>
		);
	}

});

module.exports = SuperSlideCarousel;