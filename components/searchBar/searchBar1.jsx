var React = require('react');

var antd = require('../../vendors/antd/antd');

var Select  = antd.Select;
var Option = Select.Option;

var SearchBar = React.createClass({

	render: function() {

		var css1 = {
			"text-align": "right",
			"font-size": "1.2em",
			"line-height": "100%",
		    "margin-right": "8px",
		    "margin-left": "8px"
		}

		return (
			<div className="row" style={{"margin-top":"10px"}}>

				<div className="col-3">
					<span style={css1}>我要找</span>
					<Select defaultValue="lucy" style={{width:100}} >
					    <Option value="jack">男朋友</Option>
					    <Option value="lucy">女朋友</Option>
				  	</Select>
				</div>



				<div className="col-10">
					<span style={css1}>年龄</span>
					<Select defaultValue="jack" style={{width:80}} >
					    <Option value="jack">20岁</Option>
					    <Option value="lucy">女朋友</Option>
				  	</Select>
				  	<span style={css1}>到</span>
				  	<Select defaultValue="jack" style={{width:100}} >
					    <Option value="jack">30岁</Option>
					    <Option value="lucy">女朋友</Option>
				  	</Select>
				</div>

			</div>
		);
	}

});

module.exports = SearchBar;
