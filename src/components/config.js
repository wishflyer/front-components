
console.log("config load start....");

window.dd = window.dd || {}

window.dd.RouteConfig = {
		"../js/pages/index.jsx":/^\/$/ig,
		"../js/test/page1.jsx":/test\/page1/ig,
		"../js/test/page2.jsx":/test\/page2/ig,

		"../js/pages/sample.jsx":/sample$/ig,
		"../js/pages/login.jsx":/login$/ig,
		"../js/pages/manage-report-group.jsx":/report\/manageReportGroup/ig,
		"../js/pages/report-manage.jsx":/report\/manage$/ig,
		"../js/pages/report-config.jsx":/report\/config/ig,
		"../js/pages/metadata.jsx":/report\/metadata/ig,
		"../js/pages/show-report.jsx":/showReport\/[^\/*]/ig
	
}

//配置路由信息

window.dd.vendorsPath = "./src/static/vendors/"

console.log("config load....");
