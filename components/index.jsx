
var React = require("react");
var MainPage = require("./pages/main/page1.jsx");
var LoginPage = require("./pages/login/page1.jsx");
var RegisterPage = require("./pages/register/page1.jsx");

require('./config.js');

var Carousal = require("./carousel/carousel2");

var SearchBar = require("./searchBar/searchBar1");

var antd = require("../vendors/antd/antd");

var PictureWall = require('./picture/pictureWall2');

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

        return(
        	<div >
        	<SearchBar/>
        	    <PictureWall pictureNumInLine={6}  images={PictureWallImages} imgIncrease={50}/>
        	</div>
        );
    }
});
React.render(<ThisPage />, document.getElementById('content'));

/*
<Login bgImage="../../static/patch/background-size-polyfill-gh-pages/images/algeria.jpg"/>*/