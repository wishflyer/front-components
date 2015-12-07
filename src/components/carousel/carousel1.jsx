
var React = require("react");

var antd = require("antd");

var Carousel = antd.Carousel;

var Carousel1 = React.createClass({

	getDefaultProps: function() {
		return {
			height:"100%",
			width:"100%",
			//数组对象[{img:"../../src/static/image/bigbar1.jpg",url:"http://www.baidu.com"}]
			images:[{src:"../../src/static/image/bigbar4.jpg",url:"http://www.baidu.com"},{src:"../../src/static/image/bigbar2.jpg",url:"http://www.google.com"}]
		};
	},

	render: function() {

		var self =  this;
		
		console.log(this.props.images);
		return (
			<div className="row">
				<Carousel dots="false" autoplay="true">
					{
						this.props.images.map(function(img){
							return <div key={img.src} style={{height:self.props.height,width:self.props.width}}><a href={img.url}><img src={img.src} style={{width:"100%"}}/></a>	</div>
						})
					}
				</Carousel>
			</div>
		);
	}

});

module.exports = Carousel1;



