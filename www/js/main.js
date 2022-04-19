var shareData, scrollDirection = "top",
	scrollPro = 0,
	wrap = $('.main'),
	ww = window.innerWidth,
	wh = window.innerHeight,
	shayuPlay = false,
	loader, container;
$(function() {
	// loading图片加载
	var loadingImg = new Image();
	loadingImg.src = "image/loading.png";
	loadingImg.onload = function() {
		// pixi初始化
		pixifn();
	}
});

var app = new PIXI.Application(640, 1040, {
	backgroundColor: '0xfcffff'
});

var img = [
	"image/bg/bg1.png",
	"image/bg/bg2.png",
	"image/bg/bg3.png",
	"image/bg/bg4.png",
	"image/bg/bg5.png",
	"image/afix.png",
	"image/shuiliu.png",
	"image/hehua.png",
	"image/shuicao.png",
	"image/qipao.png",
	"image/photo1.png",
	"image/photo2.png",
	"image/photo3.png",
	"image/car.png",
	"image/lang1.png",
	"image/lang2.png",
	"image/lang3.png",
	"image/qiao.png",
	"image/girl1.png",
	"image/girl2.png",
	"image/xuanwo.png",
	"image/ermo.png",
	"image/dnf.png",
	"image/run1.png",
	"image/run2.png",
	"image/run3.png",
	"image/run4.png",
	"image/run5.png",
	"image/run6.png",
]

const manifest = {
	loop1: 'mp3/bicycle.mp3',
	loop2: 'mp3/environment.mp3'
};


function pixifn() {
	$('.main').append(app.view);
	loader = new PIXI.loaders.Loader();
	loader.add(img);
	PIXI.sound.add(manifest);
	loader.load(setup);
	loader.onProgress.add(function(e) {
		$('.progress').css('width', Math.round(e.progress) + '%');
		$(".loadingnum").text(Math.round(e.progress) + '%');
	});
// 	loader.on("progress", function(target, resource) {  
// 		console.log("progress:", target.progress); //加载进度  
// 	});  
// 	loader.once('complete', function(target, resource) {  
// 		createSprite("run",6);
// 	});  
	
};

//播放音效
function sound_effect(name) {
	PIXI.sound.stopAll();
	// PIXI.sound.stop(name);
	PIXI.sound.play(name);
}

// 创建序列帧动画
// var Container_s=new PIXI.Container();
// app.stage.addChild(Container_s);  
// function createSprite(name, num) {
// 	var Textures = [],
// 		i, AnimatedSpriteInstance;
// 	i = 1;
// 	for (; i < num; i++) {
// 		var Texture = PIXI.Texture.fromImage(name + i + '.png');
// 		Textures.push(Texture);
// 	}
// 	AnimatedSprite1 = new PIXI.extras.AnimatedSprite(Textures);
// 	AnimatedSprite1.position.x = 100;  
//     AnimatedSprite1.position.y = 100;
// 	AnimatedSprite1.zIndex=9999
// 	AnimatedSprite1.animationSpeed = parseFloat((20 / 120).toFixed(2));  
//     AnimatedSprite1.play();  
//     Container_s.addChild(AnimatedSprite1);  
// }


function setup() {
	container = new PIXI.Container();
	var bg = new PIXI.Container();
	bg.x = 0;
	bg.y = 0;
	bg.height = 5504;
	container.interactive = true;




	var sprite = new PIXI.Sprite(
		loader.resources["image/bg/bg1.png"].texture
	);
	var sprite2 = new PIXI.Sprite(
		loader.resources["image/bg/bg2.png"].texture
	);
	sprite2.position.set(0, 710);
	var sprite3 = new PIXI.Sprite(
		loader.resources["image/bg/bg3.png"].texture
	);
	sprite3.position.set(0, 1673);
	var sprite4 = new PIXI.Sprite(
		loader.resources["image/bg/bg4.png"].texture
	);
	sprite4.position.set(0, 3493);
	sprite5 = new PIXI.Sprite(
		loader.resources["image/bg/bg5.png"].texture
	);
	sprite5.position.set(0, 4884);

	// 遮罩背景
	afix = new PIXI.Sprite(
		loader.resources["image/afix.png"].texture
	);
	afix.position.set(0, 689);

	afix1 = new PIXI.Sprite(
		loader.resources["image/afix.png"].texture
	);
	afix1.position.set(0, 689);
	// 水流
	shuiliu = new PIXI.Sprite(
		loader.resources["image/shuiliu.png"].texture
	);
	shuiliu.position.set(0, 709);
	// 小女孩1
	girl1 = new PIXI.Sprite(
		loader.resources["image/girl1.png"].texture
	);
	girl1.position.set(-200, 550);

	// // 小女孩2
	girl2 = new PIXI.Sprite(
		loader.resources["image/girl2.png"].texture
	);
	girl2.position.set(172, 982);
	girl2.alpha = 0;

	// 	兼容鼠标和触摸屏的共同触发：
	// 	pointercancel：触发系统cancels键
	// 	pointerdown：触发按下
	// 	pointermove：触发移动
	// 	pointerout：触发移出
	// 	pointerover：触发经过
	// 	pointertap：触发点击
	// 	pointerup：触发松开
	// 	要注册交互事件前，一定要把显示对象的interactive和buttonMode属性设为true。

	girl2.interactive = true;
	girl2.buttonMode = true;
	girl2.on('pointertap', function() {
		console.log(666666666666666666666);
		sound_effect("loop2")
	})
	// 荷花
	hehua = new PIXI.Sprite(
		loader.resources["image/hehua.png"].texture
	);
	hehua.position.set(352, 566);

	// 水草
	shuicao = new PIXI.Sprite(
		loader.resources["image/shuicao.png"].texture
	);
	shuicao.position.set(-110, 2429);
	qipao = new PIXI.Sprite(
		loader.resources["image/qipao.png"].texture
	);
	qipao.position.set(140, 2191);
	// 相片1
	photo1 = new PIXI.Sprite(
		loader.resources["image/photo1.png"].texture
	);
	photo1.position.set(29, 3173);
	photo1.alpha = 0;
	// 相片2
	photo2 = new PIXI.Sprite(
		loader.resources["image/photo2.png"].texture
	);
	photo2.alpha = 0;
	photo2.position.set(130, 3361);
	// 相片3
	photo3 = new PIXI.Sprite(
		loader.resources["image/photo3.png"].texture
	);
	photo3.alpha = 0;
	photo3.position.set(220, 3552);
	// 救护车
	car = new PIXI.Sprite(
		loader.resources["image/car.png"].texture
	);
	car.position.set(-300, 4048);
	qiao = new PIXI.Sprite(
		loader.resources["image/qiao.png"].texture
	);
	qiao.position.set(0, 4214);
	// 海浪
	lang1 = new PIXI.Sprite(
		loader.resources["image/lang1.png"].texture
	);
	lang1.position.set(0, 4145);
	lang1.alpha = 0;
	lang2 = new PIXI.Sprite(
		loader.resources["image/lang2.png"].texture
	);
	lang2.alpha = 0;
	lang2.position.set(0, 3809);
	lang3 = new PIXI.Sprite(
		loader.resources["image/lang3.png"].texture
	);
	lang1.alpha = 3;
	lang3.position.set(0, 4109);


	//var urlPadding = "imgs/dog/",
	//act_1_animate_bg_img_arr = [];
	// for (let $e = 0; $e < 6; $e++) {
	//        act_1_animate_bg_img_arr.push(urlPadding + "dog" + $e + ".png");
	// }

	//    dog = new PIXI.extras.AnimatedSprite.fromImages(act_1_animate_bg_img_arr)

	xuanwo = new PIXI.Sprite(
		loader.resources["image/xuanwo.png"].texture
	);

	xuanwo.anchor.set(0.5, 0.5); //设置图片中心点，根据中心点旋转
	xuanwo.scale.set(0.4, 0.4);
	xuanwo.x = 329;
	xuanwo.y = 1967;
	// 恶魔
	ermo = new PIXI.Sprite(
		loader.resources["image/ermo.png"].texture
	);

	ermo.anchor.set(0.5, 0.5);
	ermo.scale.set(0.4, 0.4);
	ermo.alpha = 0;
	ermo.x = 339;
	ermo.y = 1033;
	
	//自行车
	var Textures = []
	for (var i=1; i < 7; i++) {
		var Texture = loader.resources["image/run"+i+".png"].texture;
		Textures.push(Texture);
	}
	AnimatedSprite1 = new PIXI.extras.AnimatedSprite(Textures);
	AnimatedSprite1.position.x = -600;  
	AnimatedSprite1.position.y = 500;
	AnimatedSprite1.animationSpeed = 0.1;  
	AnimatedSprite1.alpha = 1;
	
	
	
	bg.addChild(sprite, sprite2, sprite3, sprite4, sprite5, shuiliu, girl1, hehua, afix, afix1, shuicao, qipao, photo1,
		photo2, photo3, qiao, car, lang1, lang2, lang3, xuanwo, ermo, girl2,AnimatedSprite1);

	container.addChild(bg);

	app.stage.addChild(container);
	setTimeout(function() {
		$(".loadwrap").fadeOut(600);
	}, 10);
	scrollBegin();
	// scroller.setDimensions(app.view.width, app.view.height, 5504,app.view.width );
	changeScene();

}
// 横竖屏旋转
function changeScene() {
	iniW = 640,
		iniH = 1040,
		tarW = 0,
		tarH = 0;
	// ww = $(window).width();
	// wh = $(window).height();
	wh = $(window).width();
	ww = $(window).height();
	if (window.orientation === 90 || window.orientation === -90) {
		// 横屏 浏览器的宽度大于高度
		h();
	}
	if (window.orientation === 180 || window.orientation === 0) {
		// 竖屏 浏览器的宽度小于高度
		v();
	}
}

// 横屏
function h() {
	setTimeout(function() {
		ww = $(window).width();
		wh = $(window).height();
		tarW = ww;
		tarH = tarW * iniH / iniW;
		if (!(typeof scroller == "undefined")) {
			app.renderer.resize(wh, ww);
			setTimeout(function() {
				scrollDirection = "left";
				lastWidth = ww;
				contentLength = 5504 - 499;
				scroller.setDimensions(app.view.width, app.view.height, contentLength, app.view.height);
				scroller.scrollTo(scrollPro, 0, false);

			}, 200);
		}
	}, 300);
}
// 竖屏
function v() {
	screenOrientation = "horizontal";
	setTimeout(function() {
		ww = $(window).width();
		wh = $(window).height();
		tarW = wh;
		tarH = tarW * iniH / iniW;
		wrap.css({
			'width': ww + 'px',
			'height': wh + 'px'
		});
		if (!(typeof scroller == "undefined")) {
			app.renderer.resize(ww, wh);
			setTimeout(function() {
				scrollDirection = "top";
				lastWidth = wh;
				console.log(wh)
				contentLength = 6592 - lastWidth + 640;
				console.log(contentLength);
				scroller.setDimensions(app.view.width, app.view.height, app.view.width, contentLength);
				scroller.scrollTo(scrollPro, 0, false);
				// scroller.scrollTo(0,scrollPro,false);

			}, 200);
		}
	}, 300);
}
// 区间最小值, 区间最大值, top, 初始位置, 终点, 速度, 方向
function scrollNum(minNum, maxNum, top, start, end) {
	return start + ((top - minNum) / (maxNum - minNum) * (end - start));
}
var playing = true

function scrollBegin() {
	scroller = new Scroller(function(left, top, zoom) {
		if (scrollDirection == "top") {
			container.y = -top;
		}
		if (scrollDirection == "left") {
			container.y = -left;
		}
		scrollPro = left > top ? left : top;
		if(0 < scrollPro && scrollPro < 224){
			AnimatedSprite1.play();
			AnimatedSprite1.x = scrollNum(0, 224, scrollPro, -600, 200);
		}
		
		if (224 < scrollPro && scrollPro < 465) {
            AnimatedSprite1.stop();
			// TweenMax.to( girl1,1,{alpha:1,ease:Sine.easeOut,delay:2})
			girl1.x = scrollNum(224, 465, scrollPro, -200, 187);
			playing = true
		}
		if (550 < scrollPro && scrollPro < 982) {
			if (playing) {
				sound_effect("loop1")
				playing = false
			}

			girl1.y = scrollNum(550, 982, scrollPro, 550, 980);
			girl1.alpha = scrollNum(550, 982, scrollPro, 1, 0);
		}
		if (scrollPro < 960) {
			girl2.alpha = 0;
		}
		if (960 < scrollPro && scrollPro < 1903) {
			girl2.alpha = scrollNum(960, 1003, scrollPro, 0, 1);
			// girl2.alpha =1;
			girl2.y = scrollNum(960, 1903, scrollPro, 1171, 1903);
			qipao.y = scrollNum(960, 1903, scrollPro, 2192, 1703);
		}
		if (scrollPro < 654) {
			ermo.alpha = 0;
		}
		if (654 < scrollPro && scrollPro < 1251) {
			ermo.alpha = scrollNum(654, 1051, scrollPro, 0, 1);
			ermo.scale.x = scrollNum(654, 1051, scrollPro, 0.4, 1);
			ermo.scale.y = scrollNum(654, 1051, scrollPro, 0.4, 1);
		}
		if (scrollPro < 2656) {
			photo1.alpha = 0;
			photo2.alpha = 0;
			photo3.alpha = 0;
		}
		if (2656 < scrollPro && scrollPro < 3004) {
			photo1.alpha = scrollNum(2656, 2984, scrollPro, 0, 1);

			photo1.x = scrollNum(2656, 3004, scrollPro, 190, 29);
			photo1.y = scrollNum(2656, 3004, scrollPro, 3228, 3173);
		}
		if (2828 < scrollPro && scrollPro < 3104) {
			photo2.alpha = scrollNum(2828, 3104, scrollPro, 0, 1);

			photo2.x = scrollNum(2828, 3104, scrollPro, 390, 130);
			photo2.y = scrollNum(2828, 3104, scrollPro, 3638, 3361);
		}
		if (2928 < scrollPro && scrollPro < 3204) {

			photo3.alpha = scrollNum(2928, 3204, scrollPro, 0, 1);
			photo3.x = scrollNum(2928, 3204, scrollPro, 390, 220);
			photo3.y = scrollNum(2928, 3204, scrollPro, 3638, 3552);
		}
		if (3162 < scrollPro && scrollPro < 3653) {

			car.x = scrollNum(3162, 3653, scrollPro, -380, 688);
		}
		if (scrollPro < 3362) {
			lang1.alpha = 0;
		}
		if (3062 < scrollPro && scrollPro < 3409) {

			lang1.alpha = scrollNum(3062, 3309, scrollPro, 0, 1);
			lang2.alpha = scrollNum(3162, 3309, scrollPro, 0, 1);
			lang3.alpha = scrollNum(3062, 3309, scrollPro, 0, 1);
			lang1.y = scrollNum(3062, 3309, scrollPro, 4862, 4245);
			lang2.y = scrollNum(3162, 3309, scrollPro, 4962, 4155);
			lang3.y = scrollNum(3062, 3309, scrollPro, 4862, 4209);
		}
		if (scrollPro < 1590) {
			xuanwo.alpha = 0;
		}
		if (1306 < scrollPro && scrollPro < 2264) {
			xuanwo.alpha = scrollNum(1306, 1923, scrollPro, 0, 1);
			xuanwo.rotation = scrollNum(1338, 2164, scrollPro, 0, 8);
			xuanwo.scale.x = scrollNum(1338, 2064, scrollPro, 0, 1);
			xuanwo.scale.y = scrollNum(1338, 2064, scrollPro, 0, 1);
		}
		if (1726 < scrollPro && scrollPro < 1953) {
			girl2.alpha = scrollNum(1726, 1953, scrollPro, 1, 0);
		}
		if (scrollPro > 2264) {
			xuanwo.alpha = 0
		}
		if (10 < scrollPro && scrollPro < 4368) {
			var a = scrollPro - 4368 - 10;
		}
		console.log(scrollPro);

	}, {
		zooming: true,
		bouncing: false
	});

	var mousedown = false;
	document.addEventListener("touchstart", function(e) {
		scroller.doTouchStart(e.touches, e.timeStamp);
		mousedown = true;
	}, false);
	document.addEventListener("touchmove", function(e) {
		if (!mousedown) {
			return;
		}
		scroller.doTouchMove(e.touches, e.timeStamp);
		mousedown = true;
	}, false);
	document.addEventListener("touchend", function(e) {
		if (!mousedown) {
			return;
		}
		scroller.doTouchEnd(e.timeStamp);
		mousedown = false;
	}, false);

}
