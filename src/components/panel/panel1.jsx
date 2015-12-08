var React = require('react');

var antd = require('antd');
var Icon = antd.Icon;

var Panel = React.createClass({

	render: function() {
		return (
			<div style={{"background-color":"#FFF9F9","width":"80%","padding":"20px 20px","font-size":"15px"}}>
					<Icon type="star-o" style={{"font-size":"20px","color":"red"}}/>
					<span style={{"font-size":"20px","color":"black","padding-left": "10px","font-family": "微软雅黑","font-weight": "200"}}>自我介绍</span>
					<br/><br/>
					<span style={{"padding":"30px 0 0 20px","word-break": "break-word"}}>
						我喜欢唱歌 跳舞 玩 学 。我在业余时间最大的消遣是唱歌 练琴 看电影 吃东西。我憧憬的生活是在一个洒满阳光的城市里生活。我希望我未来的另一半最好是干净 阳光 上进心强。相识捷径:请贴好邮票再发信给我 真心希望在这里能遇到我的那个TA!
					</span>
			</div>
		);
	}

});

module.exports = Panel;