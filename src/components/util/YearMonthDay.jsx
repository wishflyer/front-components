var React = require('react');
var $ = window.jQuery;


var antd = require("antd");
var Popover = antd.Popover;
var Button = antd.Button;

require('../../static/css/components/util/yearMonthDay.css');

var dd_year_content = <div id="dd_year_month_day_content" style={{"width":"470px","height":"125px"}}>

		<div className="row">
		  	<div className="col-2">90后:</div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1990')">1990</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1991')">1991</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1992')">1992</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1993')">1993</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1994')">1994</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1995')">1995</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1996')">1996</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1997')">1997</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1998')">1998</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1999')">1999</a></div>
		  </div>
		<div className="row">
		  	<div className="col-2">80后:</div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1980')">1980</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1981')">1981</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1982')">1982</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1983')">1983</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1984')">1984</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1985')">1985</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1986')">1986</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1987')">1987</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1988')">1988</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1989')">1989</a></div>
		  </div>
		<div className="row">
		  	<div className="col-2">70后:</div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1970')">1970</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1971')">1971</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1972')">1972</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1973')">1973</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1974')">1974</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1975')">1975</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1976')">1976</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1977')">1977</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1978')">1978</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1979')">1979</a></div>
		  </div>
		<div className="row">
		  	<div className="col-2">60后:</div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1960')">1960</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1961')">1961</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1962')">1962</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1963')">1963</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1964')">1964</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1965')">1965</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1966')">1966</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1967')">1967</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1968')">1968</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1969')">1969</a></div>
		  </div>
		<div className="row">
		  	<div className="col-2">50后:</div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1950')">1950</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1951')">1951</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1952')">1952</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1953')">1953</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1954')">1954</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1955')">1955</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1956')">1956</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1957')">1957</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1958')">1958</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1959')">1959</a></div>
		  </div>
		<div className="row">
		  	<div className="col-2">40后:</div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1940')">1940</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1941')">1941</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1942')">1942</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1943')">1943</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1944')">1944</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1945')">1945</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1946')">1946</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1947')">1947</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1948')">1948</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1949')">1949</a></div>
		  </div>
		<div className="row">
		  	<div className="col-2">30后:</div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1930')">1930</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1931')">1931</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1932')">1932</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1933')">1933</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1934')">1934</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1935')">1935</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1936')">1936</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1937')">1937</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1938')">1938</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_year').html('1939')">1939</a></div>
		  </div>
	</div>;


var dd_month_content = <div id="dd_year_month_day_content" style={{"width":"440px","height":"25px"}}>

		<div className="row">
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('1')">1</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('2')">2</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('3')">3</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('4')">4</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('5')">5</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('6')">6</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('7')">7</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('8')">8</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('9')">9</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('10')">10</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('11')">11</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_month').html('12')">12</a></div>
		  </div>
	</div>;


var dd_day_content = <div id="dd_year_month_day_content" style={{"width":"440px","height":"56px"}}>

		<div className="row">
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('1')">1</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('2')">2</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('3')">3</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('4')">4</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('5')">5</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('6')">6</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('7')">7</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('8')">8</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('9')">9</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('10')">10</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('11')">11</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('12')">12</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('13')">13</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('14')">14</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('15')">15</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('16')">16</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('17')">17</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('18')">18</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('19')">19</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('20')">20</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('21')">21</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('22')">22</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('23')">23</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('24')">24</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('25')">25</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('26')">26</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('27')">27</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('28')">28</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('29')">29</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('30')">30</a></div>
		  	<div className="col-2"><a href="javascript:$('#dd_day').html('31')">31</a></div>
		  </div>
	</div>;


var YearMonthDay = React.createClass({




	render: function() {
		return (
			<div id="dd_year_month_day" className="col-offset-5">
			  <Popover overlay={dd_year_content} placement="bottom" title="请选择年份" trigger="hover" prefixCls="dd_year_month_day ant-popover" overlayStyle={{"left":"308px"}} >
			    <Button type="ghost"><span id="dd_year">1987</span>年</Button>
			  </Popover>
			  	<Popover overlay={dd_month_content} placement="bottom" title="请选择月份" trigger="hover" prefixCls="dd_year_month_day ant-popover" overlayStyle={{"left":"308px"}} >
			    	<Button type="ghost"><span id="dd_month">1</span>月</Button>
			  </Popover> 
				<Popover overlay={dd_day_content} placement="bottom" title="请选择日期" trigger="hover" prefixCls="dd_year_month_day ant-popover" overlayStyle={{"left":"308px"}} >
			    	<Button type="ghost"><span id="dd_day">1</span>日</Button>
			  	</Popover>
			</div>
		);
	}

});

module.exports = YearMonthDay;

