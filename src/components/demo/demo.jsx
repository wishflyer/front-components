var React = require('react');

var $ =  require('jquery');
var antd = require("antd");

require('../../static/css/components/demo/demo.css');

var Tabs = antd.Tabs;
var TabPane = Tabs.TabPane;
var Input  = antd.Input;
var Button = antd.Button;
var Col = antd.Col;
var Row = antd.Row;

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


var Uploader = require("../uploader/webuploader");

var List = require('../util/list');
var Star = require('../util/star')

var Layer = require('../modal/layer');


var Table = require('../table/bsgrid');

//modules
var Info1 = require('../modules/info1');
var Info2 = require('../modules/info2');
var List1 = require('../modules/list1');

var LeftMenu = require('../modal/leftMenu');

var listData = {"学历":"本科","收入":"10000","性别":"男","户口":"北京户口","是否吸烟":"否","是否喝酒":"否"}

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
  
    



var tableLocalData = [
    {
        "ID": 202,
        "CHAR": "1",
        "TEXT": "TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_1",
        "NUM": 11.2,
        "XH": 1
    },
    {
        "ID": 201,
        "CHAR": "111",
        "TEXT": "TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_2",
        "XH": 2
    }
]

var tableConfig = {
        localData: tableLocalData,
        // autoLoad: false,
        pageSizeSelect: true,
        pageSize: 10,
        rowHoverColor: true,
        extend: {
            settings: {
                supportColumnMove: true // if support extend column move, default false
            }
        }
    }

//query
var Query = require('../query/query');
var Command = require('../query/command');

var Table = require('../table/table');

var Demo = React.createClass({

	getInitialState:function(){

        return {
            table:{
                pageSize:10,
                pageNo:1,
                totalRows:0,
                data: [],
            },
        };

    },

	render: function() {


	var dataTable = this.state.table.data;
        for(let i=0;i<dataTable.length;i++){
            dataTable[i]['control']= <div><a  onClick={this.onGetProductMappingAction.bind(this,dataTable[i])}>同步</a>   |   <a onClick={this.showModifyModal.bind(this,dataTable[i])}>编辑</a>   |   <a onClick={this.onDeleteProductMappingAction.bind(this,dataTable[i].id)}>删除</a></div>;
        }

        let tableProps={
          title:['产品映射ID','云公司产品编码','华为产品编码','云资源规格编码','资源池编码','资源类型','状态','创建时间','修改时间','操作'],
          jsonKey:['id','ctProductCode','hwProductCode','speCode','zoneCode','resourceType','status','createDate','updateDate','control'],
          data:dataTable,
          doList:this.doList,
          pageSize:this.state.table.pageSize,
          pageNo:this.state.table.pageNo, //page:this.state.offset
          totalRows:this.state.table.totalRows,
          checkType:"none",
        };

        console.log(tableProps);

		return (
			<div id="demo">

			<Tabs defaultActiveKey="0">
				 <TabPane tab="NewForTest" key="0">
	                <LeftMenu/>

	                <div className="col-4">
			    		<SuperMarquee2 num="6" height="120"/>
			    	</div>

	                <Col span={16} offset={4}>
			            <Command>
			                <Button type="primary" onClick={null} >添加产品关系</Button>&nbsp;
			                <Button type="primary" onClick={null} >产品映射关系</Button>
			            </Command>

				    	<Query>
				    		<Input labelName="上传文件ID:" name="fileId" placeholder="上传文件ID" />
							<Input labelName="文件名称:" name="fileName" placeholder="文件名称" />
							<Input labelName="文件名称:" name="fileName" placeholder="文件名称" />
							<Input labelName="文件名称:" name="fileName" placeholder="文件名称" />
							<Input labelName="文件名称:" name="fileName" placeholder="文件名称" />
						</Query>
					</Col>
					<Col span={16} offset={4}>
						<Table {...tableProps} />
					</Col>

				</TabPane>

			    <TabPane tab="ad" key="1">
					<AdBar1 bgColor="grey"><img src='../../src/static/image/1.jpg' /></AdBar1>
			    </TabPane>
			    <TabPane tab="carousel" key="2">
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
				 <TabPane tab="Uploader" key="11">
					<Uploader/>
				</TabPane>
			    <TabPane tab="util" key="12">
			    	<AddressSelect/>
			    	<YearMonthDay/>
			    	
	                <Star/>
	                <Star curvalue="3"/>
	                <Star type="basic"/>
	                <Star type="basic" curvalue="3"/>
	                <List data={listData} justify={true}/>
				</TabPane>

				 <TabPane tab="Modules" key="13">
					<Info1/>
					<Info2/>
					<List1/>
				</TabPane>

				 <TabPane tab="Modal" key="14">
	                <Layer/>
				</TabPane>

				 <TabPane tab="Table" key="15">
	                <Table config={tableConfig}/>
				</TabPane>

			</Tabs>

			</div>
		);
	}

});

module.exports = Demo;

