;(function(){
	//顶部
	$('.main-nav li').hover(function(){
		$(this).find('a').not('.text-inverse').css('color','#999999');
		$(this).siblings('li').find('a').css('color','#ffffff');
	},function(){
		$('.main-nav li a').css('color','#ffffff');
	});
	$('.main-nav .cart').hover(function(){
		$(this).css('background','#EB4F2C');
	},function(){
		$(this).css('background','#F25C4A');
	});
	$('.cl li').hover(function(){
		$(this).css('border-bottom','2px solid #e3381f');
		$(this).siblings('li').css('border-bottom','none');
	});
	
	
	//放大镜
	function Scale() {
        this.wrap = document.querySelector('.wrap');
        this.spic = document.getElementById('spic'); //小图
        this.sf = document.getElementById('sf'); //小方
        this.bpic = document.getElementById('bpic'); //大图
        this.bf = document.getElementById('bf'); //大方
        this.picul = document.querySelector('#list ul');
        this.picli = document.querySelectorAll('#list ul li');
        this.picliwidth = this.picli[0].offsetWidth;
    }

    Scale.prototype.init = function() {
        var that = this;
        this.spic.onmouseover = function() {
            that.show();
            document.onmousemove = function(ev) {
                var ev = ev || window.event;
                that.move(ev);
            }
        };
        this.spic.onmouseout = function() {
            that.hide();
        };
        //点击小图，图片切换
        for (var i = 0; i < this.picli.length; i++) {
            this.picli[i].onclick = function() {
                var url = this.getElementsByTagName('img')[0].src;
                that.spic.getElementsByTagName('img')[0].src = url;
                that.bpic.src = url;
            }
        }
    }

    Scale.prototype.show = function() {
        this.sf.style.visibility = 'visible';
        this.bf.style.visibility = 'visible';
        this.sf.style.width = this.spic.offsetWidth * this.bf.offsetWidth / this.bpic.offsetWidth + 'px';
        this.sf.style.height = this.spic.offsetHeight * this.bf.offsetHeight / this.bpic.offsetHeight + 'px';
        this.scale = this.bf.offsetWidth / this.sf.offsetWidth; //放大比例
    };
    Scale.prototype.hide = function() {
        this.sf.style.visibility = 'hidden';
        this.bf.style.visibility = 'hidden';
    };
    Scale.prototype.move = function(ev) {
        var l = ev.clientX - this.wrap.offsetLeft - this.sf.offsetWidth / 2;
        var t = ev.clientY - this.wrap.offsetTop - this.sf.offsetHeight / 2;
        if (l < 0) {
            l = 0;
        } else if (l >= this.spic.offsetWidth - this.sf.offsetWidth - 2) {
            l = this.spic.offsetWidth - this.sf.offsetWidth - 2;
        }

        if (t < 0) {
            t = 0;
        } else if (t >= this.spic.offsetHeight - this.sf.offsetHeight - 2) {
            t = this.spic.offsetHeight - this.sf.offsetHeight - 2;
        }
        this.sf.style.left = l + 'px';
        this.sf.style.top = t + 'px';
        this.bpic.style.left = -this.scale * l + 'px';
        this.bpic.style.top = -this.scale * t + 'px';
    }
    new Scale().init();
    
    
    //加入购物车
    var sidarr=[];
    var numarr=[];
    function getcookievalue(){
    	if(getCookie('cartsid')){//cartsid：cookie里面id的名称
			sidarr=getCookie('cartsid').split(',');
		}
		if(getCookie('cartnum')){//cartnum：cookie里面数量的名称
			numarr=getCookie('cartnum').split(',');
		}
    }
    //第三步思路：通过判断商品的id是否存在上面获取的sid里面。
	//如果存在，已经在购物车里面了，否则将商品sid添加到cookie里面
	$('.an a').on('click', function() {
		var sid = $('#list').find('.loadimg').attr('sid');//当前按钮对应图片的sid
		getcookievalue();//获取商品的id和数量,放到对应的数组中,利用数组进行匹配
		if ($.inArray(sid, sidarr) != -1) {//是否存在cookie中
			//将之前的数据和当前存的数据相加，存放cookie里面
			if(getCookie('cartnum')==''){
				var num=parseInt($('#count').val());
				numarr[$.inArray(sid,sidarr)]=num;
				addCookie('cartnum', numarr.toString(), 7);//修改后的结果
				sidarr[$.inArray(sid,sidarr)]=sid;//将当前id添加到对应的位置。
				addCookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
			}else{
				var num=parseInt(numarr[$.inArray(sid,sidarr)])+parseInt($('#count').val());
				numarr[$.inArray(sid,sidarr)]=num;
				addCookie('cartnum', numarr.toString(), 7);//修改后的结果
			}
			
		}else{//不存在
			sidarr.push(sid);//将当前id添加到数组里面。
			addCookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
			numarr.push($('#count').val());//存放输入的数量，默认是1
			addCookie('cartnum', numarr.toString(), 7);
		}
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
			$('.container a').eq(9).html(getCookie('UserName'));
		}
	});
})();


