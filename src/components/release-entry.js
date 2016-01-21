
require("../static/vendors/antd/antd.css");

var Components = {

	React : require('react'),
	ReactDOM : require('react-dom'),

	antd: require('antd'),

	//page
	pages : { 
		main: { 
			page1:require("./pages/main/page1"),
		} 
	},

	login : {
		login1:require("./login/login1.jsx"),
	},

	//test
	/*test : {
		page1 : require("./test/page1"),
		page2 : require("./test/page2"),
	},*/

	tools : require("../utils/tools"),
	
	echarts : {
		ECharts : require("./echarts/echarts"),

		//bar
		BasicColumn : require("./echarts/components/bar/BasicColumn"),
		StackedColumn : require("./echarts/components/bar/StackedColumn"),

		//line
		BasicArea : require("./echarts/components/line/BasicArea"),
		BasicLine : require("./echarts/components/line/BasicLine"),
		IrregularLine : require("./echarts/components/line/IrregularLine"),
		StackedArea : require("./echarts/components/line/StackedArea"),
		StackedLine : require("./echarts/components/line/StackedLine"),

		//pie
		BasicPie : require("./echarts/components/pie/BasicPie"),

		//wordCloud
		WordCloud : require("./echarts/components/wordCloud/WordCloud")
	}

	
};

/*components.version = require('../../package.json').version;*/

//重新配置getter, 防止拿到undefined时React报奇怪的错误.(Uncaught TypeError: Cannot read property 'toUpperCase' of undefined @ReactDefaultInjection.js line53
// components.prototype.valueOf = function(key){
// 	alert("123");
// 	return this[key];
// }    

module.exports = Components;