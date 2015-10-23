
var React = require("react");
var ECharts = require("./echarts/echarts");
var WordCloud = require("./echarts/components/wordCloud/WordCloud");

/*
var components = require("./release-entry.js");
var Tools = require("./utils/tools.js");
var Report = components.Report;

var Demo = components.Demo;*/

//var Page = require("./pages/main/page1");
// var Page = require("./test/page1.jsx");


  var option = {
          title : {
                 text: '未来一周气温变化',
                 subtext: '纯属虚构'
             },
             tooltip : {
                 trigger: 'axis'
             },
             legend: {
                 data:['最高气温','最低气温']
             },
             toolbox: {
                 show : true,
                 feature : {
                     mark : {show: true},
                     dataView : {show: true, readOnly: false},
                     magicType : {show: true, type: ['line', 'bar']},
                     restore : {show: true},
                     saveAsImage : {show: true}
                 }
             },
             calculable : true,
             xAxis : [
                 {
                     type : 'category',
                     boundaryGap : false,
                     data : ['周一','周二','周三','周四','周五','周六','周日']
                 }
             ],
             yAxis : [
                 {
                     type : 'value',
                     axisLabel : {
                         formatter: '{value} °C'
                     }
                 }
             ],
             series : [
                 {
                     name:'最高气温',
                     type:'line',
                     data:[11, 11, 15, 13, 12, 13, 10],
                     markPoint : {
                         data : [
                             {type : 'max', name: '最大值'},
                             {type : 'min', name: '最小值'}
                         ]
                     },
                     markLine : {
                         data : [
                             {type : 'average', name: '平均值'}
                         ]
                     }
                 },
                 {
                     name:'最低气温',
                     type:'line',
                     data:[1, -2, 2, 5, 3, 2, 0],
                     markPoint : {
                         data : [
                             {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                         ]
                     },
                     markLine : {
                         data : [
                             {type : 'average', name : '平均值'}
                         ]
                     }
                 }
             ]
         };
 
     var data1 = [
      {
          name: "Macys",
          value: 6181
      },
      {
          name: "Amy Schumer",
          value: 4386
      }
    ];
    
    

var MainPage = React.createClass({

    render: function(){

        return(
        	<div>

    <WordCloud data={data1} />
    <WordCloud title="WordCloud" subtitle="WordCloud subtitile" height="800px" width="100%" theme="macarons" data={data1} />
     <ECharts id="chart1" height="800px" width="100%" option={option}/>
        	</div>
        	
        	);
    }
});
React.render(<MainPage />, document.getElementById('content'));