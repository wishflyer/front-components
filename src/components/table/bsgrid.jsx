var React = require('react');

var Tools = require('../../utils/tools');
var Debug = require('../../utils/debug');


/**
 *  使用说明
 *
	var localData = [
	    {
	        "ID": 202,
	        "CHAR": "1",
	        "TEXT": "TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_1",
	        "NUM": 11.2,
	        "XH": 1
	    },
	    {
	        "ID": 201,
	        "CHAR": "111",
	        "TEXT": "TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_2",
	        "XH": 2
	    }
	]

	var config = {
	        localData: localData,
	        // autoLoad: false,
	        pageSizeSelect: true,
	        pageSize: 10,
	        rowHoverColor: true
	    }
 *
 *
 *  <Table config={config}/>
 */


var header = [
    
    {header_name:"这是一个ID编码",w_index:"ID",w_length:10},
    {header_name:"CHAR",w_index:"CHAR",w_length:10},
    {header_name:"测试",w_index:"TEXT"},
    {header_name:"测试2",w_index:"NUM",w_length:10},

];
var localData = [
    {
        "ID": 202111111111111,
        "CHAR": "1",
        "TEXT": "默认数据",
        "NUM": 11.2,
        "XH": 1
    }];

var Table = React.createClass({

	getInitialState: function() {
		return {
			id:Tools.uuid() 
		};
	},

	getDefaultProps: function() {
		return {
			header:header,
			config:{
                localData: localData,
                pageSizeSelect: true,
                pageSize: 10
            }
		};
	},

	componentDidMount: function() {

		var self = this;
    	Tools.loadCSS(window.dd.vendorsPath+"bsgrid/builds/merged/bsgrid.all.min.css");



		Tools.loadScript(window.dd.vendorsPath+"bsgrid/builds/js/lang/grid.zh-CN.min.js");
		Tools.loadScript(window.dd.vendorsPath+"bsgrid/builds/merged/bsgrid.all.min.js",function(){

					var componentTable = "#"+self.state.id;
					var componentTableTr = "#"+self.state.id+" tr";
					var tableContent="<tr></tr> "

					$(componentTable).html(tableContent);

					var content = "";
					var header = self.props.header;
					for (var elem in header) {
						//console.log("elem:"+elem+"  header[elem]:"+header[elem]);
						var attrs = " ";
						for(var attr in header[elem]){
							//console.log("attr:"+attr+"  header[elem][attr]:"+header[elem][attr]);
							attrs += attr + '="'+header[elem][attr]+'" ';
						}
						content += '<th'+attrs+'>'+header[elem]['header_name']+'</th>'
					}

					$(componentTableTr).append(content);
		    		$.fn.bsgrid.init(self.state.id, self.props.config);

		})


    	
	},

	render: function() {
		return (
			<table id={this.state.id} />
		);
	}

});

module.exports = Table;


						/*$(componentTableTr).append('<th w_index="XH" w_length="10" w_tip="true">XH</th>');
						$(componentTableTr).append('<th w_index="ID" w_length="10">ID</th>');
						$(componentTableTr).append('<th w_index="CHAR" w_length="10" w_tip="true" width="5%;">CHAR</th>');
						$(componentTableTr).append('<th w_index="TEXT" w_length="10" w_tip="false">TEXT</th>');
						$(componentTableTr).append('<th w_index="TEXT" w_length="10" w_tip="true">TEXT</th>');
						$(componentTableTr).append('<th w_index="TEXT" w_length="10" w_tip="false">TEXT</th>');
						*/	
					

/*

			<table id="searchTable">
			<thead>
        <tr>
            <th w-index2 data-w_index aria-w-index2 w_index3="XH" width="5%;">XH</th>
            <th data-hash w_index="ID" width="5%;">ID</th>
            <th w_index="CHAR" w_align="left" width="15%;">CHAR</th>
            <th w_index="TEXT" w_align="left" width="30%;">TEXT</th>
            <th w_index="DATE" width="15%;">DATE</th>
            <th w_index="TIME" width="15%;">TIME</th>
            <th w_index="NUM" width="5%;">NUM</th>
            <th w_render="operate" width="10%;">Operate</th>
        </tr>
        </thead>
    </table>*/