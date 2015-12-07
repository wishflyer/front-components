var React = require('react');
var Tools = require('../../utils/tools');

var Trumbowyg = React.createClass({

    getInitialState: function() {
        return {
            id:Tools.uuid(),
        };
    },

    getDefaultProps: function() {
        return {
            height:"300px"
        };
    },

	componentDidMount: function() {


        Tools.loadCSS(window.dd.vendorsPath+"trumbowyg/dist/ui/trumbowyg.min.css");
        Tools.loadCSS(window.dd.vendorsPath+"trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.css");



        var self = this;
        Tools.loadScript(window.dd.vendorsPath+"trumbowyg/dist/trumbowyg.min.js",function(){

            Tools.loadScript(window.dd.vendorsPath+"trumbowyg/dist/langs/zh_cn.min.js");
            Tools.loadScript(window.dd.vendorsPath+"trumbowyg/dist/plugins/upload/trumbowyg.upload.min.js");
            Tools.loadScript(window.dd.vendorsPath+"trumbowyg/dist/plugins/base64/trumbowyg.base64.js");
            Tools.loadScript(window.dd.vendorsPath+"trumbowyg/plugins/colors/trumbowyg.colors.js",function(){
             
                /** Default editor configuration **/
                /*$('#simple-editor').trumbowyg().on('dblclick', function(){
                    console.log("this");
                    $(this).trumbowyg();
                });*/

                /********************************************************
                 * Customized button pane + buttons groups + dropdowns
                 * Use upload and base64 plugins
                 *******************************************************/

                
                var customizedButtonPaneTbwOptions = {
                    lang: 'zh_cn',
                    closable: false,
                    fixedBtnPane: true,
                    btnsDef: {
                        // Customizables dropdowns
                        align: {
                            dropdown: ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                            ico: 'justifyLeft'
                        },
                        image: {
                            dropdown: ['insertImage', 'upload', 'base64'],
                            ico: 'insertImage'
                        }
                    },

                    btns: ['formatting',
                            '|', 'bold', 'italic', 'underline', 'strikethrough',
                            '|', 'foreColor', 'backColor',
                            '|', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
                            /*'|', 'unorderedList', 'orderedList',*/
                            '|', 'link',
                            '|', 'image',
                            '|', 'horizontalRule',
                            '|', 'viewHTML']

                };

                $('#'+self.state.id).trumbowyg(customizedButtonPaneTbwOptions)
                                    .on('dblclick', function(){
                                        $(this).trumbowyg(customizedButtonPaneTbwOptions);
                                    });

                $('#'+self.state.id).css({
                    height:self.props.height
                })

            });

        
        });
        
        
	},

	render: function() {
		return (
			<div>
                <div id={this.state.id}>
            		<h2>This is a demo of Trumbowyg with a customized button pane</h2>
          
                	<p style={{"textAlign":"center"}}>
                    	TTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
                	</p>
           		</div>
			</div>
		);
	}

});

module.exports = Trumbowyg;