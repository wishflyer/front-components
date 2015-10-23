
var React = require("react");

var Tools = require("../../../utils/tools");

var Header = require("../../header/header1");
var Carousel = require("../../carousel/carousel1");

var PictureWall = require("../../picture/pictureWall1");


var PictureWallImages = 
                   [{src:"../../../static/image/girls/girl0.jpg",url:"http://www.baidu.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl1.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
                   ,{src:"../../../static/image/girls/girl2.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl3.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl4.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl5.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/boys/boy5.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl6.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl7.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/boys/boy6.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl8.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl9.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}

                   ,{src:"../../../static/image/girls/girl10.jpg",url:"http://www.baidu.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl11.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
                   ,{src:"../../../static/image/boys/boy8.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl12.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl13.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl14.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/boys/boy4.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl15.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/boys/boy7.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl16.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl17.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/boys/boy9.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl18.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl19.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/boys/boy3.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}


                   ,{src:"../../../static/image/girls/girl23.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}

                   ,{src:"../../../static/image/boys/boy0.jpg",url:"http://www.baidu.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/boys/boy1.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}
                   ,{src:"../../../static/image/boys/boy2.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}

                   ,{src:"../../../static/image/boys/boy10.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl21.jpg",url:"http://www.google.com",description:"我是个美丽的女孩，期望遇到真命天子，是你吗"}

                   ,{src:"../../../static/image/girls/girl22.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl20.jpg",url:"http://www.baidu.com",description:"22岁 160cm 活泼奔放"}
                   ,{src:"../../../static/image/girls/girl24.jpg",url:"http://www.google.com",description:"22岁 160cm 活泼奔放"}];

var MainPage = React.createClass({

    render: function(){

    	var images = [{src:"../../static/image/bigbar4.jpg",url:"http://www.baidu.com"}
    				 ,{src:"../../static/image/bigbar2.jpg",url:"http://www.google.com"}
    				 ,{src:"../../static/image/bigbar3.jpg",url:"http://www.baidu.com"}]

        return(
        	<div>

                <Header/>
                <Carousel images={images}/>
                <div className="row-flex row-flex-center" style={{"background-color":"white"}}><img src='../../../static/image/ad/bar4.png' /></div>
        		    <PictureWall pictureNumInLine={12} closeInfo={true} images={PictureWallImages} imgIncrease={50}/>
                <div className="row-flex row-flex-center" style={{"background-color":"#ff5f89"}}><img src='../../../static/image/ad/bar1.jpg' /></div>
                <div className="row-flex row-flex-center" style={{"background-color":"white","margin":"20px auto"}}><p>Copyright@2015.Company name All rights reserved.</p></div>


        	</div>
        );
    }
});

module.exports = MainPage;


/**/