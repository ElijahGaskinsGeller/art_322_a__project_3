(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjBAIIAAgPIGDAAIAAAPg");
	this.shape.setTransform(20.925,0.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjBASIAAgjIGDAAIAAAjg");
	this.shape_1.setTransform(19.425,1.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjBAxIAAhhIGDAAIAABhg");
	this.shape_2.setTransform(19.425,4.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjBBZIAAixIGDAAIAACxg");
	this.shape_3.setTransform(19.425,8.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjBB+IAAj7IGDAAIAAD7g");
	this.shape_4.setTransform(19.425,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjBCiIAAlDIGDAAIAAFDg");
	this.shape_5.setTransform(19.425,16.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjBCtIAAlZIGDAAIAAFZg");
	this.shape_6.setTransform(19.425,17.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjBDCIAAmDIGDAAIAAGDg");
	this.shape_7.setTransform(19.425,19.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_6}]},3).to({state:[{t:this.shape_7}]},3).wait(3));

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjBDCIAAmDIGDAAIAAGDg");
	this.shape_8.setTransform(19.425,19.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.4,38.9);


(lib.ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AF+AAQAACehwBwQhwBwieAAQidAAhwhwQhwhwAAieQAAidBwhwQBwhwCdAAQCeAABwBwQBwBwAACdg");
	this.shape.setTransform(38.2,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkNEOQhwhwAAieQAAidBwhwQBwhwCdAAQCeAABwBwQBwBwAACdQAACehwBwQhwBwieAAQidAAhwhwg");
	this.shape_1.setTransform(38.2,38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-1,-1,78.4,78.4), null);


(lib.page = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// boxes
	this.box_38 = new lib.box();
	this.box_38.name = "box_38";
	this.box_38.setTransform(311.75,511.9,1,1,0,0,0,19.4,19.4);

	this.box_37 = new lib.box();
	this.box_37.name = "box_37";
	this.box_37.setTransform(850.55,576.2,1,1,0,0,0,19.4,19.4);

	this.box_36 = new lib.box();
	this.box_36.name = "box_36";
	this.box_36.setTransform(967.1,703.65,1,1,0,0,0,19.4,19.4);

	this.box_35 = new lib.box();
	this.box_35.name = "box_35";
	this.box_35.setTransform(391.55,703.65,1,1,0,0,0,19.4,19.4);

	this.box_34 = new lib.box();
	this.box_34.name = "box_34";
	this.box_34.setTransform(202.35,615.05,1,1,0,0,0,19.4,19.4);

	this.box_33 = new lib.box();
	this.box_33.name = "box_33";
	this.box_33.setTransform(124.65,703.65,1,1,0,0,0,19.4,19.4);

	this.box_32 = new lib.box();
	this.box_32.name = "box_32";
	this.box_32.setTransform(672.7,296.4,1,1,0,0,0,19.4,19.4);

	this.box_31 = new lib.box();
	this.box_31.name = "box_31";
	this.box_31.setTransform(824.25,390.4,1,1,0,0,0,19.4,19.4);

	this.box_30 = new lib.box();
	this.box_30.name = "box_30";
	this.box_30.setTransform(928.25,473.05,1,1,0,0,0,19.4,19.4);

	this.box_29 = new lib.box();
	this.box_29.name = "box_29";
	this.box_29.setTransform(741.6,608.4,1,1,0,0,0,19.4,19.4);

	this.box_28 = new lib.box();
	this.box_28.name = "box_28";
	this.box_28.setTransform(503.5,683.6,1,1,0,0,0,19.4,19.4);

	this.box_27 = new lib.box();
	this.box_27.name = "box_27";
	this.box_27.setTransform(319.3,608.4,1,1,0,0,0,19.4,19.4);

	this.box_26 = new lib.box();
	this.box_26.name = "box_26";
	this.box_26.setTransform(464.65,491.05,1,1,0,0,0,19.4,19.4);

	this.box_25 = new lib.box();
	this.box_25.name = "box_25";
	this.box_25.setTransform(581.2,576.2,1,1,0,0,0,19.4,19.4);

	this.box_24 = new lib.box();
	this.box_24.name = "box_24";
	this.box_24.setTransform(364.4,400.8,1,1,0,0,0,19.4,19.4);

	this.box_23 = new lib.box();
	this.box_23.name = "box_23";
	this.box_23.setTransform(176,491.05,1,1,0,0,0,19.4,19.4);

	this.box_22 = new lib.box();
	this.box_22.name = "box_22";
	this.box_22.setTransform(58.2,569.55,1,1,0,0,0,19.4,19.4);

	this.box_21 = new lib.box();
	this.box_21.name = "box_21";
	this.box_21.setTransform(137.15,277.6,1,1,0,0,0,19.4,19.4);

	this.box_20 = new lib.box();
	this.box_20.name = "box_20";
	this.box_20.setTransform(115.85,407.9,1,1,0,0,0,19.4,19.4);

	this.box_19 = new lib.box();
	this.box_19.name = "box_19";
	this.box_19.setTransform(256.7,232.45,1,1,0,0,0,19.4,19.4);

	this.box_18 = new lib.box();
	this.box_18.name = "box_18";
	this.box_18.setTransform(256.7,351.55,1,1,0,0,0,19.4,19.4);

	this.box_17 = new lib.box();
	this.box_17.name = "box_17";
	this.box_17.setTransform(482.25,277.6,1,1,0,0,0,19.4,19.4);

	this.box_16 = new lib.box();
	this.box_16.name = "box_16";
	this.box_16.setTransform(711.55,452.2,1,1,0,0,0,19.4,19.4);

	this.box_15 = new lib.box();
	this.box_15.name = "box_15";
	this.box_15.setTransform(973.45,277.6,1,1,0,0,0,19.4,19.4);

	this.box_14 = new lib.box();
	this.box_14.name = "box_14";
	this.box_14.setTransform(833.1,45.8,1,1,0,0,0,19.4,19.4);

	this.box_13 = new lib.box();
	this.box_13.name = "box_13";
	this.box_13.setTransform(833.1,179.85,1,1,0,0,0,19.4,19.4);

	this.box_12 = new lib.box();
	this.box_12.name = "box_12";
	this.box_12.setTransform(928.25,84.65,1,1,0,0,0,19.4,19.4);

	this.box_11 = new lib.box();
	this.box_11.name = "box_11";
	this.box_11.setTransform(637.55,34.5,1,1,0,0,0,19.4,19.4);

	this.box_10 = new lib.box();
	this.box_10.name = "box_10";
	this.box_10.setTransform(311.75,148.55,1,1,0,0,0,19.4,19.4);

	this.box_9 = new lib.box();
	this.box_9.name = "box_9";
	this.box_9.setTransform(364.4,34.5,1,1,0,0,0,19.4,19.4);

	this.box_8 = new lib.box();
	this.box_8.name = "box_8";
	this.box_8.setTransform(598.7,218.7,1,1,0,0,0,19.4,19.4);

	this.box_7 = new lib.box();
	this.box_7.name = "box_7";
	this.box_7.setTransform(724.05,117.2,1,1,0,0,0,19.4,19.4);

	this.box_6 = new lib.box();
	this.box_6.name = "box_6";
	this.box_6.setTransform(364.4,257.55,1,1,0,0,0,19.4,19.4);

	this.box_5 = new lib.box();
	this.box_5.name = "box_5";
	this.box_5.setTransform(607.5,381.6,1,1,0,0,0,19.4,19.4);

	this.box_4 = new lib.box();
	this.box_4.name = "box_4";
	this.box_4.setTransform(794.25,277.6,1,1,0,0,0,19.4,19.4);

	this.box_3 = new lib.box();
	this.box_3.name = "box_3";
	this.box_3.setTransform(464.65,102.15,1,1,0,0,0,19.4,19.4);

	this.box_2 = new lib.box();
	this.box_2.name = "box_2";
	this.box_2.setTransform(163.5,201.1,1,1,0,0,0,19.4,19.4);

	this.box_1 = new lib.box();
	this.box_1.name = "box_1";
	this.box_1.setTransform(58.2,232.45,1,1,0,0,0,19.4,19.4);

	this.box_0 = new lib.box();
	this.box_0.name = "box_0";
	this.box_0.setTransform(77,34.5,1,1,0,0,0,19.4,19.4);

	this.box_40 = new lib.box();
	this.box_40.name = "box_40";
	this.box_40.setTransform(231.15,63.3,1,1,0,0,0,19.4,19.4);

	this.box_39 = new lib.box();
	this.box_39.name = "box_39";
	this.box_39.setTransform(107.1,134.7,1,1,0,0,0,19.4,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.box_39},{t:this.box_40},{t:this.box_0},{t:this.box_1},{t:this.box_2},{t:this.box_3},{t:this.box_4},{t:this.box_5},{t:this.box_6},{t:this.box_7},{t:this.box_8},{t:this.box_9},{t:this.box_10},{t:this.box_11},{t:this.box_12},{t:this.box_13},{t:this.box_14},{t:this.box_15},{t:this.box_16},{t:this.box_17},{t:this.box_18},{t:this.box_19},{t:this.box_20},{t:this.box_21},{t:this.box_22},{t:this.box_23},{t:this.box_24},{t:this.box_25},{t:this.box_26},{t:this.box_27},{t:this.box_28},{t:this.box_29},{t:this.box_30},{t:this.box_31},{t:this.box_32},{t:this.box_33},{t:this.box_34},{t:this.box_35},{t:this.box_36},{t:this.box_37},{t:this.box_38}]}).wait(1));

	// Layer_2
	this.ball = new lib.ball();
	this.ball.name = "ball";
	this.ball.setTransform(478.35,438.75,0.1532,0.1532,0,0,0,38.9,38.9);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EBQ2g8kIABAAMAAAB5JIgBAAEhQ2A8lMAAAh5J");
	this.shape.setTransform(508.125,378.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,51,0.298)").s().p("EhQ2CuqMAAAjkHMAAAh5KIAAgCMChsAAAIAAACMAAAB5KMAAADkHg");
	this.shape_1.setTransform(508.1,1108.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.page, new cjs.Rectangle(-10.3,-10.3,1036.8999999999999,2236.4), null);


// stage content:
(lib.elijah_gaskins_geller__project_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.page = new lib.page();
	this.page.name = "page";

	this.timeline.addTween(cjs.Tween.get(this.page).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(502.2,374.2,523.8999999999999,1851.8999999999999);
// library properties:
lib.properties = {
	id: '854620DD4A16F742838C9B46504B8515',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['854620DD4A16F742838C9B46504B8515'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;