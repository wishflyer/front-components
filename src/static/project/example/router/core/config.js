console.log("example:loading config.js start");

window.dd = window.dd || {}
//配置路由信息
window.dd.RouteConfig = {
	"./src/static/project/example/router/core/index.jsx":/\/$/ig,
	"./src/static/project/example/router/main/index.jsx":/\/index$/ig,
	"./src/static/project/example/router/main/main.jsx":/\/main$/ig,
}

window.dd.debugMode = true;
window.dd.vendorsPath = "./static/vendors/";

console.log("example:loading config.js");