var React = require('react');
var Tools = require('../../utils/tools');
var $ = require('jquery')

require('../../static/css/components/carousel/superMarquee2.css');


var _data = [{imgSrc:'src/static/image/girls/girl1.jpg',name:'测试1',description:'这是一个测试~'}
			,{imgSrc:'src/static/image/girls/girl2.jpg',name:'测试2',description:'这是一个测试~'}
			,{imgSrc:'src/static/image/girls/girl3.jpg',name:'测试3',description:'这是一个测试~'}
			,{imgSrc:'src/static/image/girls/girl4.jpg',name:'测试4',description:'这是一个测试~'}
			,{imgSrc:'src/static/image/girls/girl5.jpg',name:'测试5',description:'这是一个测试~'}
			,{imgSrc:'src/static/image/girls/girl6.jpg',name:'测试6',description:'这是一个测试~'}
			]


var SuperMarquee2 = React.createClass({

	getDefaultProps: function() {
		return {
			width:0,
			height:100,
			num:3,
			data:_data
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

	componentWillReceiveProps: function(nextProps) {
		console.log(">>>>>>>>>>>")
		console.log(nextProps);
	},

	render: function() {


		var content = [];
		var data = this.props.data;
		for (var elem in data) {
			console.log("elem:"+elem+"  data[elem]:"+data[elem]);
		  	content.push(<li><div className="panel-div"><div className="panel-content">{data[elem]}</div></div></li>);
		}


		return (
			<div className="superMarquee">
				<h2>一次纵向滚动一个</h2>
				<div id="marquee2">
					<ul>
						{
							content.map(function(index, elem) {
								return content[elem];
							})
						}
					</ul>
				</div>
				<div className="control">↓鼠标点击：<a href="javascript:void(0);" id="goU">上移一次</a> <a href="javascript:void(0);" id="goD">下移一次</a></div>

			</div>
		);
	}

});

module.exports = SuperMarquee2;









/*






var React = require('react');
var Tools = require('../../utils/tools');
var $ = require('jquery')

require('../../static/css/components/carousel/superMarquee2.css');

var SuperMarquee2 = React.createClass({

	getDefaultProps: function() {
		return {
			width:0,
			height:100,
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
						<li>
							<div className="panel-div">
								<div className="panel-content">
									<div className="col-24">
										<div className="col-6">
											<img src="src/static/image/girls/girl1.jpg"></img>
										</div>
										<div className="col-18">
											<div className="col-24">
												这是一个测试
											</div>
											<div className="col-24">
												这是一个测试~~~~
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="panel-div">
								<div className="panel-content">
									<a target="_blank" href="#"><img src="src/static/image/girls/girl0.jpg"></img></a>
								</div>
							</div>
						</li>
						<li>
							<div className="panel-div">
								<div className="panel-content">
									<a target="_blank" href="#"><img src="src/static/image/girls/girl3.jpg"></img></a>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className="control">↓鼠标点击：<a href="javascript:void(0);" id="goU">上移一次</a> <a href="javascript:void(0);" id="goD">下移一次</a></div>

			</div>
		);
	}

});

module.exports = SuperMarquee2;*/