var $shadow = new Object();  
		$shadow.domXpath = function(dom) {  
			dom = $(dom).get(0);  
			var path = "";  
			for (; dom && dom.nodeType == 1; dom = dom.parentNode) {  
				var index = 1;  
				for (var sib = dom.previousSibling; sib; sib = sib.previousSibling) {  
					if (sib.nodeType == 1 && sib.tagName == dom.tagName)  
						index++;  
					}  
				var xname =  dom.tagName.toLowerCase();  
				if (dom.id) {  
					xname += "[@id=\"" + dom.id + "\"]";  
				} else {  
					if (index > 0)  
						xname += "[" + index + "]";  
				}  
				path = "/" + xname + path;  
			}  
				
			path = path.replace("html[1]/body[1]/","html/body/");  
				
						return path;  
			
		};  
function sleep(n) { //n表示的毫秒数
		var start = new Date().getTime();
		while (true) if (new Date().getTime() - start > n) break;
	}  
	
	$(document).ready(function(){
		c=0
		$("*").on('mouseover',function () {
			$(this).css("border-style","solid");
			$("*").unbind("mouseover")
			$($(this).parentNode).css('bodrer-style',"");

		})
		$("*").on('mouseout',function () {
			$(this).css("border-style","");
			$("*").bind("mouseover",function () {
					$(this).css("border-style","solid");
					$("*").unbind("mouseover")
					$($(this).parentNode).css('bodrer-style',"");
					})

		})
		$("*").on('click',function () {
			//alert($shadow.domXpath(this));
			if (c==0){
				alert($shadow.domXpath(this));
			}
			c += 1 
			if(this.parentNode==document)
			{
				c=0
			}

		})
	});