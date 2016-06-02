import React from 'react';
import Sidebar from './sidebar.jsx';
import Topbar from './topbar.jsx';

require('../../../static/css/components/frame/admin/admin.css');

const Page = React.createClass({
	render() {
		return(
		<div>
			<Topbar userName={this.props.userName} title={this.props.title} onLogout={this.props.onLogout}/>
			<div id="wrapper">
				<div id="ajax-loading" className="la-anim-10"></div>
				<Sidebar list={this.props.sidebarList}/>
				<div id="current-page" style={{"float":"left","width":"80%"}}>
					{this.props.children}
				</div>
			</div>
		</div>)
	}
})

export default Page;