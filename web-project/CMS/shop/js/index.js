//头部广告效果 
$("#topbar img.close").click(function(){
	$("#topbar").slideUp();
});

//导航滑动效果
$("#nav ul li.item").not(".first,.last").hover(function(){
	var _left = $(this).position().left;//获取 li与他相对定位元素 ul左边的距离
	var _width = $(this).width();//获取li的宽度
	//document.title = _left+"--"+_width;
	
	$("#nav ul li.last").css("width",_width).show().stop().animate({left:_left},200);
},function(){
	$("#nav ul li.last").hide();
});

//吸顶盒导航  
/*浏览器窗品的滚动事件 scroll*/
$(window).scroll(function(){
	var _top = $(window).scrollTop();//获取浏览器窗口滚动高度
	var _height = $(".topMain").height();
	//document.title=_top;
	_top>_height?$("#nav").addClass("gd"):$("#nav").removeClass("gd");
});

//显示二级菜单内容
$("#banner ol li").hover(function(){
	$(this).addClass("hover");
	//当前 li与Menu上面的距离
	var _top=$(this).position().top; //获取li与他相对定位元素上面的距离 top值
	var _height=$(this).find(".moreNav").height()/3;
	if(_top>_height){
		if($(this).index()==4 || $(this).index()==5){
			$(this).find(".moreNav").css("top",-(_height*3-68));
		}else{
			$(this).find(".moreNav").css("top",-_height); //重新给.moreNav赋值
		}
	}
},function(){
	$(this).removeClass("hover");
});


//轮播图特效

var _index = 0;
var oTimer = null;
var oLi = $("#banner .flash ul.scroll li").size();

function oBtnNext(){
	_index++;

	if (_index==oLi)
	{
		_index=0;
	}
	oBtnDo();
}
function oBtnDo(){
	$("#banner .flash ul.scroll li").css("left","0px").eq(_index).fadeIn(50).siblings().fadeOut(50);
	$("#banner ul.smallDot li").eq(_index).addClass("active").siblings().removeClass("active");
}

$("#banner .PartCon a.prev").click(function(){//prev
	_index--;

	if (_index<0)
	{
		_index=oLi-1;
	}
	oBtnDo();

});

$("#banner .PartCon a.next").click(function(){//next
	oBtnNext();
	oBtnDo();
});

$("#banner ul.smallDot li").mouseover(function(){
		
		if (_index!=$(this).index())
		{
			if (_index<$(this).index())
			{
				var oWidth=$("#banner .flash ul.scroll li").width();
				$("#banner .flash ul.scroll li").eq(_index).animate({left:-oWidth},function(){
					$(this).hide();
				}).end().eq($(this).index()).show().css("left",oWidth).animate({left:0});
				_index=$(this).index();
				$(this).addClass("active").siblings().removeClass("active");
			}
			else{
				var oWidth=$("#banner .flash ul.scroll li").width();
				$("#banner .flash ul.scroll li").eq(_index).animate({left:oWidth},function(){
					$(this).hide();
				}).end().eq($(this).index()).show().css("left",-oWidth).animate({left:0});
				_index=$(this).index();
				$(this).addClass("active").siblings().removeClass("active");
			}
		}
	});

//banner Timer

$("#banner .flash").hover(function(){
	clearInterval(oTimer);
},function(){
	oTimer = setInterval(oBtnNext,2000);
});

oTimer = setInterval(oBtnNext,2000);

//按扭显示隐藏
$("#banner").hover(function(){
	$(this).find("a.btn").fadeIn(200);
},function(){
	$(this).find("a.btn").fadeOut(200);
});