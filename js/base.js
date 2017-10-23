(function($, method) {
	method.move = function(obj,a,b) {
		$(obj).mouseover(function(){
//			$(this).animate({height:"300px"});
			$(this).rotate('180')
		})
		$(obj).mouseout(function(){
			
		})
	}
	
}($, window.base = {}));