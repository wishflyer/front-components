Tools = components.tools;

console.log("load router.js....")
if(window.location.pathname == "/login" || window.location.hash == '#/login'){
	window.location.hash = "#/login";
    console.log("加载Login")
	//根据URL加载不同业务页面
	Tools.goJSX("#/login");
}else{
    console.log("load base.jsx")
	//加载基本框架
	Tools.loadScript("./static/project/love/core/base.jsx");
	console.log("window.location.hash:"+window.location.hash)
	//根据URL加载不同业务页面
	Tools.goJSX(window.location.hash);
}