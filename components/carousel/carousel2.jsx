var React = require('react');

var $ = require('jquery');
require('../../static/css/components/carousel/carousel2.css');

var Carousal = React.createClass({

	componentDidMount: function() {
		$.fn.extend({
			carousel2_control:function(v){
				var s=1000,n=-1,m,fx=v.direction;
				v.btn.click(function(){
					var ni=$(this).index()
					//,he=v.con.height()
					,he=fx=='left'?v.con.width():v.con.height()	
					,t=ni>n?he:-he;
					if(n==ni)return;
					v.btn.removeClass(v.act);
					$(this).addClass(v.act);

					if(fx=='left'){

						v.con.eq( n ).find('.'+v.tit).stop(true).animate({ left:-t },s/2);
						v.con.eq( n ).find('.'+v.msg).stop(true).animate({ left:-t },s/2);
						v.con.eq( ni ).find('.'+v.tit).css({ left:-t*2 }).stop(true).animate({ left:0 },s);
						v.con.eq( ni ).find('.'+v.msg).css({ left:t*2 }).stop(true).animate({ left:0 },s);	
						v.con.eq( n ).css({ left:0,zIndex:1 }).stop(true).animate({ left:-t },s);
						v.con.eq( ni ).css({ left:t,zIndex:2 }).stop(true).animate({ left:0 },s);
					}else if(fx=='top'){
						v.con.eq( n ).find('.'+v.tit).stop(true).animate({ top:-t },s/2);
						v.con.eq( n ).find('.'+v.msg).stop(true).animate({ top:-t },s/2);
						v.con.eq( ni ).find('.'+v.tit).css({ top:-t*2 }).stop(true).animate({ top:0 },s);
						v.con.eq( ni ).find('.'+v.msg).css({ top:t*2 }).stop(true).animate({ top:0 },s);	
						v.con.eq( n ).css({ top:0,zIndex:1 }).stop(true).animate({ top:-t },s);
						v.con.eq( ni ).css({ top:t,zIndex:2 }).stop(true).animate({ top:0 },s);
					}

					n=ni;
					xx();
				}).eq(0).click();
				function xy(){
					xx();
					if( n>=v.con.length-1 )n=-1;
					v.btn.eq(n+1).click();
				}
				function xx(){
					clearTimeout(m);
					m=setTimeout(function(){xy();},4000);
				}
			}
		});

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
			
		<div className='p24'>


			<div className='p24Content'>

				<div className='carousel2_content' style={{"background":"url(../../../../static/image/img/1.jpg) no-repeat center"}}>
					<div className='p24CCContainer'>
						<div className='carousel2_title' >分享好网站的效果</div>
						<div className='carousel2_msg' >优化高用户网站特效，然后封装为插件供免费下载<br/><em>每次确保绝对原创</em></div>
					</div>
				</div>
				<div className='carousel2_content' style={{"background":"url(../../../../static/image/img/2.jpg) no-repeat center"}}>
					<div className='p24CCContainer'>
						<div className='carousel2_title' >解析特效代码</div>
						<div className='carousel2_msg' >解析优质网站特效，提供给刚开始学习html css js 的同学<br/><em>每次确保绝对原创</em></div>
					</div>
				</div>
				<div className='carousel2_content' style={{"background":"url(../../../../static/image/img/3.jpg) no-repeat center"}}>
					<div className='p24CCContainer'>
						<div className='carousel2_title' >学习和交流 - 本子</div>
						<div className='carousel2_msg' >为最新，最好的用户体验而努力<br/><em>每次确保绝对原创</em></div>
					</div>
				</div>

			</div>

	
			<div className='p24Btn'>
				<div className='carousel2_btn carousel2_active'></div>
				<div className='carousel2_btn'></div>
				<div className='carousel2_btn'></div>
			</div>

		
			<div className='p24Zd'></div>

		</div>
		);
	}

});

module.exports = Carousal;