var React = require("react");

var antd = require("antd");

require("../../static/css/components/header/header1.css");


var Menu = antd.Menu;
var SubMenu = Menu.SubMenu;


var Header1 = React.createClass({

	getInitialState: function() {
		return {
			current: 'mail'
		};
	},

	handleClick:function(e) {
	    console.log('click ', e);
	    this.setState({
	      current: e.key
	    });
  	},

	render: function() {
		return (
			<div id="header1" className="row-flex row-flex-end" style={{"background-color":"#fbfbfb","border-bottom":"1px solid #d9d9d9","padding":"10px 0"}}>
				<div><img src="../../static/image/logo.png" style={{"position":"absolute","left":"10%"}} /></div>
				<div className="menu">
					<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{"border-bottom":"0px"}}>
					   
					   	<Menu.Item key="mail">
					      <i className="anticon anticon-mail"></i>导航一
					    </Menu.Item>
					    <Menu.Item key="app">
					      <i className="anticon anticon-appstore"></i>导航二
					    </Menu.Item>
					    <SubMenu title={<span><i className="anticon anticon-setting"></i>导航 - 子菜单</span>}>
					      <Menu.Item key="setting:1">选项1</Menu.Item>
					      <Menu.Item key="setting:2">选项2</Menu.Item>
					      <Menu.Item key="setting:3">选项3</Menu.Item>
					      <Menu.Item key="setting:4">选项4</Menu.Item>
					    </SubMenu>
					    <Menu.Item key="alipay">
					      <button className="ant-btn ant-btn-primary">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
					    </Menu.Item>

					</Menu>
				</div>
				<div className="col-2"></div>
			</div>
			
		);
	}

});

module.exports = Header1;