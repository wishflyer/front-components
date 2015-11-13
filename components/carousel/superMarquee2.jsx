var React = require('react');
var Tools = require('../../utils/tools');
var $ = require('jQuery')

require('../../static/css/components/carousel/superMarquee2.css');

var SuperSlideCarouse2 = React.createClass({

	componentDidMount: function() {
		Tools.loadScriptAuto("superMarquee",window.dd.vendorsPath+"plugins/superMarquee.js",function(){

			//一次纵向滚动一个
			window.$('#marquee2').kxbdSuperMarquee({
				distance:150,
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
						<li><div width="150" height="150"><a target="_blank" href="http://www.mb5u.com/" title="jquery 表单美化 jquery tzCheckbox 复选框美化 自定义默认复选框">sdfdsfds</a></div></li>
						<li><a target="_blank" href="http://www.mb5u.com/" title="jquery 表单美化 jquery tzCheckbox 复选框美化 自定义默认复选框"><img width="150" height="150" alt="jquery 表单美化 jquery tzCheckbox 复选框美化 自定义默认复选框" src="/static/image/1.jpg"></img></a></li>
						<li><a target="_blank" href="http://www.mb5u.com/" title="jquery 图片放大镜 图片类似放大镜效果鼠标滑过小图异步加载中图、大图"><img width="150" height="150" alt="jquery 图片放大镜 图片类似放大镜效果鼠标滑过小图异步加载中图、大图" src="/static/image/2.jpg"></img></a></li>
						<li><a target="_blank" href="http://www.mb5u.com/" title="jquery 图片幻灯片 点击小图显示大图异步加载 支持按钮播放"><img width="150" height="150" alt="jquery 图片幻灯片 点击小图显示大图异步加载 支持按钮播放" src="/static/image/3.jpg"></img></a></li>
						<li><a target="_blank" href="http://www.mb5u.com/" title="jquery Xslider 插件焦点图片特效图片淡隐淡现、图片上下滚动、图片左右滚动、选项卡"><img width="150" height="150" alt="jquery Xslider 插件焦点图片特效图片淡隐淡现、图片上下滚动、图片左右滚动、选项卡" src="/static/image/4.jpg"></img></a></li>
					</ul>
				</div>
				<div className="control">↓鼠标点击：<a href="javascript:void(0);" id="goU">上移一次</a> <a href="javascript:void(0);" id="goD">下移一次</a></div>

			</div>
		);
	}

});

module.exports = SuperSlideCarouse2;