/*---------------购物车显示-----------*/
$('header .gouwu').click(function() {
	$('#overbody').css('visibility', 'visible');
	$('#shoping').css('visibility', 'visible');
	$('#shoping').animate({
		right: 0
	}, 1500);
})
/*---------------购物车隐藏-----------*/
$('#shoping .p1 a').click(function() {
	$('#overbody').css('visibility', 'hidden');
	$('#shoping').animate({
		right: -410
	}, 1500);
})
/*------------商品列表高度实时变化------------*/
setInterval(function() {
	$('#shoping ul').height($('#shoping').height() - $('#shoping .p1').height() - $('#shoping .p2').height() - $('#shoping .jiesuan').height() - 100);
}, 200)
/*---------------购物车价格计算-----------------*/
function talMoney() {
	let talMoney = 0;
	let count = $('#shoping ul li p:nth-child(3) input');
	let prices = $('#shoping ul li p:nth-child(3) .danjia');
	for(let i = 0; i < count.length; i++) {
		talMoney += parseInt(parseInt(count[i].value) * parseFloat(prices[i].innerHTML) * 100) / 100;
	}
	$('#shoping .p2 span:nth-child(2)').html(talMoney);
}
setTimeout(talMoney, 1500);
$('#shoping ul').on('click', $('#shoping ul li p:nth-child(3) input'), function() {
	talMoney()
});

/*-----------------购物车商品列表动态创建-----------------------*/

$.get('../php/shoping.php', function(data) {
	if(data == '') {
		$('#shoping ul h1').css('display', 'block');
		$('#shoping .jiesuan').html('继续购物');
		$('#shoping .jiesuan').attr('href', 'index.html#shop');
		$('#shoping .jiesuan').click(function() {
			$('#overbody').css('visibility', 'hidden');
			$('#shoping').animate({
				right: -410
			});
		})
	} else {
		$('#shoping ul h1').css('display', 'none');
		let res = data.split("#");
		for(let i = 0; i < res.length - 1; i++) {
			res[i] = JSON.parse(res[i]);
			//			console.info(res[i]);
			let li = $("<li></li>");
			li.appendTo("#shoping ul");
			li.css('background-image', 'url(' + res[i].bgimg + ')');
			$("<p><span>" + res[i].shopInfo + "</span><a href=" + "##" + " class='delete'>×</a></p>").appendTo(li);
			$('<p>序号:<span>' + res[i].id + '</span></p>').appendTo(li);
			$("<p>数量:<input type='number' min='1' value='1'/><span class='danjia'>" + res[i].price + "</span><span>¥&nbsp;</span></p>").appendTo(li);
		}
	}
});
/*---------------删除商品--------------*/
$('#shoping ul').on("click", '.delete', function() {
	//		alert('哈哈哈');
	let id = this.parentNode.parentNode.children[1].children[0].innerHTML;
	//		console.log(num);
	if(confirm('确定删除这件商品吗？')) {
		//删除节点
		this.parentNode.parentNode.remove();
		//删除数据库中数据
		$.get("../php/delete.php?id=" + id, function(data) {
			if(data == 1) {
				$.get('../php/shoping.php', function(data) {
					if(data == '') {
						$('#shoping ul h1').css('display', 'block');
						$('#shoping .jiesuan').html('继续购物');
						$('#shoping .jiesuan').attr('href', 'index.html#shop');
						$('#shoping .jiesuan').click(function() {
							$('#overbody').css('visibility', 'hidden');
							$('#shoping').animate({
								right: -410
							});
						})
					}
				});
				alert("删除成功");
			} else {
				alert("删除失败");
			}
		})
	}
});