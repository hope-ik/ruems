//banner
$('.index_banner').slick({
	autoplay: true,
	arrows: false,
	dots: false,
	infinite: true,
	speed: 500,
	autoplaySpeed: 5000,
	pauseOnHover: false,
	fade: true,
	responsive: [{
		breakpoint: 992,
		settings: {
			dots: true
		}
	}]
});



$('.index_banner').init(function(slick) {
	$('.index_banner .item.slick-current').addClass('active').siblings().removeClass('active')
})
$('.index_banner').on('afterChange', function(slick, currentSlide) {
	$('.index_banner .item.slick-current').addClass('active').siblings().removeClass('active');
	var _index = $('.index_banner').slick('slickCurrentSlide')
	$('.section1 .number span').eq(_index).addClass('active').siblings().removeClass('active')
})
$('.section1 .number span').click(function() {
	var _index = $(this).index();
	$('.index_banner').slick('slickGoTo', _index);
	$(this).addClass("active").siblings().removeClass("active")
});
$('.section1 .prev').click(function() {
	$('.index_banner').slick('slickPrev')
})
$('.section1 .next').click(function() {
	$('.index_banner').slick('slickNext');
});

//导航
//超过一定高度导航添加类名
// var nav = $("header"); //得到导航对象  
// var win = $(window); //得到窗口对象  
// var sc = $(document); //得到document文档对象。  
// win.scroll(function() {
// 	if (sc.scrollTop() >= 100) {
// 		nav.addClass("on");
// 	} else {
// 		nav.removeClass("on");
// 	}
// })

//移动端展开nav
// $('#navToggle').on('click', function() {
// 	$('.m_nav').addClass('open');
// })
// //关闭nav
// $('.m_nav .top .closed').on('click', function() {
// 	$('.m_nav').removeClass('open');
// })

//二级导航  移动端
// $(".m_nav .ul li").click(function() {
// 	$(this).children("div.dropdown_menu").slideToggle('slow')
// 	$(this).siblings('li').children('.dropdown_menu').slideUp('slow');
// });

//全屏滚动
$('#index_main').fullpage({
	'navigation': true,
	slidesNavigation: true,
	controlArrows: false,
	continuousHorizontal: true,
	scrollingSpeed: 1000,
	showActiveTooltip: true,
	anchors: ['hero', 'one', 'two', 'three'],
	loopHorizontal: true,
	afterLoad: function(anchorLink, index) {
		if (index == 1) {
			$('header').removeClass('on');
		}
		if (index == 2) {
			$('header').addClass('on');
			$('.section2 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
		}
		if (index == 3) {
			$('header').addClass('on');
			$('.section3 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
		}
		if (index == 4) {
			$('header').addClass('on');
			$('.section4 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
		}
	},
	onLeave: function(index, direction) {}
})

//title显示
var index = 0;
var inde = 0;
var word = document.getElementById("w").innerHTML;
var ha = document.getElementById("m").innerHTML;

function hh() {
	var type = setInterval(function() {
		document.title = word.substring(0, index++);
		if (index == word.length + 1) {
			clearInterval(type);
			index = 0;
			var ty = setInterval(function() {
				document.title = ha.substring(0, inde++);
				if (inde == ha.length + 1) {
					clearInterval(ty);
					inde = 0;
					hh();
				}
			}, 300);

		}
	}, 300);

}
setTimeout(hh, 2500);


// const img_original = document.getElementById('image/banner1.jpg');
// const img_output = document.getElementById('img_output');
// let blob;
// 
// function preview(file) {
// 	let reader = new FileReader();
// 	reader.onload = function() {
// 		img_original.src = this.result;
// 		img_original.onload = () => {
// 			console.log('图片原始宽高:', img_original.naturalWidth, img_original.naturalHeight);
// 			console.log('图片原始大小:', file.size)
// 		}
// 	};
// 	reader.readAsDataURL(file);
// }
// 
// function compress() {
// 	// 压缩到图片原始宽高的一半
// 	let w = img_original.naturalWidth / 2;
// 	let h = img_original.naturalHeight / 2;
// 
// 	let canvas = document.createElement('canvas');
// 	let ctx = canvas.getContext('2d');
// 	let anw = document.createAttribute("width");
// 	anw.nodeValue = w;
// 	let anh = document.createAttribute("height");
// 	anh.nodeValue = h;
// 	canvas.setAttributeNode(anw);
// 	canvas.setAttributeNode(anh);
// 
// 	ctx.fillRect(0, 0, w, h);
// 	ctx.drawImage(img_original, 0, 0, w, h);
// 
// 	const base64 = canvas.toDataURL('image/jpeg', 0.75); // 压缩后质量
// 	const bytes = window.atob(base64.split(',')[1]);
// 	const ab = new ArrayBuffer(bytes.length);
// 	const ia = new Uint8Array(ab);
// 	for (let i = 0; i < bytes.length; i++) {
// 		ia[i] = bytes.charCodeAt(i);
// 	}
// 	blob = new Blob([ab], {
// 		type: 'image/jpeg'
// 	});
// 
// 	console.log('压缩后的图片大小', blob.size);
// 	// 预览压缩后的图片
// 	img_output.src = base64
// }
// 
// function save() {
// 	if (blob) {
// 		let a = document.createElement('a');
// 		let event = new MouseEvent('click');
// 		a.download = Math.round(new Date() / 1000) + '.jpg';
// 		a.href = URL.createObjectURL(blob);
// 		a.dispatchEvent(event)
// 	}
// }



// window.addEventListener("scroll", (e) => {
// 	var list_innt = document.querySelector('.list_innt');
// 	if (scrollY > 0) {
// 		list_innt.classList.add("animate");
// 	} else {
// 		list_innt.classList.remove("animate");
// 	}
// })
//
