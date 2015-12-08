var React = require('react');
var Tools = require("../../utils/tools");


var StackGridWallSocket = React.createClass({

	componentDidMount: function() {

		Tools.loadCSS(window.dd.vendorsPath+"stackgrid/example/css/style.css");

		Tools.loadScript(window.dd.vendorsPath+"stackgrid/stackgrid.adem.js",function(){
			Tools.loadScript(window.dd.vendorsPath+"stackgrid/example/js/vendor/velocity.js",function(){
				Tools.loadScript(window.dd.vendorsPath+"stackgrid/example/js/vendor/onimgload.adem.js",function(){
					Tools.loadScript(window.dd.vendorsPath+"stackgrid/example/js/example.js",function(){
						Tools.loadScript(window.dd.vendorsPath+"sockjs/sockjs.min.js",function(){

					    	var conn = null;

					      	function log(msg) {
					        	var control = $('#log');
					        	control.html(control.html() + msg + '<br/>');
					        	control.scrollTop(control.scrollTop() + 1000);
					      	}

					      	function connect() {
					        	disconnect();

					        	var transports = ["websocket", "xhr-streaming", "iframe-eventsource", "iframe-htmlfile", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"];

					        	conn = new SockJS(window.dd.wsServer + '/message', transports);

					        	log('Connecting...');

					        	conn.onopen = function() {
					          		log('Connected.');
					          		update_ui();
					        	};

						        conn.onmessage = function(e) {
						          	log('Received: ' + e.data);

						          	$("#satckGridWall-grid-container").val("");
						          	$("#satckGridWall-grid-container").append(
							          	"<div class='satckGridWall-grid-item'><img alt='' src='../../src/static/image/bigbar2.jpg'/></div>"
								    );
						        };

						        conn.onclose = function() {
						          	log('Disconnected.');
						          	conn = null;
						          	update_ui();
						        };
					      	}

					      	function disconnect() {
					        	if (conn != null) {
					          		log('Disconnecting...');

						          	conn.close();
					          		conn = null;

						          	update_ui();
					        	}
					      	}

					      	function update_ui() {
					        	var msg = '';

						        if (conn == null || conn.readyState != SockJS.OPEN) {
						          $('#status').text('disconnected');
						          $('#connect').text('Connect');
						        } else {
						          $('#status').text('connected (' + conn.protocol + ')');
						          $('#connect').text('Disconnect');
						        }
					      	}

					      	$('#connect').click(function() {
						        if (conn == null) {
						          connect();
						        } else {
						          disconnect();
						        }

						        update_ui();
						        return false;
					      	});

					      	$('form').submit(function() {
						        var text = $('#text').val();
						        log('Sending: ' + text);
						        conn.send(text);
						        $('#text').val('').focus();
						        return false;
					      	});
				        
						});
					});
				});
			});

		})
	},

	render: function() {
		return (
			<div id='satckGridWall'>
				<div>
					<div>WebsocketSample Sample</div>
					<div>
						<div>
						  	<a id="connect" href="#">Connect</a>&nbsp;|&nbsp;Status: <span id="status">disconnected</span>
						</div>
						<div id="log" style={{"width": "60em", "height": "20em", "overflow":"auto","border": "1px solid black"}}>
						</div>
						<form id="chatform">
						  	<input id="text" type="text" />
						  	<input type="submit" />
						</form>
					</div>
				</div>

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
			    <div className='satckGridWall-grid-container' id="satckGridWall-grid-container">
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

module.exports = StackGridWallSocket;