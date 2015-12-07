console.log("loading config.js start");

window.dd = window.dd || {}
//配置路由信息
window.dd.RouteConfig = {
	"../static/project/example/router/core/base.jsx":/^\/$/ig,
	"../static/project/example/router/index.jsx":/^\/index$/ig,
	"../static/project/example/router/main/main.jsx":/^\/main$/ig,
}

window.dd.debugMode = true;
window.dd.vendorsPath = "./static/vendors/";

console.log("loading config.js");