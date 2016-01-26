var React = require('react');

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

var List = require('../util/list');


var listData = {"学历":"本科","收入":"10000","性别":"男","户口":"北京户口","是否吸烟":"否","是否喝酒":"否"}


var Info = React.createClass({


	callback: function(key) {
		console.log(key);
	},

	render: function() {

		var cssStyle = {
			width:"622px",
			//border:"1px solid grey"
		}

		return (
			<div>
				<Tabs defaultActiveKey="1" onChange={this.callback} style={cssStyle}>
				   	<TabPane tab="选项卡一" key="1">
				   		<span>这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试</span>


				   	</TabPane>
				   	<TabPane tab="选项卡二" key="2">
	                	<List data={listData} justify={true}/>

				   	</TabPane>
				   	<TabPane tab="选项卡三" key="3">
	                	<List data={listData} justify={true}/>
				   	</TabPane>
				   	<TabPane tab="选项卡四" key="4">
	                	<List data={listData} justify={true}/>
				   	</TabPane>
				   	<TabPane tab="选项卡五" key="5">
	                	<List data={listData} justify={true}/>
	                </TabPane>
				</Tabs>
			</div>
		);
	}

});

module.exports = Info;

