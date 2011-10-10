var imgFilter=/(\.jpg)|(\.jpeg)|(\.bmp)|(\.gif)|(\.png)/i;
var youtubeFilter=/(youtube\.)/i;

ob = {	
	init:function(){
		$("*[rel='ob']").click(function(){
			ob.content=$(this).attr("content");
			ob.wait="!ok";
			ob.load(ob.content);
			return false;
		});
	},
	load:function(content){
		ob.content=content;
		$("body").append('<div id="ob"><div id="oba"></div><div id="obl"></div><div id="obc"><div id="obcr"><div id="obcc"></div></div></div></div>');
		$("#oba").css("display","block").fadeTo(500,0.8);
		$("#oba").click(ob.close);
		if(imgFilter.test(ob.content)){
			ob.img=new Image();
			ob.img.src=ob.content;
			$("#obl").css("display","block").fadeTo(500,1);
			ob.timer=window.setInterval(ob.loadImg,100);
			window.setTimeout(function(){ob.wait="ok";},5000);
		}else if(youtubeFilter.test(ob.content)){
			$("#obl").css("display","block").fadeTo(500,1);
			ob.id=(ob.content).split('watch?v=');
			ob.id=ob.id[1].split('&');
			ob.id=ob.id[0];
			ob.timer=window.setInterval(ob.loadYoutube,100);
			window.setTimeout(function(){ob.wait="ok";},5000);
		}else{
			$("#obcc").append(ob.content);
			ob.open();
		}
	},
	loadImg:function(){
		if(ob.wait=="ok"&&ob.img.complete){
			window.clearInterval(ob.timer);
			$("#obcc").append('<img src="'+ob.content+'">');
			ob.width = ob.img.width;
			ob.height = ob.img.height;
			ob.open();
		}
	},
	loadYoutube:function(){
		if(ob.wait=="ok"){
			window.clearInterval(ob.timer);
			ob.width = "560px";
			ob.height = "315px";
			$("#obcc").append('<object type="text/html" data="https://www.youtube.com/embed/'+ob.id+'?rel=0&autoplay=1" style="width:'+ob.width+';height:'+ob.height+';"></object>');
			ob.open();
		}
	},
	open:function(){
		$("#obl").fadeTo(300,0,function(){
			$("#obl").css("display","none");
			$("#obcc").animate({width:ob.width,height:ob.height},500);
			$("#obc").css("display","block").fadeTo(800,1);
		});
	},
	close:function(){
		$("#ob").fadeOut(500,function(){
			$("#oba,#obl,#obc").css({"display":"none","opacity":"0"});
			$("#ob").remove();
		});
	}
}

















/*
<div id="ob">
	<div id="oba"></div>
	<div id="obl"></div>
	<div id="obc">
		<div id="obcr">
			<div id="obcc"></div>
		</div>
	</div>
</div>
*/