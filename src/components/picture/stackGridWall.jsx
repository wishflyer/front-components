var React = require('react');
var Tools = require("../../utils/tools");


var StackGridWall = React.createClass({

	componentDidMount: function() {

		Tools.loadCSS(window.dd.vendorsPath+"stackgrid/example/css/style.css");

		Tools.loadScript(window.dd.vendorsPath+"stackgrid/stackgrid.adem.js",function(){
			Tools.loadScript(window.dd.vendorsPath+"stackgrid/example/js/vendor/velocity.js",function(){
				Tools.loadScript(window.dd.vendorsPath+"stackgrid/example/js/vendor/onimgload.adem.js",function(){
					Tools.loadScript(window.dd.vendorsPath+"stackgrid/example/js/example.js",function(){

					});
				});
			});

		})
	},

	render: function() {
		return (
			<div id='satckGridWall'>
				<div id='satckGridWall-control'>
			      <a className='control-button -one' href=''>Small</a>
			      <a className='control-button -two' href=''>Medium</a>
			      <a className='control-button -three' href=''>Large</a>
			      <a className='control-button -four' href=''>Gutter - 20</a>
			      <a className='control-button -five' href=''>Layout - optimized</a>
			      <a className='control-button -six' href=''>isFluid - false</a>
			      <a className='control-button -seven' href=''>numberOfColumns - 4</a>
			      <a className='control-button -eight' href=''>Width - 220</a>
			      <a className='control-button -nine' href=''>Clear</a>
			    </div>
			    <div className='satckGridWall-grid-container'>
			        <div className='satckGridWall-grid-item' >
			        	<div style={{"width":"60px","height":"400px","font-size":"13px"}}>
			        		This is a div <a href="http://www.baidu.com">baidu</a>
			        	</div>
			        </div>

			        <div className='satckGridWall-grid-item'>
			          <img alt='' src='../../src/static/image/bigbar2.jpg'/>
			        </div>
			        <div className='satckGridWall-grid-item'>
			          <img alt='' src='../../static/vendors/stackgrid/example/img/medium.jpg'/>
			        </div>
			        <div className='satckGridWall-grid-item'>
			          <img alt='' src='../../src/static/image/1.jpg'/>
			        </div>
			        <div className='satckGridWall-grid-item'>
			          <img alt='' src='../../src/static/image/2.jpg'/>
			        </div>
			        <div className='satckGridWall-grid-item'>
			          <img alt='' src='../../src/static/image/3.jpg'/>
			        </div>
			        <div className='satckGridWall-grid-item'>
			          <div style={{"width":"60px","height":"400px"}}>
			        		<button>test</button>
			        	</div>
			        </div>
			        <div className='satckGridWall-grid-item'>
			          <img alt='' src='../../src/static/image/girls/girl0.jpg'/>
			        </div>
			    </div>
			</div>
		);
	}

});

module.exports = StackGridWall;