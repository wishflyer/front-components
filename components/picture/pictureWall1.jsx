var React = require('react');
var Tools = require("../../utils/tools");

var $ = require("jQuery");

require("../../static/css/components/picture/pictureWall1.css");


//遗留问题，window resize时，会出现bug

var PictureWall = React.createClass({

	getInitialState: function() {
		return {
			pictureNumInLine:this.props.pictureNumInLine,
			pictureWidth:$(window).width()/this.props.pictureNumInLine+1+"px",
			windowWidth:0,
			windowHeight:0
		};
	},

	getDefaultProps: function() {
		return {
			imgIncrease : 100, /* the image increase in pixels (for zoom) */
			effectDuration : 400, /* the duration of the effect (zoom and caption) */
			pictureNumInLine : 8,
			fontSize:"18px",
			closeInfo:false,
			images:[{src:"../../../static/image/test.jpg",url:"http://www.baidu.com",description:"22岁 160cm 活泼奔放"}
			       ,{src:"../../vendors/pictureWall/images/1.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
			       ,{src:"../../vendors/pictureWall/images/2.jpg",url:"http://www.google.com",description:"The Caribbean Energy Conference 2010"}
			       ,{src:"../../vendors/pictureWall/images/3.png",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
			       ,{src:"../../vendors/pictureWall/images/4.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
			       ,{src:"../../vendors/pictureWall/images/5.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
			       ,{src:"../../vendors/pictureWall/images/6.png",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
			       ,{src:"../../vendors/pictureWall/images/7.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
			       ,{src:"../../vendors/pictureWall/images/11.png",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
			       ,{src:"../../vendors/pictureWall/images/9.png",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
			       ,{src:"../../vendors/pictureWall/images/10.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}]
		};
	},


	componentDidMount: function() {

		var self = this;

		console.log("window.screen.width:"+window.screen.width+",imgWidth:"+this.state.pictureWidth);
		console.log(this.state.windowHeight);

		//when mouse over the list item...
		$('.thumbnailWrapper').hover(function(){

			if(self.state.windowWidth == 0){
				self.state.windowWidth = $(window).width();
				self.state.windowHeight = $(window).height();
			}

			if(Math.abs($(window).width() - self.state.windowWidth) > 2 || Math.abs($(window).height() - self.state.windowHeight) > 2){
			
				//console.log("window.screen.width:"+$(window).width()+",imgWidth:"+self.state.windowWidth);
				//console.log("window.screen.height:"+$(window).height()+",imgHeight:"+self.state.windowHeight);

				self.state.windowWidth = $(window).width();
				self.state.windowHeight = $(window).height();

				self.state.pictureWidth = $(window).width()/self.props.pictureNumInLine+1+"px",

				self.forceUpdate();
			}

			//make the list items same size as the images
			$('.thumbnailWrapper').css({ 
				'width' : self.state.pictureWidth, 
				'height' : self.state.pictureWidth,
				'overflow' : "hidden"
			});


			$(this).find('img').stop().animate({

				/* increase the image width for the zoom effect*/
				width: parseInt(self.state.pictureWidth) + self.props.imgIncrease,
				/* we need to change the left and top position in order to 
				have the zoom effect, so we are moving them to a negative
				position of the half of the imgIncrease */
				left: self.props.imgIncrease/2*(-1),
				top: self.props.imgIncrease/2*(-1)
				
			},{ 
				
				"duration": self.props.effectDuration,
				"queue": false
				
			});
			
			//show the caption using slideDown event
			$(this).find('.caption:not(:animated)').slideDown(self.props.effectDuration);
			
		//when mouse leave...
		}, function(){
				

	
				//find the image and animate it...
				$(this).find('img').stop().animate({
					
					/* get it back to original size (zoom out) */
					width: self.state.pictureWidth,
					/* get left and top positions back to normal */
					left: 0,
					top: 0
					
				}, self.props.effectDuration);
				
				//hide the caption using slideUp event
				$(this).find('.caption').slideUp(self.props.effectDuration);
				
			})

	},

	render: function() {


		var pictureWall1Css = "col-"+Math.floor(24/this.props.pictureNumInLine)+" pictureWall1";
		var self = this;
		return (
			<div className="row" >
				{
					this.props.images.map(function(img){

						if(self.props.closeInfo){

							return (
								
								<div className={pictureWall1Css}>
									<div className='thumbnailWrapper' style={{width:self.state.pictureWidth,height:self.state.pictureWidth,overflow:"hidden","border":"1px solid white"}}>
										<a href={img.url}><img src={img.src}  style={{width:"100%","position":"relative"}} /></a>
									</div>
								</div>

							)

						}else{

							return (
								
								<div className={pictureWall1Css}>
									<div className='thumbnailWrapper' style={{width:self.state.pictureWidth,height:self.state.pictureWidth,overflow:"hidden","border":"1px solid white"}}>
										<a href={img.url}><img src={img.src}  style={{width:"100%","position":"relative"}} /></a>
											<div className='caption'>
									        	<p className='captionInside' style={{"font-size":self.props.fontSize,"padding":"10px 8px"}}>{img.description}</p>
									        </div>
									</div>
								</div>

							)

						}


						
						
					})
				}

			</div>

		);
	}

});

module.exports = PictureWall;

