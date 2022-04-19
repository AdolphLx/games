var shareData, scrollDirection = "top",
	scrollPro = 0,
	wrap = $('.main'),
	ww = window.innerWidth,
	wh = window.innerHeight,
	shayuPlay = false,
	loader, container;
$(function () {
	// loading图片加载
	var loadingImg = new Image();
	loadingImg.src = "image/loading.png";
	loadingImg.onload = function () {
		// pixi初始化
		pixifn();
	}
});

var app = new PIXI.Application(640, 1040, {
	backgroundColor: '0xfcffff'
});

var img = [
	"image/p1_bg.png",
	"image/p2_text.jpeg",
	"image/p3_bg.jpeg",
	"image/01.png",
	"image/02.png",
	"image/03.png",
	"image/04.png",
]

// const manifest = {
// 	loop1: 'mp3/bicycle.mp3',
// 	loopbg: 'mp3/environment.mp3'
// };


function pixifn () {
	$('.main').append(app.view);
	loader = new PIXI.loaders.Loader();
	loader.add(img);
	// PIXI.sound.add(manifest);
	loader.load(setup);
	loader.onProgress.add(function (e) {
		$('.progress').css('width', Math.round(e.progress) + '%');
		$(".loadingnum").text(Math.round(e.progress) + '%');
	});
	loader.on("progress", function (target, resource) {
		console.log("progress:", target.progress); //加载进度  
		if (target.progress == 100) {
			// sound_effect("loopbg");
			var audio = document.getElementById('music1');
			audio.play();
			document.addEventListener("WeixinJSBridgeReady", function () {
				audio.play();
			}, false);
		}
	});
};

//播放音效
function sound_effect (name) {
	PIXI.sound.stopAll();
	// PIXI.sound.stop(name);
	// for (let key in manifest) {
	//   if(name!='loopbg'){
	// 	  PIXI.sound.stop(name);
	//   }
	// }
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


function setup () {
	container = new PIXI.Container();
	var bg = new PIXI.Container();
	bg.x = 0;
	bg.y = 0;
	bg.height = 5504;
	container.interactive = true;
	// sound_effect("loopbg");

	const borderline = new PIXI.Graphics();
	borderline.beginFill(0x2b4884)//填充
	borderline.drawRect(0, 0, 640, document.documentElement.clientHeight);//x,y,w,h
	borderline.endFill();

	sprite = new PIXI.Sprite(
		loader.resources["image/p1_bg.png"].texture
	);
	sprite.position.set(0, (document.documentElement.clientHeight - sprite.height) / 2);
	sprite.zOrder = 10;

	sprite1 = new PIXI.Sprite(
		loader.resources["image/p2_text.jpeg"].texture
	);
	sprite1.position.set(0, 0);
	sprite1.alpha = 0;

	sprite2 = new PIXI.Sprite(
		loader.resources["image/p3_bg.jpeg"].texture
	);
	sprite2.position.set(0, 1500);
	sprite2.alpha = 0;

	niao01 = new PIXI.Sprite(
		loader.resources["image/01.png"].texture
	);
	niao01.position.set(325, 1600);
	niao01.alpha = 0;

	niao02 = new PIXI.Sprite(
		loader.resources["image/02.png"].texture
	);
	niao02.position.set(350, 1700);
	niao02.alpha = 0;

	niao03 = new PIXI.Sprite(
		loader.resources["image/03.png"].texture
	);
	niao03.position.set(375, 1800);
	niao03.alpha = 0;

	niao04 = new PIXI.Sprite(
		loader.resources["image/04.png"].texture
	);
	niao04.position.set(340, 1900);
	niao04.alpha = 0;


	//var urlPadding = "imgs/dog/",
	//act_1_animate_bg_img_arr = [];
	// for (let $e = 0; $e < 6; $e++) {
	//        act_1_animate_bg_img_arr.push(urlPadding + "dog" + $e + ".png");
	// }

	//    dog = new PIXI.extras.AnimatedSprite.fromImages(act_1_animate_bg_img_arr)


	bg.addChild(borderline, sprite, sprite1, sprite2, niao01, niao02, niao03, niao04);

	container.addChild(bg);

	app.stage.addChild(container);
	setTimeout(function () {
		$(".loadwrap").fadeOut(600);
	}, 10);
	scrollBegin();
	// scroller.setDimensions(app.view.width, app.view.height, 5504,app.view.width );
	changeScene();

}
// 横竖屏旋转
function changeScene () {
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
function h () {
	setTimeout(function () {
		ww = $(window).width();
		wh = $(window).height();
		tarW = ww;
		tarH = tarW * iniH / iniW;
		if (!(typeof scroller == "undefined")) {
			app.renderer.resize(wh, ww);
			setTimeout(function () {
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
function v () {
	screenOrientation = "horizontal";
	setTimeout(function () {
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
			setTimeout(function () {
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
function scrollNum (minNum, maxNum, top, start, end) {
	return start + ((top - minNum) / (maxNum - minNum) * (end - start));
}
var playing = true

function scrollBegin () {
	scroller = new Scroller(function (left, top, zoom) {
		if (scrollDirection == "top") {
			container.y = -top;
		}
		if (scrollDirection == "left") {
			container.y = -left;
		}
		scrollPro = left > top ? left : top;
		if (scrollPro < 100) {
			sprite.y = 0
			sprite.alpha = 1
			sprite1.alpha = 0
		}
		if (0 < scrollPro && scrollPro < 550) {
			sprite.y = scrollNum(0, 500, scrollPro, 0, 500);
			sprite.alpha = scrollNum(0, 500, scrollPro, 1, 0);

			sprite1.y = scrollNum(0, 500, scrollPro, 0, 500);
			sprite1.alpha = scrollNum(0, 500, scrollPro, 0, 1);

		}
		if (550 < scrollPro && scrollPro < 1400) {
			sprite2.alpha = scrollNum(700, 1400, scrollPro, 0, 1);
			niao01.alpha = scrollNum(700, 1400, scrollPro, 0, 1);
		}
		if (1400 < scrollPro && scrollPro < 1500) {
			niao01.alpha = 1;
			niao02.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			// niao01.y= scrollNum(1400, 1500, scrollPro, 1400, 1500);
		}
		if (1500 < scrollPro && scrollPro < 1600) {
			niao02.alpha = 1;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao02.y = scrollNum(1500, 1600, scrollPro, 1600, 1700);
		}
		if (1600 < scrollPro && scrollPro < 1700) {
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 1;
			niao04.alpha = 0;
			niao03.y = scrollNum(1600, 1700, scrollPro, 1700, 1800);
		}
		if (1700 < scrollPro && scrollPro < 1800) {
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 1;
			niao04.y = scrollNum(1700, 1800, scrollPro, 1800, 1900);
		}



		console.log(scrollPro);

	}, {
		zooming: true,
		bouncing: false
	});

	var mousedown = false;
	document.addEventListener("touchstart", function (e) {
		scroller.doTouchStart(e.touches, e.timeStamp);
		mousedown = true;
	}, false);
	document.addEventListener("touchmove", function (e) {
		if (!mousedown) {
			return;
		}
		scroller.doTouchMove(e.touches, e.timeStamp);
		mousedown = true;
	}, false);
	document.addEventListener("touchend", function (e) {
		if (!mousedown) {
			return;
		}
		scroller.doTouchEnd(e.timeStamp);
		mousedown = false;
	}, false);

}
