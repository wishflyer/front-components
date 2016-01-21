var React = require('react');
var Tools = require("../../utils/tools");

var $ = require('jquery') || window.$;

require("../../static/css/components/picture/pictureWall1.css");

/**
 * '''
 * ```

var PictureWallImages = 
                   [{src:"../../../src/static/image/girls/girl0.jpg",url:"http://www.baidu.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl1.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
                   ,{src:"../../../src/static/image/girls/girl2.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl3.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl4.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl5.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/boys/boy5.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl6.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl7.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/boys/boy6.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl8.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl9.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}

                   ,{src:"../../../src/static/image/girls/girl10.jpg",url:"http://www.baidu.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl11.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
                   ,{src:"../../../src/static/image/boys/boy8.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl12.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl13.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl14.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/boys/boy4.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl15.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/boys/boy7.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl16.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl17.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/boys/boy9.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl18.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl19.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/boys/boy3.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}


                   ,{src:"../../../src/static/image/girls/girl23.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}

                   ,{src:"../../../src/static/image/boys/boy0.jpg",url:"http://www.baidu.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/boys/boy1.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
                   ,{src:"../../../src/static/image/boys/boy2.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}

                   ,{src:"../../../src/static/image/boys/boy10.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl21.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}

                   ,{src:"../../../src/static/image/girls/girl22.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl20.jpg",url:"http://www.baidu.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../src/static/image/girls/girl24.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}];


                
    <PictureWall pictureNumInLine={12} closeInfo={true} images={PictureWallImages} imgIncrease={50}/>
               

 * ```
 */


//遗留问题，window resize时，会出现bug

var PictureWall = React.createClass({

	getInitialState: function() {
		return {
			uuid : Tools.uuid(),
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
			border:"1px solid white",
			fontSize:"18px",
			closeInfo:false,
			images:[{src:"../../src/static/image/girls/girl0.jpg",url:"http://www.baidu.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../src/static/image/girls/girl1.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
                   ,{src:"../../src/static/image/girls/girl2.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../src/static/image/girls/girl3.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../src/static/image/girls/girl4.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../src/static/image/girls/girl5.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../src/static/image/boys/boy5.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../src/static/image/girls/girl6.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../src/static/image/girls/girl7.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../src/static/image/boys/boy6.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../src/static/image/girls/girl8.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../src/static/image/girls/girl9.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../src/static/image/girls/girl10.jpg",url:"http://www.baidu.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../src/static/image/girls/girl11.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
                   ,{src:"../../src/static/image/boys/boy8.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}]
		};
	},


	componentDidMount: function() {

		var self = this;

		var componentUUID = ".uuid_"+this.state.uuid;
		var componentThumbnailWrapper = componentUUID + ' .thumbnailWrapper';

		console.log("window.screen.width:"+window.screen.width+",imgWidth:"+this.state.pictureWidth);
		console.log("pictureWall1.width:"+$(".pictureWall1").width());
		console.log("componentUUID:"+componentUUID+"  width:"+$(componentUUID).width())

		this.setState({
			pictureWidth:$(componentUUID).width()+"px",
		});


		//when mouse over the list item...
		$(componentThumbnailWrapper).hover(function(){

			if(self.state.windowWidth == 0){
				self.state.windowWidth = $(componentUUID).width();
				self.state.windowHeight = $(componentUUID).height();
			}

			if(Math.abs($(componentUUID).width() - self.state.windowWidth) > 2 || Math.abs($(componentUUID).height() - self.state.windowHeight) > 2){
			
				//console.log("window.screen.width:"+$(componentUUID).width()+",imgWidth:"+self.state.windowWidth);
				//console.log("window.screen.height:"+$(componentUUID).height()+",imgHeight:"+self.state.windowHeight);

				self.state.windowWidth = $(componentUUID).width();
				self.state.windowHeight = $(componentUUID).height();

				self.state.pictureWidth = $(componentUUID).width()/self.props.pictureNumInLine+1+"px",

				self.forceUpdate();
			}

			//make the list items same size as the images
			$(componentThumbnailWrapper).css({ 
				'width' : self.state.pictureWidth, 
				'height' : self.state.pictureWidth,
				'overflow' : "hidden"
			});

			if(self.props.imgIncrease > 0){

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

			}


			
			
			//show the caption using slideDown event
			$(this).find('.caption:not(:animated)').slideDown(self.props.effectDuration);
			
		//when mouse leave...
		}, function(){
				
			if(self.props.imgIncrease > 0){
	
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
				
			}

		})

	},

	render: function() {


		var pictureWall1Css = "col-"+Math.floor(24/this.props.pictureNumInLine)+" pictureWall1"+ " uuid_"+this.state.uuid;
		var self = this;
		return (
			<div className="row" >
				{
					this.props.images.map(function(img){

						if(self.props.closeInfo){

							return (
								
								<div className={pictureWall1Css}>
									<div className='thumbnailWrapper' style={{width:self.state.pictureWidth,height:self.state.pictureWidth,overflow:"hidden",border:self.props.border}}>
										<a href={img.url}><img src={img.src}  style={{width:"100%","position":"relative"}} /></a>
									</div>
								</div>

							)

						}else{

							return (
								
								<div className={pictureWall1Css}>
									<div className='thumbnailWrapper' style={{width:self.state.pictureWidth,height:self.state.pictureWidth,overflow:"hidden",border:self.props.border}}>
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

