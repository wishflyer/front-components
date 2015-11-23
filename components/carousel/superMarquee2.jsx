var React = require('react');
var Tools = require('../../utils/tools');
var $ = require('jQuery')

require('../../static/css/components/carousel/superMarquee2.css');

var SuperSlideCarouse2 = React.createClass({

	getDefaultProps: function() {
		return {
			width:0,
			height:150,
			num:3
		};
	},

	componentDidMount: function() {

		var self = this;

		Tools.loadScript(window.dd.vendorsPath+"plugins/superMarquee.js",function(){
			console.log(self.props.height)


			if(self.props.width == 0){//自适应
				//console.log($(".superMarquee").width()+"px")

				$("#marquee2").css({
					"width":$(".superMarquee").width()+"px",
					//"width":"150px",
					"height":self.props.height * self.props.num +"px",
				})

				$("#marquee2 ul li").css({
					"height":self.props.height +"px",
				})

				$(".panel-div").css({
					"height":self.props.height +"px",
					"width":$(".superMarquee").width()+"px",
					"overflow":"hidden"
				})
			
			}

			//一次纵向滚动一个
			window.$('#marquee2').kxbdSuperMarquee({
				distance:self.props.height,
				time:300,
				btnGo:{up:'#goU',down:'#goD'},
				direction:'down'
			});


		})
	},

	render: function() {
		return (
			<div className="superMarquee">
				<h2>一次纵向滚动一个</h2>
				<div id="marquee2">
					<ul>
						<li><div className="panel-div"><a target="_blank" href="http://www.mb5u.com/" title="jquery 表单美化 jquery tzCheckbox 复选框美化 自定义默认复选框">sdfdsfds<br/><br/><img alt="jquery 表单美化 jquery tzCheckbox 复选框美化 自定义默认复选框" src="/static/image/girls/girl0.jpg"></img></a></div></li>
						<li><div className="panel-div"><a target="_blank" href="http://www.mb5u.com/" title="jquery 表单美化 jquery tzCheckbox 复选框美化 自定义默认复选框"><img  alt="jquery 表单美化 jquery tzCheckbox 复选框美化 自定义默认复选框" src="/static/image/girls/girl1.jpg"></img></a></div></li>
						<li><div className="panel-div"><a target="_blank" href="http://www.mb5u.com/" title="jquery 图片放大镜 图片类似放大镜效果鼠标滑过小图异步加载中图、大图"><img width="150" height="150" alt="jquery 图片放大镜 图片类似放大镜效果鼠标滑过小图异步加载中图、大图" src="/static/image/girls/girl3.jpg"></img></a></div></li>
					</ul>
				</div>
				<div className="control">↓鼠标点击：<a href="javascript:void(0);" id="goU">上移一次</a> <a href="javascript:void(0);" id="goD">下移一次</a></div>

			</div>
		);
	}

});

module.exports = SuperSlideCarouse2;