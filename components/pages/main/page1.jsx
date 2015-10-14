
var React = require("react");

var Header = require("../../header/header1");
var Carousel = require("../../carousel/carousel1");

var MainPage = React.createClass({

    render: function(){

    	var images = [{src:"../../static/image/bigbar4.jpg",url:"http://www.baidu.com"}
    				 ,{src:"../../static/image/bigbar2.jpg",url:"http://www.google.com"}
    				 ,{src:"../../static/image/bigbar3.jpg",url:"http://www.baidu.com"}
    				 ,{src:"../../static/image/bigbar1.jpg",url:"http://www.google.com"}]

        return(
        	<div >
        		
        		<Header/>
        		<Carousel images={images}/>
        		
        	</div>
        );
    }
});

module.exports = MainPage;
