var React = require('react');

var Tools = require('../../utils/tools');

require('../../static/css/components/util/list.css');

var List = React.createClass({

	componentDidMount: function() {

		if(this.props.justify){
			var maxLength = 0;
	        $("#"+this.state.id+" #dd-list .list-content-label").each(function () {
	            var text = $(this).text();
	            var textLength = text.length;
	            if (textLength > maxLength) {
	                maxLength = textLength;
	            }
	        });

			$("#"+this.state.id+" #dd-list .list-content-label").each(function () {
	                var text = $(this).text();
	                var spaceLength = maxLength - text.length;
	                var space = "";
	                for (var i = 0; i < spaceLength; i++) {
	                    space += "&nbsp;&nbsp;&nbsp;&nbsp;";
	                }

	                $(this).html(text.substring(0, 1) + space + text.substring(1, text.length));
	        });
		}

	},

	getInitialState: function() {
		return {
			id:Tools.uuid() 
		};
	},

	getDefaultProps: function() {
		return {
			justify:false,
			data:{}
		};
	},

	render: function() {

		var content = [];
		var data = this.props.data;
		for (var elem in data) {
			console.log("elem:"+elem+"  data[elem]:"+data[elem]);
		  	content.push(<div className="col-12 list-content"><span className="list-content-label">{elem}</span>：{data[elem]}</div>);
		}

		return (
			<div id={this.state.id}>
				<div id="dd-list">
					<div className="row">
						{
							content.map(function(index, elem) {
								return content[elem];
							})
						}
					</div>
				</div>
			</div>
		);
	}

});

module.exports = List;