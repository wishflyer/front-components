console.log("loading config.js start");

window.dd = window.dd || {}
//配置路由信息
window.dd.RouteConfig = {
	"./src/static/project/love/core/base.jsx":/^\/$/ig,
	"./src/static/project/love/index.jsx":/^\/index$/ig,
	"./src/static/project/love/main/main.jsx":/^\/main$/ig,
}

window.dd.debugMode = true;
window.dd.vendorsPath = "./src/static/vendors/";

window.dd.wsServer = "http://127.0.0.1:8888";

console.log("loading config.js in love");