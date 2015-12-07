
	var speed1=10;
	var tab1=document.getElementById("picture_box1");
	var tab1_1=document.getElementById("picture_box1_1");
	var tab1_2=document.getElementById("picture_box1_2");
	tab1_2.innerHTML=tab1_1.innerHTML;
	function Marquee1(){
		if(tab1_2.offsetWidth-tab1.scrollLeft<=0)
			tab1.scrollLeft-=tab1_1.offsetWidth;
		else{
			tab1.scrollLeft++;
		}
	}
	var MyMar_1=setInterval(Marquee1,speed1);
	tab1.onmouseover=function() {clearInterval(MyMar_1);};
	tab1.onmouseout=function() {MyMar_1=setInterval(Marquee1,speed1);};


	var speed2=10;
	var tab2=document.getElementById("picture_box2");
	var tab2_1=document.getElementById("picture_box2_1");
	var tab2_2=document.getElementById("picture_box2_2");
	tab2_2.innerHTML=tab2_1.innerHTML;
	function Marquee2(){
		if(tab2_2.offsetWidth-tab2.scrollLeft<=0)
			tab2.scrollLeft-=tab2_1.offsetWidth;
		else{
			tab2.scrollLeft++;
		}
	}
	var MyMar_2=setInterval(Marquee2,speed2);
	tab2.onmouseover=function() {clearInterval(MyMar_2);};
	tab2.onmouseout=function() {MyMar_2=setInterval(Marquee2,speed2);};