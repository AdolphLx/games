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
	"image/p1_bg.jpeg",
	"image/p2_text.jpeg",
	"image/p3_bg.jpeg",
	"image/01.png",
	"image/02.png",
	"image/03.png",
	"image/04.png",
	"image/05.png",
	"image/06.png",
	"image/07.png",
	"image/08.png",
	"image/yun.png",
	"image/yunBc.jpeg",
	"image/shu.png",
	"image/guoshi.png",
	"image/guanzi.png",
	"image/zxcbc.jpeg",
	"image/zxc01.png",
	"image/zxc02.png",
	"image/zxc03.png",
	"image/zxc04.png",
	"image/zxc05.png",
	"image/men/1.jpeg",
	"image/men/2.jpeg",
	"image/men/3.jpeg",
	"image/men/4.jpeg",
	"image/men/5.jpeg",
	"image/men/6.jpeg",
	"image/men/7.jpeg",
	"image/men/8.jpeg",
	"image/men/9.jpeg",
	"image/men/10.jpeg",
	"image/men/11.jpeg",
	"image/yu/1.jpeg",
	"image/yu/2.jpeg",
	"image/yu/3.jpeg",
	"image/yu/4.jpeg",
	"image/yu/5.jpeg",
	"image/yu/6.jpeg",
	"image/yu/7.jpeg",
	"image/yu/8.jpeg",
	"image/yu/9.jpeg",
	"image/yu/10.jpeg",
	"image/yu/11.jpeg",
	"image/yu/12.jpeg",
	"image/yu/13.jpeg",
	"image/yu/14.jpeg",
	"image/yu/15.jpeg",
	"image/yu/16.jpeg",
	"image/yu/17.jpeg",
	"image/yu/18.jpeg",
	"image/p10text.jpeg",
]

const manifest = {
	loopbg: 'mp3/bg.mp3',
	tuim: 'mp3/tuim.mp3',
	zxc: 'mp3/zxc.mp3',
	xiayu: 'mp3/xiayu.mp3',
	niao: 'mp3/niao.mp3',
};


function pixifn () {
	$('.main').append(app.view);
	loader = new PIXI.loaders.Loader();
	loader.add(img);
	PIXI.sound.add(manifest);
	loader.load(setup);
	loader.onProgress.add(function (e) {
		$('.progress').css('width', Math.round(e.progress) + '%');
		$(".loadingnum").text(Math.round(e.progress) + '%');
	});
	loader.on("progress", function(target, resource) {  
		console.log("progress:", target.progress); //加载进度  
		if(target.progress==100){
		   // sound_effect("loopbg");
			// setTimeout(e=>{
			// 	ms()
			// },1000)
		}
	});  
};
function ms(){
	var audio = document.getElementById('music1');
	document.addEventListener("WeixinJSBridgeReady", function() {
		audio.play();
	}, false);
	audio.play();
}

//播放音效
function sound_effect (name) {
	// PIXI.sound.stopAll();
	// PIXI.sound.stop(name);
	for (let key in manifest) {
	  if(name!='loopbg'){
		  PIXI.sound.stop(name);
	  }
	}
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
	bg.height = 8504;
	container.interactive = true;
	sound_effect("loopbg");
	
	borderline = new PIXI.Graphics();
	borderline.beginFill(0x2b4884)//填充
	borderline.drawRect(0,0,640,document.documentElement.clientHeight);//x,y,w,h
	borderline.endFill();
	borderline.alpha = 1;
	
	textbc = new PIXI.Graphics();
	textbc.beginFill(0xffffff)//填充
	textbc.drawRect(0,0,640,document.documentElement.clientHeight);//x,y,w,h
	textbc.endFill();
	textbc.alpha = 1;
	
	sprite = new PIXI.Sprite(
		loader.resources["image/p1_bg.jpeg"].texture
	);
	sprite.position.set(0, 0);
	sprite.zOrder=10;
	
	sprite1 = new PIXI.Sprite(
		loader.resources["image/p2_text.jpeg"].texture
	);
	sprite1.position.set(0, 0);
	sprite1.alpha = 0;
	
	sprite2 = new PIXI.Sprite(
		loader.resources["image/p3_bg.jpeg"].texture
	);
	sprite2.position.set(0, (document.documentElement.clientHeight-sprite.height)/2);
	sprite2.alpha = 0;
	
	niao01 = new PIXI.Sprite(
		loader.resources["image/01.png"].texture
	);
	niao01.position.set(320, 700);
	niao01.alpha = 0;
	
	niao02 = new PIXI.Sprite(
		loader.resources["image/02.png"].texture
	);
	niao02.position.set(350, 800);
	niao02.alpha = 0;
	
	niao03 = new PIXI.Sprite(
		loader.resources["image/03.png"].texture
	);
	niao03.position.set(375, 900);
	niao03.alpha = 0;
	
	niao04 = new PIXI.Sprite(
		loader.resources["image/04.png"].texture
	);
	niao04.position.set(340, 1000);
	niao04.alpha = 0;
	
	niao05 = new PIXI.Sprite(
		loader.resources["image/05.png"].texture
	);
	niao05.position.set(340, 1100);
	niao05.alpha = 0;
	
	niao06 = new PIXI.Sprite(
		loader.resources["image/06.png"].texture
	);
	niao06.position.set(340, 1200);
	niao06.alpha = 0;
	
	niao07 = new PIXI.Sprite(
		loader.resources["image/07.png"].texture
	);
	niao07.position.set(340, 1300);
	niao07.alpha = 0;
	
	niao08 = new PIXI.Sprite(
		loader.resources["image/08.png"].texture
	);
	niao08.position.set(340, 1400);
	niao08.alpha = 0;
	
	niao09 = new PIXI.Sprite(
		loader.resources["image/04.png"].texture
	);
	niao09.position.set(340, 1400);
	niao09.alpha = 0;
	
	yunBc = new PIXI.Sprite(
		loader.resources["image/yunBc.jpeg"].texture
	);
	yunBc.position.set(0, 2030);
	yunBc.alpha = 1;
	
	yun = new PIXI.Sprite(
		loader.resources["image/yun.png"].texture
	);
	yun.position.set(0, 2030);
	yun.alpha = 0;
	
	shu = new PIXI.Sprite(
		loader.resources["image/shu.png"].texture
	);
	shu.position.set(68, 3500);
	shu.alpha = 1;
	
	guoshi = new PIXI.Sprite(
		loader.resources["image/guoshi.png"].texture
	);
	guoshi.position.set(150, 3680);
	guoshi.alpha = 1;
	
	guanzi = new PIXI.Sprite(
		loader.resources["image/guanzi.png"].texture
	);
	guanzi.position.set(-200, 3680);
	guanzi.alpha = 1;
	guanzi.scale.x=0.3
	guanzi.scale.y=0.3
	
	zxcbc = new PIXI.Sprite(
		loader.resources["image/zxcbc.jpeg"].texture
	);
	zxcbc.position.set(0, 4000);
	zxcbc.alpha = 0;
	
	zxc01 = new PIXI.Sprite(
		loader.resources["image/zxc01.png"].texture
	);
	zxc01.position.set(0, 4000);
	zxc01.alpha = 0;
	
	zxc02 = new PIXI.Sprite(
		loader.resources["image/zxc02.png"].texture
	);
	zxc02.position.set(0, 4200);
	zxc02.alpha = 0;
	
	zxc03 = new PIXI.Sprite(
		loader.resources["image/zxc03.png"].texture
	);
	zxc03.position.set(0, 4400);
	zxc03.alpha = 0;
	
	zxc04 = new PIXI.Sprite(
		loader.resources["image/zxc04.png"].texture
	);
	zxc04.position.set(0, 4600);
	zxc04.alpha = 0;
	
	zxc05 = new PIXI.Sprite(
		loader.resources["image/zxc05.png"].texture
	);
	zxc05.position.set(0, 4800);
	zxc05.alpha = 0;
	
	var Textures = []
	for (var i = 1; i < 12; i++) {
		var Texture = loader.resources["image/men/" + i + ".jpeg"].texture;
		Textures.push(Texture);
	}
	AnimatedSprite1 = new PIXI.extras.AnimatedSprite(Textures);
	AnimatedSprite1.position.x = 0;
	AnimatedSprite1.position.y = 6800;
	AnimatedSprite1.animationSpeed = 0.08;
	AnimatedSprite1.alpha = 1;
	AnimatedSprite1.loop = false;
	
	AnimatedSprite1.interactive = true;
	AnimatedSprite1.buttonMode = true;
	AnimatedSprite1.on('pointertap', function () {
		console.log(1111)
		AnimatedSprite1.play()
		sound_effect("tuim");
	})
	
	var Textures2 = []
	for (var i = 1; i < 19; i++) {
		var Texture2 = loader.resources["image/yu/" + i + ".jpeg"].texture;
		Textures2.push(Texture2);
	}
	AnimatedSprite2 = new PIXI.extras.AnimatedSprite(Textures2);
	AnimatedSprite2.position.x = 0;
	AnimatedSprite2.position.y = 8000;
	AnimatedSprite2.animationSpeed = 0.08;
	AnimatedSprite2.alpha = 1;
	AnimatedSprite2.loop = false;
	
	AnimatedSprite2.interactive = true;
	AnimatedSprite2.buttonMode = true;
	AnimatedSprite2.on('pointertap', function () {
		console.log(1111)
		AnimatedSprite2.play()
		sound_effect("xiayu");
		setTimeout(e=>{
			p10text.x=0
		},1000)
	})
	
	p10text = new PIXI.Sprite(
		loader.resources["image/p10text.jpeg"].texture
	);
	p10text.position.set(-640, 8000);
	p10text.alpha = 0;
	p10text.interactive = true;
	p10text.buttonMode = true;
	p10text.on('pointertap', function () {
		p10text.alpha=1
	})
	
	
	//var urlPadding = "imgs/dog/",
	//act_1_animate_bg_img_arr = [];
	// for (let $e = 0; $e < 6; $e++) {
	//        act_1_animate_bg_img_arr.push(urlPadding + "dog" + $e + ".png");
	// }

	//    dog = new PIXI.extras.AnimatedSprite.fromImages(act_1_animate_bg_img_arr)


	bg.addChild(borderline,textbc,sprite,sprite1,sprite2,yunBc,
	niao01,niao02,niao03,niao04,niao05,niao06,niao07,niao08,niao09,
	yun,shu,guoshi,guanzi,zxcbc,zxc01,zxc02,zxc03,zxc04,zxc05,
	AnimatedSprite1,AnimatedSprite2,p10text
	);

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
				contentLength = 9800 - lastWidth + 640;
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
		if(scrollPro<50){
			sprite.y= 0
			sprite.alpha=1
			borderline.y= 0
			borderline.alpha=1
			sprite1.alpha=0
			textbc.alpha=0
			sprite2.alpha=0
		}
		if (0 < scrollPro && scrollPro < 300) {
			sprite.y= scrollNum(0, 200, scrollPro, 0, 200);
			sprite.alpha = scrollNum(0, 200, scrollPro, 1, 0);
			
			borderline.y= scrollNum(0, 200, scrollPro, 0, 200);
			borderline.alpha = scrollNum(0, 200, scrollPro, 1, 0);
			
			sprite2.alpha=0
			sprite1.alpha=0
			textbc.alpha=0
			niao01.alpha=0
			
		}
		if(300 < scrollPro && scrollPro < 600){
			sprite1.y= scrollNum(0, 500, scrollPro, 0, 500);
			sprite1.alpha = scrollNum(0, 500, scrollPro, 0, 1);
			
			textbc.y= scrollNum(0, 500, scrollPro, 0, 500);
			textbc.alpha = scrollNum(0, 500, scrollPro, 0, 1);
			
			sprite2.alpha=0
			niao01.alpha=0
			
		}
		if(600 < scrollPro && scrollPro < 900){
			sprite1.alpha = 0
			sprite2.y = scrollNum(0, 500, scrollPro, 0, 500);
			sprite2.alpha = scrollNum(0, 800, scrollPro, 0, 1);
			niao01.y = scrollNum(0, 600, scrollPro, 0, 600);
			niao01.alpha = scrollNum(0, 500, scrollPro, 0, 1);
			niao02.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			sound_effect("niao");
		}
		if( 900< scrollPro && scrollPro < 1000){
			niao02.alpha = 1;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao02.y= scrollNum(900, 1000, scrollPro, 1100, 1200);
		}
		if( 1000< scrollPro && scrollPro < 1100){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 1;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao03.y= scrollNum(1000, 1100, scrollPro, 1200, 1300);
		}
		if( 1100< scrollPro && scrollPro < 1200){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 1;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao04.y= scrollNum(1100, 1200, scrollPro, 1300, 1400);
		}
		if( 1200< scrollPro && scrollPro < 1300){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 5;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao05.y= scrollNum(1200, 1300, scrollPro, 1400, 1500);
		}
		if( 1300< scrollPro && scrollPro < 1400){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 1;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao06.y= scrollNum(1300, 1400, scrollPro, 1500, 1600);
		}
		if( 1400< scrollPro && scrollPro < 1500){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 1;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao07.y= scrollNum(1400, 1500, scrollPro, 1600, 1700);
		}
		if( 1500< scrollPro && scrollPro < 1600){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 1;
			niao09.alpha = 0;
			niao08.y= scrollNum(1500, 1600, scrollPro, 1700, 1800);
		}
		if( 1600< scrollPro && scrollPro < 1700){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 1;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao07.y= scrollNum(1600, 1700, scrollPro, 1800, 1900);
		}
		if( 1700< scrollPro && scrollPro < 1800){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 1;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao06.y= scrollNum(1700, 1800, scrollPro, 1900, 2000);
			yun.alpha = scrollNum(1700, 1800, scrollPro, 0, 0.5);
		}
		if( 1800< scrollPro && scrollPro < 1900){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 1;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao05.y= scrollNum(1800, 1900, scrollPro, 2000, 2100);
			yun.alpha = scrollNum(1800, 1900, scrollPro, 0.5, 1);
		}
		if( 1900< scrollPro && scrollPro < 2000){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 1;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao04.y= scrollNum(1900, 2000, scrollPro, 2100, 2200);
		}
		if( 2000< scrollPro && scrollPro < 2100){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 1;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao05.y= scrollNum(2000, 2100, scrollPro, 2200, 2300);
		}
		if( 2100< scrollPro && scrollPro < 2200){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 1;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao06.y= scrollNum(2100, 2200, scrollPro, 2300, 2400);
			yunBc.y= scrollNum(3800, 3900, scrollPro, 3800, 3900);
		}
		if( 2200< scrollPro && scrollPro < 2300){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 1;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao07.y= scrollNum(2200, 2300, scrollPro, 2400, 2500);
			yunBc.y= scrollNum(3800, 3900, scrollPro, 3800, 3900);
		}
		if( 2300< scrollPro && scrollPro < 2400){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 1;
			niao09.alpha = 0;
			niao08.y= scrollNum(2300, 2400, scrollPro, 2500, 2600);
			yunBc.y= scrollNum(3800, 3900, scrollPro, 3800, 3900);
		}
		if( 2400< scrollPro && scrollPro < 2500){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 1;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao07.y= scrollNum(2400, 2500, scrollPro, 2600, 2700);
			yunBc.y= scrollNum(3800, 3900, scrollPro, 3800, 3900);
		}
		if( 2500< scrollPro && scrollPro < 2600){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 1;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao06.y= scrollNum(2500, 2600, scrollPro, 2700, 2800);
			yunBc.y= scrollNum(3800, 3900, scrollPro, 3800, 3900);
		}
		if( 2600< scrollPro && scrollPro < 2700){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 1;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao05.y= scrollNum(2600, 2700, scrollPro, 2800, 2900);
			yunBc.y= scrollNum(3800, 3900, scrollPro, 3800, 3900);
		}
		if( 2700< scrollPro && scrollPro < 2800){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 1;
			niao09.y= scrollNum(2700, 2800, scrollPro, 2900, 3400);
			yunBc.y= scrollNum(3800, 3900, scrollPro, 3800, 3900);
		}
		if( 2800< scrollPro && scrollPro < 3000){
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 1;
			niao09.y= scrollNum(3100, 3200, scrollPro, 3800, 3900);
			shu.y= scrollNum(3800, 3900, scrollPro, 4400, 4500);
			yunBc.y= scrollNum(3800, 3900, scrollPro, 3800, 3900);
			guoshi.y= scrollNum(3600, 3700, scrollPro, 4400, 4500);
			guanzi.y= scrollNum(3650, 3750, scrollPro, 4400, 4500);
		}
		
		if( 3000< scrollPro && scrollPro < 3200){
			niao09.y= scrollNum(3100, 3200, scrollPro, 3800, 3900);
			shu.y= scrollNum(3800, 3900, scrollPro, 4400, 4500);
			yunBc.y= scrollNum(3800, 3900, scrollPro, 3800, 3900);
			guoshi.y= scrollNum(3600, 3700, scrollPro, 4400, 4500);
			guanzi.y= scrollNum(3650, 3750, scrollPro, 4400, 4500);
			niao02.alpha = 0;
			niao01.alpha = 0;
			niao03.alpha = 1;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao03.y= scrollNum(3000, 3100, scrollPro, 3800, 3900);
		}
		if( 3200< scrollPro && scrollPro < 3500){
			niao09.y= scrollNum(3100, 3200, scrollPro, 3800, 3900);
			shu.y= scrollNum(3800, 3900, scrollPro, 4400, 4500);
			yunBc.y= scrollNum(3800, 3900, scrollPro, 3800, 3900);
			guoshi.y= scrollNum(3600, 3700, scrollPro, 4400, 4500);
			guanzi.y= scrollNum(3650, 3750, scrollPro, 4400, 4500);
			niao02.alpha = 0;
			niao01.alpha = 1;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao01.y= scrollNum(2950, 3050, scrollPro, 3800, 3900);
		}
		if( 3500< scrollPro && scrollPro < 4200){
			niao09.y= scrollNum(3100, 3200, scrollPro, 3800, 3900);
			shu.y= scrollNum(3800, 3900, scrollPro, 4400, 4500);
			yunBc.y= scrollNum(3800, 3900, scrollPro, 3800, 3900);
			guoshi.y= scrollNum(3600, 3700, scrollPro, 4400, 4500);
			guanzi.y= scrollNum(3650, 3750, scrollPro, 4400, 4500);
			niao02.alpha = 0;
			niao01.alpha = 1;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao01.y= scrollNum(2950, 3050, scrollPro, 3800, 3900);
			yunBc.x= scrollNum(3800, 3900, scrollPro, 300, 400);
			shu.x= scrollNum(3800, 3900, scrollPro, 300, 400);
			niao01.x= scrollNum(3800, 3900, scrollPro, 550, 650);
			guanzi.x= scrollNum(3800, 3900, scrollPro, -10, 0);
			guanzi.alpha = 1;
			guoshi.alpha = 1;
		}
		if( 4200< scrollPro && scrollPro < 4500){
			niao09.y= scrollNum(3100, 3200, scrollPro, 3800, 3900);
			shu.y= scrollNum(3800, 3900, scrollPro, 4400, 4500);
			yunBc.y= scrollNum(3800, 3900, scrollPro, 3800, 3900);
			guoshi.y= scrollNum(3600, 3700, scrollPro, 4400, 4500);
			guanzi.y= scrollNum(3600, 3700, scrollPro, 4400, 4500);
			niao02.alpha = 0;
			niao01.alpha = 1;
			niao03.alpha = 0;
			niao04.alpha = 0;
			niao05.alpha = 0;
			niao06.alpha = 0;
			niao07.alpha = 0;
			niao08.alpha = 0;
			niao09.alpha = 0;
			niao01.y= scrollNum(2950, 3050, scrollPro, 3800, 3900);
			yunBc.x= scrollNum(3800, 3900, scrollPro, 300, 400);
			shu.x= scrollNum(3800, 3900, scrollPro, 300, 400);
			niao01.x= scrollNum(3800, 3900, scrollPro, 550, 650);
			guanzi.x= scrollNum(3800, 3900, scrollPro, -10, 0);
			guanzi.alpha = 0;
			guoshi.alpha = 0;
			zxcbc.y= scrollNum(4400, 4500, scrollPro, 4400, 4500);
			zxcbc.alpha = scrollNum(4200, 4500, scrollPro, 0, 1);
			
			zxc01.y= scrollNum(4400, 4500, scrollPro, 4400, 4500);
			zxc01.alpha = scrollNum(4200, 4500, scrollPro, 0, 1);
			zxc02.alpha = 0
			zxc03.alpha = 0
			zxc04.alpha = 0
			zxc05.alpha = 0
			sound_effect("zxc");
		}
		if(4500< scrollPro && scrollPro < 4600){
			zxc02.y= scrollNum(4500, 4600, scrollPro, 4700, 4800);
			zxc01.alpha = 0
			zxc02.alpha = 1
			zxc03.alpha = 0
			zxc04.alpha = 0
			zxc05.alpha = 0
		}
		if(4600< scrollPro && scrollPro < 4700){
			zxc03.y= scrollNum(4600, 4700, scrollPro, 4800, 4900);
			zxc01.alpha = 0
			zxc02.alpha = 0
			zxc03.alpha = 1
			zxc04.alpha = 0
			zxc05.alpha = 0
		}
		if(4700< scrollPro && scrollPro < 4800){
			zxc04.y= scrollNum(4700, 4800, scrollPro, 4900, 5000);
			zxc01.alpha = 0
			zxc02.alpha = 0
			zxc03.alpha = 0
			zxc04.alpha = 1
			zxc05.alpha = 0
		}
		if(4800< scrollPro && scrollPro < 4900){
			zxc05.y= scrollNum(4800, 4900, scrollPro, 5000, 5100);
			zxc01.alpha = 0
			zxc02.alpha = 0
			zxc03.alpha = 0
			zxc04.alpha = 0
			zxc05.alpha = 1
			PIXI.sound.stop('zxc');
		}
		
		
	console.log(scrollPro)

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
