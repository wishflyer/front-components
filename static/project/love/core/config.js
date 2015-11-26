console.log("loading config.js start");

window.dd = window.dd || {}
//配置路由信息
window.dd.RouteConfig = {
	"../static/project/love/core/base.jsx":/^\/$/ig,
	"../static/project/love/index.jsx":/^\/index$/ig,
	"../static/project/love/main/main.jsx":/^\/main$/ig,
}

window.dd.debugMode = true;
window.dd.vendorsPath = "./static/vendors/";

console.log("loading config.js");