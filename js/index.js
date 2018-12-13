//选项卡导航栏（显示隐藏）
let ify = false;
$('.col .ify').click(function() {
	ify = !ify;
	if(ify) {
		$('.col .left-menu').css('display', 'block');
	} else {
		$('.col .left-menu').css('display', 'none');
	}
});

//过滤筛选（显示隐藏）
$('div.col ul.right-menu li:nth-child(2) a').click(function() {
	if($('div.search-inner').css('display') == 'block') {
		$('div.search-inner').stop().hide('slow');
		setTimeout(function() {
			$('ul.block-grid-4').stop().toggle('slow');
		}, 600);
	} else {
		$('ul.block-grid-4').stop().toggle('slow');
	}
});

//搜索框（显示隐藏）
$('div.col ul.right-menu li:nth-child(3) a').click(function() {
	if($('ul.block-grid-4').css('display') == 'block') {
		$('ul.block-grid-4').stop().hide('slow');
		setTimeout(function() {
			$('div.search-inner').stop().toggle('slow');
		}, 600);
	} else {
		$('div.search-inner').stop().toggle('slow');
	}
});

//过滤筛选内容（显示隐藏）
$('.block-grid-4>li h3 a').each(function() {
	$(this).click(function() {
		//			alert('哈哈哈哈');
		$(this).parents("h3").next().stop().toggle('slow');
	});
});

//产品展示选项卡
$('div.col ul.left-menu li:nth-child(1) a').click(function() {
	$('ul.shop-show li').show();
});
$('div.col ul.left-menu li:nth-child(2) a').click(function() {
	$('ul.shop-show li').hide();
	$('ul.shop-show li:nth-child(2)').show();
});
$('div.col ul.left-menu li:nth-child(3) a').click(function() {
	$('ul.shop-show li').hide();
	$('ul.shop-show li:nth-child(1)').show();
	$('ul.shop-show li:nth-child(2)').show();
	$('ul.shop-show li:nth-child(5)').show();
});
$('div.col ul.left-menu li:nth-child(4) a').click(function() {
	$('ul.shop-show li').hide();
	$('ul.shop-show li:nth-child(3)').show();
	$('ul.shop-show li:nth-child(4)').show();
	$('ul.shop-show li:nth-child(6)').show();
});

//轮播图大小&&商品大小 （实时变化）
setInterval(function() {
	$('.swiper-slide a').width($('.swiper-slide').width());
	$('.swiper-slide a').height($('.swiper-slide').width());
	$('ul.shop-show li a.shop').width($('ul.shop-show li').width());
	$('ul.shop-show li a.shop').height($('ul.shop-show li').width());
}, 100);
/*------------------------------------*/
$('ul.shop-show li a.genduo').mouseover(function() {
	let str = $(this).html();
	$(this).html('更多');
	$(this).mouseout(function() {
		$(this).html(str);
	})
});
//产品订阅
let take = false;
$('.shop-show li p a').click(function() {
	take = !take;
	if(take) {
		$(this).css('border-color', '#f00 #fff');
	} else {
		$(this).css('border-color', '#ccc #fff');
	}
});

if(getCookie('user') !== '') {
	$('.denglu').html('我的账户');
	$('.denglu').attr({
		href: "myself.html"
	});
}

/*--------------------------*/
var shop = [{
		'bgimg': '../image/MIIMOO_米墨_-_趣味生活杂货_–/shop01.png',
		'h1': 'zomozo BLOCKS 像素橡皮',
		'p1': '12.0',
		'p2': '每一块像素橡皮擦的六个面都可以相互连接， 自由组合，拼接出丰富多彩像素化造型！'
	},
	{
		'bgimg': '../image/MIIMOO_米墨_-_趣味生活杂货_–/shop02.png',
		'h1': '汗青 InterestType 1.0',
		'p1': '5.0',
		'p2': '作者：羽墨<br/>格式：TTF<br/>内容：52个拉丁文字母大小写；阿拉伯数字；常用标点符号<br/>版本：1.0.0<br/>适用：windows / Mac OSX<br/>使用：个人以及商业用途<br/>权利：永久使用权，禁止二次销售<br/>大小：16 kb<br/>获取方式：支付后即可获得下载链接'
	},
	{
		'bgimg': '../image/MIIMOO_米墨_-_趣味生活杂货_–/shop03.png',
		'h1': 'bird 07 手机壁纸',
		'p1': '1.0',
		'p2': '作者：羽墨<br/>格式：TTF<br/>内容：52个拉丁文字母大小写；阿拉伯数字；常用标点符号<br/>版本：1.0.0<br/>适用：windows / Mac OSX<br/>使用：个人以及商业用途<br/>权利：永久使用权，禁止二次销售<br/>大小：16 kb<br/>获取方式：支付后即可获得下载链接'
	},
	{
		'bgimg': '../image/MIIMOO_米墨_-_趣味生活杂货_–/shop04.jpg',
		'h1': 'flamingos 手机壁纸',
		'p1': '1.0',
		'p2': '作者：羽墨<br/>格式：TTF<br/>内容：52个拉丁文字母大小写；阿拉伯数字；常用标点符号<br/>版本：1.0.0<br/>适用：windows / Mac OSX<br/>使用：个人以及商业用途<br/>权利：永久使用权，禁止二次销售<br/>大小：16 kb<br/>获取方式：支付后即可获得下载链接'
	},
	{
		'bgimg': '../image/MIIMOO_米墨_-_趣味生活杂货_–/shop05.jpg',
		'h1': '鸡蛋花花 生肖布偶旺财狗',
		'p1': '198.0',
		'p2': '品牌：鸡蛋花花<br/>材质：布，木<br/>工艺：手工制作'
	},
	{
		'bgimg': '../image/MIIMOO_米墨_-_趣味生活杂货_–/shop06.jpg',
		'h1': 'bird 05 手机壁纸',
		'p1': '1.0',
		'p2': '作者：羽墨<br/>格式：TTF<br/>内容：52个拉丁文字母大小写；阿拉伯数字；常用标点符号<br/>版本：1.0.0<br/>适用：windows / Mac OSX<br/>使用：个人以及商业用途<br/>权利：永久使用权，禁止二次销售<br/>大小：16 kb<br/>获取方式：支付后即可获得下载链接'
	}
]

$('.shop-show .shop').each(function(i) {
	$(this).click(function() {
		setCookie("imgbg", shop[i].bgimg, 7);
		setCookie("h1", shop[i].h1, 7);
		setCookie("p1", shop[i].p1, 7);
		setCookie("p2", shop[i].p2, 7);
	})
});