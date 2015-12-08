var React = require('react');

var $ =  require('jquery');
var antd = require("antd");

var Tabs = antd.Tabs;
var TabPane = Tabs.TabPane;

var AdBar1 = require('../ad/adBar1');

var Carousel1 = require("../carousel/carousel1");
var Carousel2 = require("../carousel/carousel2");
var SuperMarquee2 = require("../carousel/superMarquee2");
var SuperSlideCarousel204 = require("../carousel/superSlideCarousel2.4");
var SuperSlideCarousel215 = require("../carousel/superSlideCarousel2.15");
var SuperSlideCarousel219 = require("../carousel/superSlideCarousel2.19");
var SuperSlideCarousel226 = require("../carousel/superSlideCarousel2.26");

var BasicColumn = require('../echarts/components/bar/BasicColumn');
var StackedColumn = require('../echarts/components/bar/StackedColumn')

var BasicArea = require('../echarts/components/line/BasicArea')
var BasicLine = require('../echarts/components/line/BasicLine')
var IrregularLine = require('../echarts/components/line/IrregularLine')
var StackedArea = require('../echarts/components/line/StackedArea')
var StackedLine = require('../echarts/components/line/StackedLine')



var Header1 = require("../header/header1");


var Login = require("../login/login1");

var PictureWall1 = require('../picture/pictureWall1');
var PictureWall2 = require('../picture/pictureWall2');


var Register1 = require('../register/register1');

var SearchBar1 = require('../searchBar/searchBar1');

var AddressSelect = require('../util/addressSelect');
var YearMonthDay = require('../util/YearMonthDay');

var Tabs1 = require("../tabs/tabs1");

var Editor1 = require("../editor/trumbowyg");

//ECharts
var data = [
      {
          name : "测试1",
         data : [90, 113, 140, 30, 70, 60]
      },
        {
            name : "测试2",
            data : [190, 213, 240, 230, 70, 260]
        },
    ];
  
var xAxisName = ['周一','周二','周三','周四','周五','周六','周日'];
  
    




var Demo = React.createClass({

	render: function() {
		return (
			<div>

			<Tabs defaultActiveKey="10">
			    <TabPane tab="ad" key="1">
					<AdBar1 bgColor="grey"><img src='../../src/static/image/1.jpg' /></AdBar1>
			    </TabPane>
			    <TabPane tab="carousel" key="2">
			    	<div className="col-8">
			    		<SuperMarquee2/>
			    	</div>
			    	<div className="col-24">
				    	<Carousel1/>
				    	<Carousel2/>
				    	<SuperSlideCarousel219/>
				    	<SuperSlideCarousel215/>
				    	<SuperSlideCarousel226/>
				    	<SuperSlideCarousel204/>
				    </div>
			    </TabPane>
			    <TabPane tab="ECharts" key="3">
			    	<div className="col-8">
		 				<BasicColumn data={data} xAxisName={xAxisName}/>
					</div>
			    	<div className="col-8">
						<StackedColumn data={data} xAxisName={xAxisName}/></div>
			    	<div className="col-8">
						<BasicArea data={data} xAxisName={xAxisName}/>
					</div>
			    	<div className="col-8">
						<BasicLine data={data} xAxisName={xAxisName}/>
					</div>
			    	<div className="col-8">
						<IrregularLine data={data} xAxisName={xAxisName}/>
					</div>
			    	<div className="col-8">
						<StackedArea data={data} xAxisName={xAxisName}/>
					</div>
			    	<div className="col-8">
						<StackedLine id="chart1" data={data} xAxisName={xAxisName}/>
					</div>

				</TabPane>

			    <TabPane tab="Header" key="4">
			    	<Header1/>
				</TabPane>

			    <TabPane tab="Login" key="5">
			    	<Login/>
				</TabPane>

			    <TabPane tab="PictureWall" key="6">
			   		
			    	<div className="row">
				    	<div className="col-16">
				    		<PictureWall1 pictureNumInLine={12} closeInfo={true} imgIncrease={30} border="0px solid white"/>
				    	</div>
				    	<div className="col-8">
			    		<PictureWall1 pictureNumInLine={8} closeInfo={true} imgIncrease={0} border="1px solid white"/>
			    		</div>
				    </div>
				    <div className="row">
				    	<PictureWall2/>
				    </div>
			    	
				</TabPane>

			    <TabPane tab="SearchBar" key="7">
			    	<SearchBar1/>
				</TabPane>


			    <TabPane tab="Register" key="8">
			    	<Register1/>
				</TabPane>

			    <TabPane tab="Tabs" key="9">
			    	<Tabs1/>
				</TabPane>


			    <TabPane tab="Editor" key="10">
			    	<Editor1/>
				</TabPane>

			    <TabPane tab="util" key="11">
			    	<AddressSelect/>
			    	<YearMonthDay/>
				</TabPane>


			</Tabs>

			</div>
		);
	}

});

module.exports = Demo;
