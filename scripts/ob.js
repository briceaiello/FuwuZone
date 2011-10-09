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

$(document).ready(function(){
	ob.init();
});


ob = {
	
	init : function(){
		$("*[rel='obconnect']").click(function(){
			ob.thing = $(this).attr("href");
			ob.start(ob.thing);
			return false;
		});
	},
	start : function(thing){
		ob.thing = thing;
		$("body").append('<div id="ob"><div id="oba"></div><div id="obl"></div><div id="obc"><div id="obcr"><div id="obcc"></div></div></div></div>');
		$("#oba").css("display","block").fadeTo(500,0.8);
		$("#obl").css("display","block").fadeTo(500,1);
		ob.obj = new Object();
		ob.obj.src = ob.thing;
		ob.timer = window.setInterval(ob.load,100);
		$("#oba").click(ob.close);
	},
	load : function(){
		if(ob.obj.complete){
			window.clearInterval(ob.timer);
			window.open();
		};
	},
	open : function(){
		$("#obl").fadeOut(300,function(){
			$("#obl").css("display","none");
			ob.width = ob.obj.width;
			ob.height = ob.obj.height;
			$("#obcc").append(ob.thing);
			$("#obcc").animate({width:ob.width,height:ob.height},500,"linear",function(){
				$("#obc").css("display","block");
			});
		});
	},
	close : function(){
		$("#obc,#obl,#oba").fadeOut(500,function(){
			$("#obc,#obl,#oba").css("display","none");
			$("#ob").remove();
		});
	}

}