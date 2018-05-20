;(function(){
	//轮播图
	var $num=0;//接收索引。
	var $pic=$('.nubiya ul li');//切换的大图
	var $btn=$('.nubiya ol li');//下面一排切换按钮（小圆圈）
	var $piclist=$btn.length;//图片的个数
	var $ul=$('.nubiya ul');//移动的整体图片
	var $first=$pic.first().clone(true);
	var $last=$pic.last().clone(true);
	$ul.append($first);
	$ul.prepend($last);
	var $piclength=$('.nubiya ul li').length;//图片的总个数
	var $picwidth=$('.nubiya ul li').eq(0).width();//每张图片的宽度
	var timer=null;
	var bstop=true;//说明已经运动完了。
	$ul.width($piclength*$picwidth).css('left',-$picwidth+'px');
	//3、点击ol->li进行ul的位移。
	$btn.click(function(){
		//$(this).index();//当前点击的按钮的索引
		if(bstop){
			$num=$(this).index();
			tab();
		}
		bstop=false;
	});
	$('.right').click(function(){
		if(bstop){
			$num++;
			tab();
			if($num==$piclist){
				$btn.eq(0).addClass('active').siblings('li').removeClass('active');
			}
		}
		bstop=false;
	});
	$('.left').click(function(){
		if(bstop){
			$num--;
			tab();
		}
		bstop=false;
	})
	function tab(){
		$btn.eq($num).addClass('active').siblings('li').removeClass('active');
		$ul.animate({
			left:-$picwidth*($num+1)
		},200,function(){
			if(parseInt($ul.css('left'))==-$picwidth*($piclist+1)){
				$ul.css('left',-$picwidth+'px');
				$num=0;
			}
			if(parseInt($ul.css('left'))==0){
				$ul.css('left',-$picwidth*$piclist+'px');
				$num=$piclist-1;
			}
			bstop=true;//运动完了。
		});
	}
	timer=setInterval(function(){
		$('.right').click();
	},2000)
	$('.nubiya').mouseover(function(){
		clearInterval(timer);
	})
	$('.nubiya').mouseout(function(){
		timer=setInterval(function(){
			$('.right').click();
		},2000)
	})
	//导航    
	$('.nb-z-ico').eq(1).hover(function(){
		$(this).css('background','#fff');
		$(this).find('.a1 h2').css('color','#c8340c');
		$(this).find('.nb-mlside-menu').show();
	},function(){
		$(this).css('background','#fafafa00');
		$(this).find('.a1 h2').css('color','#333');
		$(this).find('.nb-mlside-menu').hide();
	});
	//颜色切换
	$('.nb-channel-item ul li').on("mouseover",function(){
		$(this).addClass('bgc').find('a').css('color','#ffffff');
		$(this).siblings('li').removeClass('bgc').find('a').css('color','#888888');
	});
	//楼梯
	 $(window).on('scroll',function(){
        //1.显示楼梯
        var $scroll=$(window).scrollTop();//获取滚动条离顶部的距离
        if($scroll>=550){
            $('#loutinav').show();
        }else{
            $('#loutinav').hide();
        }
        //4.滚轮控制左侧的楼梯进行active切换
        $('.louti').each(function(){
             //右侧每个楼层的top值，top值固定的。
             var $top=$('.louti').eq($(this).index()).offset().top+420;
             //如果当前的louti的top值大于滚动条的top值，添加active类
             if($top>$scroll){
                $('#loutinav li').removeClass('active');//清除所有的类
                $('#loutinav li').eq($(this).index()).addClass('active');
                return false;//每符合一个条件，终止遍历，滚轮事件连续触发的。继续下面的匹配
             }
        });
    }); 
    //2.点击左侧的楼梯，让右侧对应的模块显示在可视区
    $('#loutinav li').not('.last').on('click',function(){
        $(this).addClass('active').siblings('#loutinav li').removeClass('active');
        //右侧每个楼层的top值，top值固定的。
        var $top=$('.louti').eq($(this).index()).offset().top;
        $('html,body').animate({
            scrollTop:$top
        })
    });
    //3.回到顶部
    $('.last').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        })
    });   
    //cookie
    function addCookie(key, value, day) {
    	var date = new Date(); //创建日期对象
		date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
		document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
	}
	function getCookie(key) {
		var str = decodeURI(document.cookie);
		var arr = str.split('; ');
		for(var i = 0; i < arr.length; i++) {
			var arr1 = arr[i].split('=');
			if(arr1[0] == key) {
				return arr1[1];
			}
		}
	}
	function delCookie(key, value) {
		addCookie(key, value, -1); //添加的函数,将时间设置为过去时间
	}
	$(function() {
		if(getCookie('UserName')) {
			$('a').eq(7).html(getCookie('UserName'));
			$('li').eq(7).css('display','block');
		}
		$('.tc').on('click', function() {
			delCookie('UserName', '', -1);
			$('a').eq(7).html('登录');
			$('li').eq(7).css('display','none');
		});
	});
})();
