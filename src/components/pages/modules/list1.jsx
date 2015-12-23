var React = require('react');

var SuperMarquee2 = require('../../carousel/superMarquee2')

var _data = [{imgSrc:'src/static/image/girls/girl1.jpg',name:'测试1',description:'这是一个测试1~'}
			,{imgSrc:'src/static/image/girls/girl1.jpg',name:'测试2',description:'这是一个测试2~'}
			,{imgSrc:'src/static/image/girls/girl1.jpg',name:'测试3',description:'这是一个测试3~'}
			,{imgSrc:'src/static/image/girls/girl1.jpg',name:'测试4',description:'这是一个测试4~'}
			,{imgSrc:'src/static/image/girls/girl1.jpg',name:'测试5',description:'这是一个测试5~'}
			,{imgSrc:'src/static/image/girls/girl1.jpg',name:'测试6',description:'这是一个测试6~'}
			]

var _data2 = [{imgSrc:'src/static/image/girls/girl4.jpg',name:'测试1',description:'这是一个测试7~'}
			,{imgSrc:'src/static/image/girls/girl5.jpg',name:'测试2',description:'这是一个测试8~'}
			,{imgSrc:'src/static/image/girls/girl6.jpg',name:'测试3',description:'这是一个测试9~'}
			,{imgSrc:'src/static/image/girls/girl7.jpg',name:'测试4',description:'这是一个测试10~'}
			,{imgSrc:'src/static/image/girls/girl8.jpg',name:'测试5',description:'这是一个测试11~'}
			,{imgSrc:'src/static/image/girls/girl9.jpg',name:'测试6',description:'这是一个测试12~'}
			]

var List = React.createClass({

	getDefaultProps: function() {
		return {
			data:_data
		};
	},

	getInitialState: function() {
		return {
			data: this.props.data
		};
	},

	onClick: function(){
		alert('test');
		this.setState({
			data:_data2
		})
	},

	render: function() {

		var content = [];
		var data = this.props.data;
		for (var elem in data) {
			console.log("elem:"+elem+"  data[elem]:"+data[elem]);
		  	content.push(<a target="_blank" href="#"><img src={data[elem].imgSrc}></img></a>);
		}




		return (
			<div>
				<SuperMarquee2 data={content}/>
				<button onClick={this.onClick}>Test</button>

			</div>
		);
	}

});

module.exports = List;