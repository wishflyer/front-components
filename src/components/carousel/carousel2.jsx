var React = require('react');

var $ = require('jquery');
require('../../static/css/components/carousel/carousel2.css');

var Carousal = React.createClass({

	componentDidMount: function() {
		$.fn.extend({
			carousel2_control:function(v){
				var s=1000,nowIndex=-1,m,direction=v.direction;
				v.btn.click(function(){
					//获得相对于同胞的位置（0/1/2/3.....)
					var nextIndex=$(this).index()
					//获得要运动的长度
					,len=direction=='left'?v.con.width():v.con.height()	
					//如果要移动的元素在后面，则
					,t=nextIndex>nowIndex?len:-len;
					//当前元素，不需要移动
					if(nowIndex==nextIndex)return;
					//为按钮添加样式
					v.btn.removeClass(v.act);
					$(this).addClass(v.act);

					if(direction=='left'){

						v.con.eq( nowIndex ).find('.'+v.tit).stop(true).animate({ left:-t },s/2);
						v.con.eq( nowIndex ).find('.'+v.msg).stop(true).animate({ left:-t },s/2);
						v.con.eq( nextIndex ).find('.'+v.tit).css({ left:-t*2 }).stop(true).animate({ left:0 },s);
						v.con.eq( nextIndex ).find('.'+v.msg).css({ left:t*2 }).stop(true).animate({ left:0 },s);	
						v.con.eq( nowIndex ).css({ left:0,zIndex:1 }).stop(true).animate({ left:-t },s);
						v.con.eq( nextIndex ).css({ left:t,zIndex:2 }).stop(true).animate({ left:0 },s);
					}else if(direction=='top'){
						v.con.eq( nowIndex ).find('.'+v.tit).stop(true).animate({ top:-t },s/2);
						v.con.eq( nowIndex ).find('.'+v.msg).stop(true).animate({ top:-t },s/2);
						v.con.eq( nextIndex ).find('.'+v.tit).css({ top:-t*2 }).stop(true).animate({ top:0 },s);
						v.con.eq( nextIndex ).find('.'+v.msg).css({ top:t*2 }).stop(true).animate({ top:0 },s);	
						v.con.eq( nowIndex ).css({ top:0,zIndex:1 }).stop(true).animate({ top:-t },s);
						v.con.eq( nextIndex ).css({ top:t,zIndex:2 }).stop(true).animate({ top:0 },s);
					}

					//获得当前位置
					nowIndex=nextIndex;
					xx();
				}).eq(0).click();
				function xy(){
					xx();
					if( nowIndex>=v.con.length-1 )nowIndex=-1;
					v.btn.eq(nowIndex+1).click();
				}
				function xx(){
					clearTimeout(m);
					m=setTimeout(function(){xy();},4000);
				}
			}
		});

		/*按钮组*/
		var btn_group = $(".carousel2_btn").outerWidth(true)* $(".carousel2_btn").size();
		//make the list items same size as the images
		$('.carousel2_btn_group').css({ 
			"width":btn_group+"px",
			"position":"absolute",
			"bottom":"50px",
			"left":"50%",
			"z-index": 4,
			"margin-left":-btn_group/2+"px"
		});

		var zd_url = "url("+"../../../src/static/image/img/bg_visual_grid.png"+")";
		$('.carousel2_zd').css({ 
			"z-index":"3",
			"background":zd_url,
			"_background":"url('')",
		});



/*遮挡,美观而已*/
/* .{
	
} */


		$(window).carousel2_control({
			con:$('.carousel2_content'),		//每一个内容
			btn:$('.carousel2_btn'),		//按钮
			tit:'carousel2_title',		//标题
			msg:'carousel2_msg',		//描述
			act:'carousel2_active',			//按钮激活样式
			direction:'left',
		});
	},

	render: function() {
		return (
			
		<div className='carousel2'>


			<div className='carousel2_content_group'>

				<div className='carousel2_content' style={{"background":"url(../../../src/static/image/img/1.jpg) no-repeat left"}}>
					<div className='carousel2_container'>
						<div className='carousel2_title' >分享好网站的效果</div>
						<div className='carousel2_msg' >优化高用户网站特效，然后封装为插件供免费下载<br/><em>每次确保绝对原创</em></div>
					</div>
				</div>
				<div className='carousel2_content' style={{"background":"url(../../../src/static/image/img/2.jpg) no-repeat left"}}>
					<div className='carousel2_container'>
						<div className='carousel2_title' >解析特效代码</div>
						<div className='carousel2_msg' >解析优质网站特效，提供给刚开始学习html css js 的同学<br/><em>每次确保绝对原创</em></div>
					</div>
				</div>
				<div className='carousel2_content' style={{"background":"url(../../../src/static/image/img/3.jpg) no-repeat left"}}>
					<div className='carousel2_container'>
						<div className='carousel2_title' >学习和交流 - 本子</div>
						<div className='carousel2_msg' >为最新，最好的用户体验而努力<br/><em>每次确保绝对原创</em></div>
					</div>
				</div>
				<div className='carousel2_content' style={{"background":"url(../../../src/static/image/img/3.jpg) no-repeat left"}}>
					<div className='carousel2_container'>
						<div className='carousel2_title' >学习和交流 - 本子</div>
						<div className='carousel2_msg' >为最新，最好的用户体验而努力<br/><em>每次确保绝对原创</em></div>
					</div>
				</div>

			</div>

	
			<div className='carousel2_btn_group'>
				<div className='carousel2_btn carousel2_active'></div>
				<div className='carousel2_btn'></div>
				<div className='carousel2_btn'></div>
				<div className='carousel2_btn'></div>
			</div>

		
			<div className='carousel2_zd'></div>

		</div>
		);
	}

});

module.exports = Carousal;