
var React = require("react");

/*
var components = require("./release-entry.js");
var Tools = require("./utils/tools.js");
var Report = components.Report;

var Demo = components.Demo;*/

var antd = require("../vendors/antd/antd");



var Collapse = antd.Collapse;
var Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

var text = " A dog is a type of domesticated animal.";

var Pagination = antd.Pagination;

function onChange(page) {
  console.log(page);
}

var Tree = antd.Tree;
var TreeNode = Tree.TreeNode;

function handleCheck(info) {
  console.log('check: ', info);
}



var MainPage = React.createClass({

    render: function(){

        return(
        	<div>
        		<button type="button">This is a button</button>
        		<antd.Datepicker />
        		<Pagination showQuickJumper={true} onChange={onChange} total={500} />
        		<Tree defaultExpandAll={true} checkable={true} onCheck={handleCheck}>
				    <TreeNode title="parent 1">
				      <TreeNode title="leaf" />
				      <TreeNode title="parent 1-1">
				        <TreeNode title="parent 2-1">
				          <TreeNode title="leaf" />
				          <TreeNode title="leaf" />
				        </TreeNode>
				        <TreeNode title="leaf" />
				      </TreeNode>
				    </TreeNode>
				  </Tree>
        		<Collapse defaultActiveKey={["1"]} onChange={callback}>
				    <Panel header={`This is panel header 1`} key="1">
				      <p>{text}</p>
				    </Panel>
				    <Panel header={`This is panel header 2`} key="2">
				      <p>{text}</p>
				    </Panel>
				    <Panel header={`This is panel header 3`} key="3">
				      <p>{text}</p>
				    </Panel>
			  	</Collapse>

			  	<button className="ant-btn">Button</button>
				<a href="javascript:;" className="ant-btn" role="button">Link</a>
				<input className="ant-btn" type="button" value="Input" />
				<input className="ant-btn" type="submit" value="Submit" />

				<br/>

				<button className="ant-btn ant-btn-primary">主按钮</button>
				<button className="ant-btn">次按钮</button>
				<button className="ant-btn ant-btn-ghost">幽灵按钮</button>
        	</div>
        	);
    }
});
React.render(<MainPage />, document.getElementById('content'));