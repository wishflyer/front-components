var React = require('react');


var antd = require("antd");
var Button = antd.Button;

var PictureWall = React.createClass({


	getDefaultProps: function() {
		return {
			images:[{src:"../../../static/image/girls/girl0.jpg",url:"http://www.baidu.com",name:"程思思",age:22,height:"160cm",description:"愿得一人心，白首不分离"}
                   ,{src:"../../../static/image/girls/girl1.jpg",url:"http://www.google.com",name:"程思思",age:22,height:"160cm",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
                   ,{src:"../../../static/image/girls/girl2.jpg",url:"http://www.google.com",name:"程思思",age:22,height:"160cm",description:"愿得一人心，白首不分离"}
                   ,{src:"../../../static/image/girls/girl3.jpg",url:"http://www.google.com",name:"程思思",age:22,height:"160cm",description:"愿得一人心，白首不分离"}
                   ,{src:"../../../static/image/girls/girl4.jpg",url:"http://www.google.com",name:"程思思",age:22,height:"160cm",description:"愿得一人心，白首不分离"}
                   ,{src:"../../../static/image/girls/girl5.jpg",url:"http://www.google.com",name:"程思思",age:22,height:"160cm",description:"愿得一人心，白首不分离"}
                   ,{src:"../../../static/image/boys/boy5.jpg",url:"http://www.google.com",name:"程思思",age:22,height:"160cm",description:"愿得一人心，白首不分离"}
                   ,{src:"../../../static/image/girls/girl6.jpg",url:"http://www.google.com",name:"程思思",age:22,height:"160cm",description:"愿得一人心，白首不分离"}
                   ,{src:"../../../static/image/girls/girl7.jpg",url:"http://www.google.com",name:"程思思",age:22,height:"160cm",description:"愿得一人心，白首不分离"}
                   ,{src:"../../../static/image/boys/boy6.jpg",url:"http://www.google.com",name:"程思思",age:22,height:"160cm",description:"愿得一人心，白首不分离"}
                   ,{src:"../../../static/image/girls/girl8.jpg",url:"http://www.google.com",name:"程思思",age:22,height:"160cm",description:"愿得一人心，白首不分离"}
                   ,{src:"../../../static/image/girls/girl9.jpg",url:"http://www.google.com",name:"程思思",age:22,height:"160cm",description:"愿得一人心，白首不分离"}]
		};
	},

	render: function() {

		var pictureCss = {
			"height": "200px",
    		"width": "180px",
    		"padding": "10px 10px"
		}

		var picContentCss = {

			"height": "200px",
    		"padding": "10px 10px 10px 20px"
		}

 		var nameCss = {
		    "font-size": "1.8em"	
 		}

 		var nameContentCss = {
 			"padding":"3px",
		    "font-size": "1.3em"	
 		}

 		var descriptionCss = {
 			"padding":"3px",
		    "font-size": "1.2em",
		    "color":"rgba(128, 128, 128, 0.41)"	
 		}

 		var buttonCss = {
 			"padding-bottom": "10px",
		    "position": "absolute",
		    "bottom": "0px"
	
 		}


 		var pushCss = {
 			"padding": "10px 10px",
	
		    "font-size": "1.6em"
 		}


 		var moreCss = {
 			"padding": "10px 10px",
	
		    "font-size": "1.4em"
 		}


		return (
			<div style={{"width":"1024px","border":"0px red solid"}}>
				<div className="row">
					<div className="col-3" style={pushCss} >今日推荐</div>
					<div className="col-2 col-offset-19" style = {moreCss}>更多>></div>
				</div>
				<div className="row">
					<hr/>
				</div>
				<div className="row" >
				{
					this.props.images.map(function(img){
						return (
							<div className="col-8">
								<div className="col-12">
									<img src={img.src} style={pictureCss}/> 
								</div>
								<div className="col-12" style={picContentCss}>
									<div style={nameCss}>{img.name}</div>
									<div style={nameContentCss}>{img.age}岁 {img.height}</div>
									<div style={descriptionCss}>{img.description}</div>
									<div style={buttonCss}><Button type="ghost" >查看资料</Button></div>
								</div>
							</div>
						)
					})
				}
				</div>
			</div>
		);
	}

});

module.exports = PictureWall;