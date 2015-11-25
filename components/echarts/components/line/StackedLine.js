/**
 * ECharts 图表组件
 * @module ECharts
 * @author czdujianbin 2015-09-21 10:01:41
 */


var React = require('react/addons');
var ZRender = require('../../../../static/vendors/zrender/index');
var Options = require('../../options/options');
var AbstractECharts = require("../AbstractECharts");
var Tools = require('../../../../utils/tools');


/**
 * StackedLine Chart
 * ```
 * 
 * var data = [
 *     {
 *         name : "测试1",
 *         data : [90, 113, 140, 30, 70, 60]
 *     },
 *     {
 *         name : "测试2",
 *         data : [190, 213, 240, 230, 70, 260]
 *     },
 * ];
 *
 * var xAxisName = ['周一','周二','周三','周四','周五','周六','周日'];
 * 
 * simple use:
 * <StackedLine id="chart1" data={data} xAxisName={xAxisName}/>
 *
 * Advance use:
 * <StackedLine id="test" title="曲线测试" subtitle="这是一个副标题测试" height="800px" width="100%" trigger="item" theme="macarons" data={data} xAxisName={xAxisName} smooth={true}/>
 *
 * ```
 * @class StackedLine
 * @extends AbstractECharts
 */
var StackedLine = React.createClass({
    
    "mixins":[AbstractECharts],

    renderChart: function () {

        if(!window.echarts) return;

        //get configure
        var option = this.props.option;

        if(!option){//no this.props.option

            //get default configure
            option = Tools.clone(Options.LineOption);

            option.title.text = this.props.title;
            option.title.subtext = this.props.subtitle;

            option.toolbox.feature.magicType = {show: true, type: ['line', 'bar', 'stack', 'tiled']};

            /**
             * @property {String} trigger 触发类型，默认数据触发，可选为：'item' | 'axis'
             */
            if(this.props.trigger){
                option.tooltip.trigger = this.props.trigger;
            }

            /**
             * @property {String} tooltipFormatter 格式化提示信息 (Template: a (series name), b(category value), c (value) ) eg : tooltipFormatter="Temperature : <br/>{b}km : {c}°C"
             */
            if(this.props.tooltipFormatter){
                option.tooltip.formatter = this.props.tooltipFormatter;
            }

            //build data
            option.series = Tools.clone(this.props.data);
            option.xAxis[0].data = this.props.xAxisName;

            var useDataZoom =  false;
            option.legend.data = [];
            for(var i = 0; i < option.series.length; i++){
                (option.series[i])["type"] = "line";
                (option.series[i])["stack"] = "sum";
                (option.series[i])["smooth"] = this.props.smooth;
                option.legend.data.push(option.series[i].name);
            }

            this.setDataZoom(option);

        }

        //加载图表
        this.loadChart(option);

    }


});

module.exports = StackedLine;