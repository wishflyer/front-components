var React = require('react');

var antd = require('antd');

var Row = antd.Row;
var Col = antd.Col;
var Icon = antd.Icon;

var Button = antd.Button;
var ButtonGroup = Button.Group;

var SuperSlideCarousel204 = require("../../carousel/superSlideCarousel2.4");
var List = require("../../util/list");

var Star = require("../../util/star");


var listData = {"学历":"本科","收入":"10000","性别":"男","户口":"北京户口","是否吸烟":"否","是否喝酒":"否"
				,"学历啦":"本科","收入啦":"10000","性别啦啦":"男","户口啦":"北京户口","是否吸烟":"否","是否喝酒":"否"
				,"学历啦啦":"本科","收入啦":"10000","性别啦":"男","户口啦啦":"北京户口","户籍啦啦":"北京户口","是否吸烟":"否","是否喝酒":"否"}

require('../../../static/css/components/pages/modules/info1.css');

var Info = React.createClass({

	render: function() {
		return (
			<div id="dd-pages-moudles-info1">
				<div className="col-9" >
					<Row type="flex" justify="end">
						<SuperSlideCarousel204/>
					</Row>
				</div>
				<div className="col-14 col-offset-1">
					<Row>
						<span>小文ID:110079584</span>
					</Row>
					<Row>
						<span>会员身份：普通会员</span>
					</Row>
					<Row>
						<span style={{"float":"left"}}>诚信等级：</span><Star curvalue="2" maxvalue="2" type="small" style={{"float":"left","padding-top": "4px"}}/>
						<span id="dd-icons">
							<span id="dd-icon"><Icon type="mobile" /></span>
							<span id="dd-icon"><Icon type="mail" /></span>
							<span id="dd-icon"><Icon type="solution" /></span>
						</span>
					</Row>
					<Row>
						<span>认证信息是会员自愿提供，目前中国无完整渠道确保100%真实，请理性对待</span>
					</Row>
					<Row>
						<span>20岁，未婚，来自广东深圳</span>
					</Row>
					<Row type="flex" justify="start">
						<List data={listData} justify={true}/>
					</Row>
					<br/>
					<Row type="flex" justify="space-between">
						<Button type="ghost">给她发信</Button>
						<Button type="ghost">打声招呼</Button>
						<Button type="ghost">送她礼物</Button>
						<Button type="primary">关注她啦</Button>
					</Row>
				</div>
			</div>
		);
	}

});

module.exports = Info;


/*
					<br/>
					<Row type="flex" justify="space-between">

						<ButtonGroup>
						  <Button type="primary">发邮件</Button>
						  <Button type="ghost">打招呼</Button>
						  <Button type="ghost">送礼物</Button>
						  <Button>关注她</Button>
						</ButtonGroup>
					</Row>*/