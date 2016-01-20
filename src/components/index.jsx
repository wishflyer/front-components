
require("../static/vendors/antd/antd.css");



import React from 'react';
import ReactDOM from 'react-dom';

import Demo from './demo/demo';



var ThisPage = React.createClass({

    componentDidMount: function() {
      console.log("index.jsx load completed!!!")
    },

    render: function(){

        var DemoCss = {
          "margin": "auto",
          "width":"80%"
        }

        return(
            <div style={DemoCss}>
                <Demo/>
            </div>
        );
    }
});
ReactDOM.render(<ThisPage />, document.getElementById('react-content'));
/*

import React from 'react';
import Datepicker from 'antd/lib/datepicker';

const App = React.createClass({
  render() {
    return <Datepicker />;
  },
});

export default App;*/
