var React = require('react');

var antd = require("antd");

var Tabs = antd.Tabs;
var TabPane = Tabs.TabPane;

var Table = antd.Table;

var Button = antd.Button;

var Row = antd.Row;
var Col = antd.Col;

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  render: function(text) {
    return <a href="#">{text}</a>;
  }
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '住址',
  dataIndex: 'address'
}];
const data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '4',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '5',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '6',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '7',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '8',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '9',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}];

// 通过 rowSelection 对象表明需要行选择
const rowSelection = {
  onSelect: function(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: function(selected, selectedRows) {
    console.log(selected, selectedRows);
  }
};

const pagination = {
	pageSize:5
}

var TabPage = React.createClass({

	render: function() {
		return (
			<div>
				<Tabs defaultActiveKey="1" tabPosition="left">
				    <TabPane tab="收件箱" key="1">
				    	<Row style={{"margin":"10px 0 10px 5px"}}>
				    		<Button type="ghost" size="large">删除</Button>&nbsp;
				    		<Button type="ghost" size="large">转发</Button>&nbsp;
				    		<Button type="ghost" size="large">举报</Button>
				    	</Row>
				    	<Row>
				    		<Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={pagination} />
				    	</Row>
				    </TabPane>
				    <TabPane tab="发件箱" key="2">
				    	<Row style={{"margin":"10px 0 10px 5px"}}>
				    		<Button type="ghost" size="large">写信</Button>&nbsp;
				    		<Button type="ghost" size="large">删除</Button>
				    	</Row>
				    	<Row>
				    		<Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={pagination} />
				    	</Row>
				    </TabPane>
				</Tabs>
			</div>
		);
	}

});

module.exports = TabPage;
