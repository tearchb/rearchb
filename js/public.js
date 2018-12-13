//头部导航栏（显示隐藏）
let xan = false;
$('#san').click(function() {
	xan = !xan;
	if(xan) {
		$('.ynav').css('display', 'block');
	} else {
		$('.ynav').css('display', 'none');
	}
});

/*-------------------媒介查詢----------------------*/
//创建媒体查询列表对象
let result = window.matchMedia('(min-width:980px)');
// 添加监听器
result.addListener(refer);
// 在当前状态下调用一次监听函数，更新当前媒体查询的结果，防止当前状态与开发者默认的状态不一致
refer(result);
// 创建监听函数
function refer(result) {
	if(result.matches) {
		$('.block-grid-4>li ul').css('display', 'block');
		$('.col .left-menu').css('display', 'block');
		$('.ynav').css('display', 'none');
	} else {
		$('.block-grid-4>li ul').css('display', 'none');
		$('.col .left-menu').css('display', 'none');
	}
}

$(document).scroll(function() {
	if($(this).scrollTop() > 10) {
		$('header').height(80);
		$('header a').css('line-height', '80px');
		$('header #san').height(80);
		$('.ynav').css('top', 80);
	} else {
		$('header').height(100);
		$('header a').css('line-height', '100px');
		$('header #san').height(100);
		$('.ynav').css('top', 100);
	}
});

//返回顶部
$('#go-top').hide();
$(document).scroll(function() {
	if($(this).scrollTop() > 200) {
		$('#go-top').fadeIn();
	} else {
		$('#go-top').fadeOut();
	}
});
$('#go-top').click(function() {
	$("html,body").animate({
		"scrollTop": 0
	}, 800);
});

//删除cookie函数
function removeCookie(cname) {
	setCookie(cname, "", -1);
}
//设置cookie函数
function setCookie(cname, cvalue, exdays) { //设置cookie函数
	var d = new Date();
	d.setDate(d.getDate() + exdays);
	document.cookie = cname + '=' + cvalue + ';expires=' + d.toGMTString();
}
//获取cookie函数
function getCookie(cname) { //获取cookie函数
	var cname = cname + '=';
	var arr = document.cookie.split(';');
	for(var i in arr) {
		var c = arr[i].trim();
		if(c.indexOf(cname) != -1) {
			return c.substring(cname.length)
		}
	}
	return '';
}

/*----------------------------*/
var news = [{
		'img': '<img src="../image/金属与水泥重叠的万年历_–_MIIMOO_米墨_-_趣味生活杂货/1.jpg"/>',
		'h1': '金属与水泥重叠的万年历',
		'p': '水泥粗糙质感与光滑透亮的金属质感碰撞的万年历设计。<br /><br />来自 Studio Yonoh 的设计，灵感源自工业时代的旧厂房屋顶轮廓，向20世纪二三十年代建造的工厂的锯齿状屋顶致敬。<br /><br />使用3d打印面料基地模仿了具有时代特征的水泥质感，与使用光亮金属制造的月份与日期标签块相互映衬，这种拟物化的设计使日历不再停留于平面，鼓励用户与之交互，每天每月你都需要去移动和改变它们。最棒的是，它们永远不会用完!',
		"imgs": '<img src="../image/金属与水泥重叠的万年历_–_MIIMOO_米墨_-_趣味生活杂货/2.jpg"/><img src="../image/金属与水泥重叠的万年历_–_MIIMOO_米墨_-_趣味生活杂货/3.jpg"/><img src="../image/金属与水泥重叠的万年历_–_MIIMOO_米墨_-_趣味生活杂货/4.jpg"/><img src="../image/金属与水泥重叠的万年历_–_MIIMOO_米墨_-_趣味生活杂货/5.jpg"/><img src="../image/金属与水泥重叠的万年历_–_MIIMOO_米墨_-_趣味生活杂货/6.jpg"/><img src="../image/金属与水泥重叠的万年历_–_MIIMOO_米墨_-_趣味生活杂货/7.jpg"/><img src="../image/金属与水泥重叠的万年历_–_MIIMOO_米墨_-_趣味生活杂货/8.jpg"/><img src="../image/金属与水泥重叠的万年历_–_MIIMOO_米墨_-_趣味生活杂货/9.jpg"/>'
	},
	{
		'img': '<img src="../image/吃薯条的时候你还记得土豆皮吗？_–_MIIMOO_米墨_-_趣味生活杂货/1.jpg" />',
		'h1': '吃薯条的时候你还记得土豆皮吗？',
		'p': '吃完薯条后你会为那个几乎没被弄脏，制作精良的纸盒感到可惜吗？<br/><br/>吃薯条的时候你还记得土豆皮吗？你可能完全忘记了它们的存在，不过设计师 Rudy Sanchez 可没有忘记，他利用一直被丢弃的土豆皮，设计出了可以盛放薯条的卷筒，让土豆皮在薯条被吃掉前再多送薯条一程 ^_^ 。当然如果你愿意 “原汤化原食” 把这个土豆皮圆筒也吃掉的话也不是不可以的 …',
		'imgs': '<img src="../image/吃薯条的时候你还记得土豆皮吗？_–_MIIMOO_米墨_-_趣味生活杂货/2.jpg" /><img src="../image/吃薯条的时候你还记得土豆皮吗？_–_MIIMOO_米墨_-_趣味生活杂货/3.jpg" />'
	},
	{
		'img': '<img src="../image/让你的口红排排站_–_MIIMOO_米墨_-_趣味生活杂货/1.jpg" />',
		'h1': '让你的口红排排站',
		'p': '桌上的几个口红总是东倒西歪 ？ 设计师：MUID 设计的这款有趣的产品可以帮到你 ！<br/><br/>由柔软的环保橡胶制成的口红站立座，可以方便的放置 8 根口红，特别设计的十字插卡，即使口红粗细不一也可以很好的收纳整理，方的圆的都可以，是不是太方便了？',
		'imgs': '<img src="../image/让你的口红排排站_–_MIIMOO_米墨_-_趣味生活杂货/2.jpg" /><img src="../image/让你的口红排排站_–_MIIMOO_米墨_-_趣味生活杂货/3.jpg" /><img src="../image/让你的口红排排站_–_MIIMOO_米墨_-_趣味生活杂货/4.jpg" /><img src="../image/让你的口红排排站_–_MIIMOO_米墨_-_趣味生活杂货/5.jpg" />'
	},
	{
		'img': '<img src="../image/漂亮的植物灯_–_MIIMOO_米墨_-_趣味生活杂货/1.jpg" />',
		'h1': '漂亮的植物灯',
		'p': '家里一些弱光灯在做照明的同时，也可以给花草多肉等植物来提供光源，会不会很有趣呢？<br/><br/>来自设计师 Lightovo 的植物灯就是为了这个而设计的，全透明的手工吹制的玻璃灯罩，前后切割出漂亮的椭圆，既可以方便放入花盆，日常给花草施肥浇水，也可以给植物提供呼吸的空间。<br/><br/>当你坐在它的旁边看书的时候，是不是也会呼吸道植物光合作用后飘出的氧气呢？:)',
		'imgs': '<img src="../image/漂亮的植物灯_–_MIIMOO_米墨_-_趣味生活杂货/2.jpg" /><img src="../image/漂亮的植物灯_–_MIIMOO_米墨_-_趣味生活杂货/3.jpg" /><img src="../image/漂亮的植物灯_–_MIIMOO_米墨_-_趣味生活杂货/4.jpg" /><img src="../image/漂亮的植物灯_–_MIIMOO_米墨_-_趣味生活杂货/5.jpg" /><img src="../image/漂亮的植物灯_–_MIIMOO_米墨_-_趣味生活杂货/6.jpg" />'
	},
	{
		'img': '<img src="../image/做饭手残党的福音_–_MIIMOO_米墨_-_趣味生活杂货/1.jpg" />',
		'h1': '做饭手残党的福音',
		'p': '来自设计师 Park Kyungran, Kim Miyeon 和 Gho Hyejin 的简单设计，却是一群电饭锅手残党的福音，是的虽说电饭锅做饭已经简单到不能简单了，但还是有人因为不能放置准确的水量，而做出的米饭不是太湿，就是太干。<br/><br/>这个精确到一人份和两人份的大米包装，兼具了洗米与做饭所需水分的控制。让忙碌的人士们回到家就能快速的吃到香喷美味的米饭。而且使用非常方便，一看图就明白啦！',
		'imgs': '<img src="../image/做饭手残党的福音_–_MIIMOO_米墨_-_趣味生活杂货/2.jpg" /><img src="../image/做饭手残党的福音_–_MIIMOO_米墨_-_趣味生活杂货/3.jpg" />'
	},
	{
		'img': '<img src="../image/智能手机也许还能更小_–_MIIMOO_米墨_-_趣味生活杂货/1.jpg" />',
		'h1': '智能手机也许还能更小',
		'p': '如果为了更便携你可以不需要自拍，不需要指纹识别，不需要人脸识别，不需要屏幕自动按光线调节，那么设计师：Pierrick Romeuf 带来的这个超便携智能手机你也许会喜欢。<br/><br/>整机只有 iPhone Plus 的屏幕键盘那么大，单手就可以操作，你的大拇指可以控制到整个屏幕，因为可以横屏全屏来输入文字，所以输入也没有太大的问题。<br/><br/>由于舍弃了前置摄像头与各种传感器，整个正面全部是屏幕，加上专门设计的操作界面，对于资讯的浏览，社交网络的交流来说已经完全够用了。带来的好处是轻轻松松就可以带着走了，舒服 ~',
		'imgs': '<img src="../image/智能手机也许还能更小_–_MIIMOO_米墨_-_趣味生活杂货/2.jpg" /><img src="../image/智能手机也许还能更小_–_MIIMOO_米墨_-_趣味生活杂货/3.jpg" /><img src="../image/智能手机也许还能更小_–_MIIMOO_米墨_-_趣味生活杂货/4.jpg" /><img src="../image/智能手机也许还能更小_–_MIIMOO_米墨_-_趣味生活杂货/5.jpg" /><img src="../image/智能手机也许还能更小_–_MIIMOO_米墨_-_趣味生活杂货/6.jpg" /><img src="../image/智能手机也许还能更小_–_MIIMOO_米墨_-_趣味生活杂货/7.jpg" /><img src="../image/智能手机也许还能更小_–_MIIMOO_米墨_-_趣味生活杂货/8.jpg" /><img src="../image/智能手机也许还能更小_–_MIIMOO_米墨_-_趣味生活杂货/9.jpg" /><img src="../image/智能手机也许还能更小_–_MIIMOO_米墨_-_趣味生活杂货/10.jpg" />'
	},
	{
		'img': '<img src="../image/模块化音响_–_MIIMOO_米墨_-_趣味生活杂货/1.jpg" />',
		'h1': '模块化音响',
		'p': '让用户参与产品的使用期间的设计与搭建，民主设计的浪潮开始席卷各个领域的产品设计。<br/><br/>设计师：Simon Evrard 带来的模块化积木音响系统，用户可以自己排列组合所需要的模块，除了传统音响的结构以外，更还有单独的模块可以为手机无线充电。',
		'imgs': '<img src="../image/模块化音响_–_MIIMOO_米墨_-_趣味生活杂货/2.jpg" /><img src="../image/模块化音响_–_MIIMOO_米墨_-_趣味生活杂货/3.jpg" /><img src="../image/模块化音响_–_MIIMOO_米墨_-_趣味生活杂货/4.jpg" /><img src="../image/模块化音响_–_MIIMOO_米墨_-_趣味生活杂货/5.jpg" /><img src="../image/模块化音响_–_MIIMOO_米墨_-_趣味生活杂货/6.jpg" /><img src="../image/模块化音响_–_MIIMOO_米墨_-_趣味生活杂货/7.jpg" /><img src="../image/模块化音响_–_MIIMOO_米墨_-_趣味生活杂货/8.jpg" /><img src="../image/模块化音响_–_MIIMOO_米墨_-_趣味生活杂货/9.jpg" />'
	},
	{
		'img': '<img src="../image/提供柔美光线又能置物的床头灯_–_MIIMOO_米墨_-_趣味生活杂货/1.jpg" />',
		'h1': '提供柔美光线又能置物的床头灯',
		'p': '来自设计师 Christoph Andrejcic 的设计，一个灵感来自半个甜甜圈的床头灯，圆弧形下缘提供打散的柔和光线的同时，顶部亦可放置一些床头的小物件，比如手机，或者是钥匙，红色可活动的空格更可以放一些提示你重要性的东西，比如你每天必须要吃的药品等 ~',
		'imgs': '<img src="../image/提供柔美光线又能置物的床头灯_–_MIIMOO_米墨_-_趣味生活杂货/2.jpg" /><img src="../image/提供柔美光线又能置物的床头灯_–_MIIMOO_米墨_-_趣味生活杂货/3.jpg" /><img src="../image/提供柔美光线又能置物的床头灯_–_MIIMOO_米墨_-_趣味生活杂货/4.jpg" /><img src="../image/提供柔美光线又能置物的床头灯_–_MIIMOO_米墨_-_趣味生活杂货/5.jpg" /><img src="../image/提供柔美光线又能置物的床头灯_–_MIIMOO_米墨_-_趣味生活杂货/6.jpg" /><img src="../image/提供柔美光线又能置物的床头灯_–_MIIMOO_米墨_-_趣味生活杂货/7.jpg" />'
	},
	{
		'img': '<img src="../image/Cities_in_the_world_–_MIIMOO_米墨_-_趣味生活杂货/1.jpg" />',
		'h1': 'Cities in the world',
		'p': '来自日本插画家 Ryo Takemasa 城市系列插画，悠闲，生动，充满光感与微风。',
		'imgs': '<img src="../image/Cities_in_the_world_–_MIIMOO_米墨_-_趣味生活杂货/2.jpg" /><img src="../image/Cities_in_the_world_–_MIIMOO_米墨_-_趣味生活杂货/3.jpg" /><img src="../image/Cities_in_the_world_–_MIIMOO_米墨_-_趣味生活杂货/4.jpg" /><img src="../image/Cities_in_the_world_–_MIIMOO_米墨_-_趣味生活杂货/5.jpg" /><img src="../image/Cities_in_the_world_–_MIIMOO_米墨_-_趣味生活杂货/6.jpg" /><img src="../image/Cities_in_the_world_–_MIIMOO_米墨_-_趣味生活杂货/7.jpg" /><img src="../image/Cities_in_the_world_–_MIIMOO_米墨_-_趣味生活杂货/8.jpg" /><img src="../image/Cities_in_the_world_–_MIIMOO_米墨_-_趣味生活杂货/9.jpg" /><img src="../image/Cities_in_the_world_–_MIIMOO_米墨_-_趣味生活杂货/10.jpg" /><img src="../image/Cities_in_the_world_–_MIIMOO_米墨_-_趣味生活杂货/11.jpg" /><img src="../image/Cities_in_the_world_–_MIIMOO_米墨_-_趣味生活杂货/12.jpg" />'
	},
]

$('.swiper-container .swiper-wrapper .swiper-slide>a').each(function(i) {
	$(this).click(function() {
		setCookie("img", news[i].img, 7);
		setCookie("h", news[i].h1, 7);
		setCookie("p", news[i].p, 7);
		setCookie("imgs", news[i].imgs, 7);
	})
});

$('#content ul li>a').each(function(i) {
	$(this).click(function() {
		setCookie("img", news[i].img, 7);
		setCookie("h", news[i].h1, 7);
		setCookie("p", news[i].p, 7);
		setCookie("imgs", news[i].imgs, 7);
	})
});

if(getCookie('user') !== '') {
	$('.denglu').html('我的账户');
	$('.denglu').attr({
		href: "myself.html"
	});
}