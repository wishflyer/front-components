var React = require('react');
var Tools = require('../../utils/tools');

var Trumbowyg = React.createClass({

	componentDidMount: function() {


        Tools.loadCSS(window.dd.vendorsPath+"trumbowyg/dist/ui/trumbowyg.min.css");
        Tools.loadCSS(window.dd.vendorsPath+"trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.css");

        Tools.loadScript(window.dd.vendorsPath+"trumbowyg/dist/trumbowyg.min.js",function(){
        	console.log("run callback()");
        	/** Default editor configuration **/
	        $('#simple-editor').trumbowyg().on('dblclick', function(){
	        	console.log("this");
	            $(this).trumbowyg();
	        });

	        /********************************************************
             * Customized button pane + buttons groups + dropdowns
             * Use upload and base64 plugins
             *******************************************************/

            /*
             * Add your own groups of button
             */
            $.trumbowyg.btnsGrps.test = ['bold', 'link'];

            /* Add new words for customs btnsDef just below */
            $.extend(true, $.trumbowyg.langs, {
                fr: {
                    align: 'Alignement',
                    image: 'Image'
                }
            });
            var customizedButtonPaneTbwOptions = {
                lang: 'zh_cn',
                closable: true,
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
                btns: ['viewHTML',
                    '|', 'formatting',
                    '|', 'btnGrp-test',
                    '|', 'align',
                    '|', 'btnGrp-lists',
                    '|', 'image',
                    '|', 'foreColor', 'backColor']
            };
            $('#customized-buttonpane')
            .trumbowyg(customizedButtonPaneTbwOptions)
            .on('dblclick', function(){
                $(this).trumbowyg(customizedButtonPaneTbwOptions);
            });



            /** Simple customization with current options **/
            var formTbwOptions = {
                lang: 'zh_cn',
                closable: true,
                mobile: true,
                fixedBtnPane: true,
                fixedFullWidth: true,
                semantic: true,
                resetCss: true,
                autoAjustHeight: true,
                autogrow: true
            };
            $('#form-content')
            .trumbowyg(formTbwOptions)
            .on('dblclick', function(){
                $(this).trumbowyg(formTbwOptions);
            });



            /** Dynamic Iframe **/

            // Create the iframe element.
            var $iframe = $('<iframe/>').css({
                width: '100%',
                height: 400,
                border: 0
            });
            $('#dynamic-iframe-example').append($iframe);
            // Get the document of the iframe.
            var $editor = $('<div>', {
                    id: 'editor'
                }).html(
                      '<h2>This is within an iframe</h2> <p>Soc'
                    + 'tempor pulvinar ac ultricies, placerat in, elementum,'
                    + 'adipiscing pid, mid augue pulvinar eros nisi! In magn'
                    + 'magnis. Porttitor platea turpis nisi. Pulvinar massa,'
                    + ' habitasse <strong>a nunc rhoncus adipiscing</strong></p>'),
                optionTbwIframe = {
                    closable: true,
                    fullscreenable: false
                };

            setTimeout(function(){
                var contextIframe = $iframe.contents()[0];
                // Set the style on the head of the iframe.
                $('head', contextIframe).append($('<link>', {
                    href: 'dist/ui/trumbowyg.css',
                    rel: 'stylesheet'
                }));
                // Set the content to be editable.
                $('body', contextIframe).append($editor);

                $editor
                .trumbowyg(optionTbwIframe)
                .on('dblclick', function(){
                    $(this).trumbowyg(optionTbwIframe);
                });
            }, 500);


            /** Editor with placeholder **/
            $('#placeholder-editor')
            .trumbowyg()
            .on('dblclick', function(){
                $(this).trumbowyg();
            })
            .on('tbwfocus', function(){
                console.log('focus event fired');
            })
            .on('tbwblur', function(){
                console.log('blur event fired');
            });
        });
        
    	Tools.loadScript(window.dd.vendorsPath+"trumbowyg/dist/langs/zh_cn.min.js");
    	Tools.loadScript(window.dd.vendorsPath+"trumbowyg/dist/plugins/upload/trumbowyg.upload.min.js");
    	Tools.loadScript(window.dd.vendorsPath+"trumbowyg/dist/plugins/base64/trumbowyg.base64.js");
    	Tools.loadScript(window.dd.vendorsPath+"trumbowyg/plugins/colors/trumbowyg.colors.js");
        
	},

	render: function() {
		return (
			<div>
				<div id="main" role="main">
		            <form action="#">
						<div id="simple-editor">
		                    <h2>This editor is the default build of Trumbowyg.</h2>
		                    <p>
		                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, aliquam, minima fugiat placeat provident optio nam reiciendis eius beatae quibusdam!
		                    </p>
		                </div>
		                <div id="customized-buttonpane">
                    		<h2>This is a demo of Trumbowyg with a customized button pane</h2>
                  
	                    	<p style={{"text-align":"center;"}}>
	                        	TTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
	                    	</p>
                   		</div>
		            </form>
		        </div>
			</div>
		);
	}

});

module.exports = Trumbowyg;