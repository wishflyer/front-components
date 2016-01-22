console.log("loading config.js start");

window.dd = window.dd || {}
//配置路由信息
window.dd.RouteConfig = {
	"./src/static/project/love/core/index.jsx":/\/$/ig,
	"./src/static/project/love/main/index.jsx":/\/index$/ig,
	"./src/static/project/love/main/main.jsx":/\/main$/ig,
	"./src/static/project/love/user/login.jsx":/\/login$/ig,
	"./src/static/project/love/user/register.jsx":/\/register$/ig,
}

window.dd.debugMode = true;
window.dd.vendorsPath = "./src/static/vendors/";

window.dd.wsServer = "http://127.0.0.1:8888";

console.log("loading config.js in love");