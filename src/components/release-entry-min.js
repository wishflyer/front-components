
import '../common/lib';

var Components = {

	React : require('react'),
	ReactDOM : require('react-dom'),

	antd: require('antd'),

	tools : require("../utils/tools"),
	ajax  : require("../utils/ajax"),
	debug : require("../utils/debug"),

	frame:{
		page:require('./frame/admin/page'),
	},

	command : require("./query/command"),
	query : require("./query/query"),
	table : {
		myTable:require("./table/table.jsx"),
	}
	
};

/*components.version = require('../../package.json').version;*/

//重新配置getter, 防止拿到undefined时React报奇怪的错误.(Uncaught TypeError: Cannot read property 'toUpperCase' of undefined @ReactDefaultInjection.js line53
// components.prototype.valueOf = function(key){
// 	alert("123");
// 	return this[key];
// }    

module.exports = Components;