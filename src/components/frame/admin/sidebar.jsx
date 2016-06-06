var React = require("react");
var antd = require("antd");

var Menu = antd.Menu;
var Icon = antd.Icon;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import Tools from "../../../utils/tools"

const Sidebar = React.createClass({
  getDefaultProps(){
    return {
      init:"index",
      list:[{}],
    }
  },
  getInitialState() {
    return {
      current: this.props.init,
      toRender:null,
    };
  }, 
  handleClick(e) {
    this.setState({
      current: e.key
    });
    Tools.loadUrl(e.key);
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      list: nextProps.list
    });
  },
  render() {
    let dummyKey=0;
    let createNode = node => {
      let toReturn = [];
      for(let item of node){ 
        if(item){
          if(typeof(item.children) == "undefined" || item.children.length==0){
            toReturn.push(<Menu.Item key={item.url || (dummyKey++).toString()}>{item.name || ""}</Menu.Item>)
          }else{
            toReturn.push(<SubMenu key={item.url || (dummyKey++).toString()} title={<span><Icon type={item.icon||"appstore"} /><span>{item.name}</span></span>}>
                {createNode(item.children)}
              </SubMenu>
              )
          }
        }
      }
      return toReturn;
    }
    let toRender = null;
    if(this.props.list && this.props.list.length>0)
      toRender = createNode(this.props.list);
    return (
      <Menu onClick={this.handleClick}
        style={{ "width": "20%", "float":"left","minHeight":"600px" }}
        defaultOpenKeys={this.props.list.defaultOpenKeys}
        selectedKeys={[this.state.current]}
        mode="inline">
        <li></li>
        {toRender || <Menu.Item key="loading" disabled>loading</Menu.Item>}
        <li></li>
      </Menu>
    );
  }
});

export default Sidebar;