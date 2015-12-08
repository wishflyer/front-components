var React = require('react');

var Tools = require('../../utils/tools');

var WebsocketSample = React.createClass({

		componentDidMount: function() {
		
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
	},

	render: function() {
		return (
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
		);
	}

});

module.exports = WebsocketSample;