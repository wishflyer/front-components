var React = require('react');

var $ = require('jquery');
var Tools = require("../../utils/tools");

var FullBackgroundImage = require("../util/fullBackgroundImage");
var antd = require("antd");

var Checkbox = antd.Checkbox;
var Button = antd.Button;

/**
 * 全部图片登录框
 */
var Login = React.createClass({



	render: function() {
		return (
	
        		<div>

	        		<br/>
	                <form className="ant-form-horizontal">
					  <div className="ant-form-item">
					    <label htmlFor="userName" className="col-6">账号：</label>
					    <div className="col-14">
					    	<input className="ant-input" type="text" id="userName" placeholder="请输入账号" />
					    </div>
					  </div>
					  <div className="ant-form-item">
					    <label htmlFor="password" className="col-6">密码：</label>
					    <div className="col-14">
					      <input className="ant-input" type="password" id="password" placeholder="请输入密码"/>
					    </div>
					  </div>
					  <div className="ant-form-item">
					    <label className="ant-checkbox-inline col-offset-6">
					      <Checkbox /> 记住我
					    </label>
					     <div className="ant-checkbox-inline ">
						    <Button type="primary">登录</Button>
						  </div>
					     <div className="ant-checkbox-inline ">
						    <a href="/register" data-tohash className="ant-btn ant-btn-ghost">注册</a>
						  </div>
					  </div>

					</form>
	        	</div>
	        

		);
	}

});

module.exports = Login;