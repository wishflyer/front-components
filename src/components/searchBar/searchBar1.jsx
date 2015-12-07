var React = require('react');

var antd = require("antd");

var Select  = antd.Select;
var Option = Select.Option;

var Checkbox = antd.Checkbox;
var Button = antd.Button;

var AddressSelect = require('../util/addressSelect');

var SearchBar = React.createClass({

	render: function() {

		var css1 = {
			"text-align": "right",
			"font-size": "1.2em",
			"line-height": "100%",
		    "margin-right": "8px",
		    "margin-left": "8px"
		}

		var panelCss = {
		    "border": "0px grey solid",
		    "padding": "20px",
		}

		return (
			<div className="row" style={panelCss}>

				<div>
					<span style={css1}>我要找</span>
					<Select defaultValue="lucy" style={{width:130}} >
					    <Option value="jack">男朋友</Option>
					    <Option value="lucy">女朋友</Option>
				  	</Select>
					<span style={css1}>年龄</span>
					<Select defaultValue="jack" style={{width:130}} >
					    <Option value="jack">20岁</Option>
					    <Option value="lucy">女朋友</Option>
				  	</Select>
				  	<span style={css1}>到</span>
				  	<Select defaultValue="jack" style={{width:130}} >
					    <Option value="jack">30岁</Option>
					    <Option value="lucy">女朋友</Option>
				  	</Select>


				  	<span style={css1}>地区</span>
        			<AddressSelect/>

        			<label style={css1}>
					  <Checkbox defaultChecked={false} />
					   是否有照片
					</label>
        			<Button type="primary" >搜索</Button>
				</div>



			</div>
		);
	}

});

module.exports = SearchBar;
