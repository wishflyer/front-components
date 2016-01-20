require("../static/vendors/antd/antd.css");

var React = require('react');
var ReactDOM = require('react-dom');
var Tools = require('../utils/tools.js');

/*


var Panel = require('./panel/panel1');

var Info2 = require('./pages/modules/info2')


;*/
/*


*/

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

var tableConfig = {
        localData: localData,
        // autoLoad: false,
        pageSizeSelect: true,
        pageSize: 10,
        rowHoverColor: true,
        extend: {
            settings: {
                supportColumnMove: true // if support extend column move, default false
            }
        }
    }

var ThisPage = React.createClass({

    testFunction:function(a){
        alert(a)
        a()
    },

    componentDidMount: function() {
      console.log("app.jsx load completed!!!");
      Tools.loadScript(window.dd.vendorsPath+"superSlide/jquery.SuperSlide.js",function(){alert("OMG.......")});
      this.testFunction(function(){alert('test')});
    },

    render: function(){

        var DemoCss = {
          "margin": "auto",
          "width":"80%"
        }

        return(
            <div style={DemoCss}>

                
                   123


            </div>

        )

    }
});
//ReactDOM.render(<ThisPage />, document.getElementById('react-content'));
//
module.exports = ThisPage;