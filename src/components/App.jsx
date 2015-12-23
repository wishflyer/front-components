require("../static/vendors/antd/antd.css");

var React = require('react');
var ReactDOM = require('react-dom');

var WebsocketSample = require('./websocket/test');


var Panel = require('./panel/panel1');

var Star = require('./util/star');

var List = require('./util/list');

var Info2 = require('./pages/modules/info2');
var List1 = require('./pages/modules/list1');

var Table = require('./table/bsgrid');



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
        rowHoverColor: true,
        extend: {
            settings: {
                supportColumnMove: true // if support extend column move, default false
            }
        }
    }

var ThisPage = React.createClass({



    render: function(){

        var DemoCss = {
          "margin": "auto",
          "width":"80%"
        }

        return(
            <div style={DemoCss}>

                <Table config={config}/>


            </div>

        )

    }
});
//ReactDOM.render(<ThisPage />, document.getElementById('react-content'));
//
module.exports = ThisPage;