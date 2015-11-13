
var React = require("react");
var MainPage = require("./pages/main/page1.jsx");
var LoginPage = require("./pages/login/page1.jsx");
var RegisterPage = require("./pages/register/page1.jsx");

require('./config.js');

var Carousal1 = require("./carousel/carousel1");
var Carousal2 = require("./carousel/carousel2");

var SearchBar = require("./searchBar/searchBar1");

var antd = require("../vendors/antd/antd");

var PictureWall = require('./picture/pictureWall2');

var Demo = require('./demo/demo');


var SuperMarquee2 = require("./carousel/superMarquee2");
var SuperSlideCarousel215 = require("./carousel/superSlideCarousel2.15");
var SuperSlideCarousel219 = require("./carousel/superSlideCarousel2.19");
var SuperSlideCarousel226 = require("./carousel/superSlideCarousel2.26");
var SuperSlideCarousel204 = require("./carousel/superSlideCarousel2.4");

require("../vendors/antd/antd.css");

var PictureWallImages = 
                   [{src:"../../../static/image/girls/girl0.jpg",url:"http://www.baidu.com",name:"程思思",age:22,height:"160cm",description:"愿得一人心，白首不分离"}
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
                   ,{src:"../../../static/image/girls/girl9.jpg",url:"http://www.google.com",name:"程思思",age:22,height:"160cm",description:"愿得一人心，白首不分离"}];


                

               

var ThisPage = React.createClass({

    render: function(){

        var DemoCss = {
          "margin": "auto",
          "width":"80%"
        }

        return(
        	<div style={DemoCss}>

            <Demo/>

        	</div>
        );
    }
});
React.render(<ThisPage />, document.getElementById('content'));

/*
<Login bgImage="../../static/patch/background-size-polyfill-gh-pages/images/algeria.jpg"/>*/