
var React = components.React;
var ReactDOM = components.ReactDOM;

var Header = components.header.header1;

var Info = components.modules.info1;

var SuperMarquee2 = components.carousel.superMarquee2;

var antd = components.antd;

var Row = antd.Row;
var Col = antd.Col;
var Tabs = antd.Tabs;
var TabPane = Tabs.TabPane;


var MainPage = React.createClass({

    render: function(){

        return(<div>
           	<Header/>
            <div style={{"width":"1200px","align":"center"}}>
             	<Row type="flex" justify="center">
             		<Col span="16">
                  <Row>
                    <Info/>
                  </Row>
                  <Row>
                    <div style={{"width":"800px"}}>
                      <Tabs defaultActiveKey="1" type="card">
                        <TabPane tab="自我介绍" key="1">选项卡一内容</TabPane>
                        <TabPane tab="生活方式" key="2">选项卡二内容</TabPane>
                        <TabPane tab="经济实力" key="3">选项卡三内容</TabPane>
                        <TabPane tab="工作学习" key="4">选项卡四内容</TabPane>
                        <TabPane tab="婚姻观念" key="5">选项卡五内容</TabPane>
                      </Tabs>
                    </div>
                  </Row>
             		</Col>

             		<Col span="8">
                    <div style={{"width":"400px"}}>
                      <SuperMarquee2 num="6" />
                    </div>
             		</Col>
             	</Row>
            </div>
        </div>);
    }
});

ReactDOM.render(<MainPage/>,document.getElementById("react-content"))

