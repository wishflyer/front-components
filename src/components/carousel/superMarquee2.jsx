var React = require('react');
var Tools = require('../../utils/tools');
var $ = window.jQuery;
var Debug = require('../../utils/debug')

require('../../static/css/components/carousel/superMarquee2.css');


var _data = [{imgSrc:'src/static/image/girls/girl1.jpg',title:'测试1',description:'这是一个测试~'}
			,{imgSrc:'src/static/image/girls/girl2.jpg',title:'测试2',description:'这是一个测试~'}
			,{imgSrc:'src/static/image/girls/girl3.jpg',title:'测试3',description:'这是一个测试~'}
			,{imgSrc:'src/static/image/girls/girl4.jpg',title:'测试4',description:'这是一个测试~'}
			,{imgSrc:'src/static/image/girls/girl5.jpg',title:'测试5',description:'这是一个测试~'}
			,{imgSrc:'src/static/image/girls/girl6.jpg',title:'测试6',description:'这是一个测试~'}
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

	appendData:function(){

		console.log("append....")

		var _appendData = {imgSrc:'src/static/image/girls/girl3.jpg',title:'添加测试！！！！！！！！！！',description:'这是一个添加测试~添加添加添加添加添加添加'};

		var _data="<li><div class='panel-div'><div class='panel-content'><div class='image'><a target='_blank' href='#'><img src='"+_appendData.imgSrc+"'></img></a></div><div class='description'><div class='title'>"+_appendData.title+"'</div><div class='content'>"+_appendData.description+"</div></div></div></div></li>";
				
		$("#marquee2-ul").append(_data);

		var self = this;

		if(self.props.width == 0){//自适应
				//console.log($(".superMarquee").width()+"px")

				window.$("#marquee2 ul li").css({
					"height":self.props.height +"px",
				})
			
			}

			//一次纵向滚动一个
			window.$('#marquee2').kxbdSuperMarquee({
				distance:self.props.height,
				time:300,
				btnGo:{up:'#goU',down:'#goD'},
				direction:'down'
			});


	},

	componentDidMount: function() {

		var self = this;

		Tools.loadScript(window.dd.vendorsPath+"plugins/superMarquee.js",function(){

			console.log(self.props.height);

			var data = self.props.data;
			for (var elem in data) {
				console.log("elem:"+elem+"  data[elem]:"+data[elem].imgSrc);
				var _data="<li><div class='panel-div'><div class='panel-content'><div class='image'><a target='_blank' href='#'><img src='"+data[elem].imgSrc+"'></img></a></div><div class='description'><div class='title'>"+data[elem].title+"'</div><div class='content'>"+data[elem].description+"</div></div></div></div></li>";
				
				//console.log(_data);
				$("#marquee2-ul").append(_data);
			}

			




			if(self.props.width == 0){//自适应
				//console.log($(".superMarquee").width()+"px")

				window.$("#marquee2").css({
					"width":window.$(".superMarquee").width()+"px",
					//"width":"150px",
					"height":self.props.height * self.props.num +"px",
				})

				window.$("#marquee2 ul li").css({
					"height":self.props.height +"px",
				})

				window.$(".panel-div").css({
					"height":self.props.height +"px",
					"width":window.$(".superMarquee").width()+"px",
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
/*content.push(<li><div className="panel-div"><div className="panel-content"><a target="_blank" href="#"><img src={data[elem].imgSrc}></img></a>{data[elem].description}</div></div></li>);
		*/

		




		return (
			<div className="superMarquee" id="superMarquee">
				<h2>一次纵向滚动一个</h2>
				<div id="marquee2">
					<ul id="marquee2-ul">

					</ul>
				</div>
				<div className="control">↓鼠标点击：<a href="javascript:void(0);" id="goU">上移一次</a> <a href="javascript:void(0);" id="goD">下移一次</a><a href="javascript:void(0);" onClick={this.appendData} id="appendData">添加</a></div>

			</div>
		);
	}

});

module.exports = SuperMarquee2;

/*
var content = [];
		var data = this.props.data;
		for (var elem in data) {
			console.log("elem:"+elem+"  data[elem]:"+data[elem].imgSrc);
			content.push(<li><div className="panel-div"><div className="panel-content"><a target="_blank" href="#"><img src={data[elem].imgSrc}></img></a><div className="title">{data[elem].title}</div><div className="description">{data[elem].description}</div></div></div></li>);
		}

<ul>
						{
							content.map(function(elem,index) {
								return content[index];
							})
						}
					</ul>
*/








/*






var React = require('react');
var Tools = require('../../utils/tools');
var $ = window.jQuery

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