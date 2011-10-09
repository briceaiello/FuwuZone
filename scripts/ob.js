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
		$("*[rel='ob']").click(function(){
			ob.thing = $(this).attr("href");
			ob.open(ob.thing);
			return false;
		});
	},
	open : function(thing){
		ob.thing = thing;
		$("body").append('<div id="ob"><div id="oba"></div><div id="obl"></div><div id="obc"><div id="obcr"><div id="obcc"></div></div></div></div>');
		$("#oba").css("display":"block").fadeTo(500,0.8);
		$("#obl").css("display":"block").fadeTo(500,1);
	}

}