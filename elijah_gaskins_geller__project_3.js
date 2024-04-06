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



(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2064,2064);


(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2064,1977);


(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2064,2064);


(lib.CachedBmp_3 = function() {
	this.initialize(img.CachedBmp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2064,2064);


(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2064,1977);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2064,2064);// helper functions:

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


(lib.fill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("AhGBGQgdgdAAgpQAAgpAdgdQAdgdApAAQApAAAdAdQAeAdAAApQAAApgeAdQgdAegpAAQgpAAgdgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fill, new cjs.Rectangle(-10,-10,20,20), null);


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


(lib.leaf_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AH5D3IgBAAIgGgCIgBgBQgEgCAAgGIgCAAQgIACAAgFIgCAAQgdgLgrACIgCAAQgIACgEgDIgCAAIgSAAIgCAAIgMAAIgCAAIgPAAIgCAAIgMAAIgCAAIgTAAIgCAAIgRAAIgBAAIgvAAIgCAAIgMAAIgBAAQgJABgDgDIgCAAIgwAAIgCAAQgIABgEgDQhngEhcgQQiAgXhvgsQgogQgrgPQhXgdg3g7IgBgBIgFgKIgBAAIgEgJIgBAAIgCgKIAAgCIAAgTIACAAIAAgCIAAgBQAzhkCCgXQAGgBAFgDQBNg0BvgRIAAgCQALABAIgDIABAAIAEAAIABAAQAGgBAGAAIACgBIAHAAIACAAIAAgBIARAAIACAAIAAgCIANABIAAABIAHAAIACAAIAOABIAAAAIADAAIACAAIAOABIAAABIABAAIACAAIAOADIAAABIAGAAIAAABIAMADIAAABIAMACIAAABQByAoBkA2QBkA2BQBKQBQBJATCGIAAAQIABABQABAJgDAFIAAACQgBAGgEACIgBACQgCAEgGAAIgCAAg");
	mask.setTransform(52.3125,24.6775);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(23.2,-7.25);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({scaleX:11.03,scaleY:11.03},19,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AH5D3IgBAAIgGgCIgBgBQgEgCAAgGIgCAAQgIACAAgFIgCAAQgdgLgrACIgCAAQgIACgEgDIgCAAIgSAAIgCAAIgMAAIgCAAIgPAAIgCAAIgMAAIgCAAIgTAAIgCAAIgRAAIgBAAIgvAAIgCAAIgMAAIgBAAQgJABgDgDIgCAAIgwAAIgCAAQgIABgEgDQhngEhcgQQiAgXhvgsQgogQgrgPQhXgdg3g7IgBgBIgFgKIgBAAIgEgJIgBAAIgCgKIAAgCIAAgTIACAAIAAgCIAAgBQAzhkCCgXQAGgBAFgDQBNg0BvgRIAAgCQALABAIgDIABAAIAEAAIABAAQAGgBAGAAIACgBIAHAAIACAAIAAgBIARAAIACAAIAAgCIANABIAAABIAHAAIACAAIAOABIAAAAIADAAIACAAIAOABIAAABIABAAIACAAIAOADIAAABIAGAAIAAABIAMADIAAABIAMACIAAABQByAoBkA2QBkA2BQBKQBQBJATCGIAAAQIABABQABAJgDAFIAAACQgBAGgEACIgBACQgCAEgGAAIgCAAg");
	this.shape.setTransform(52.3125,24.6775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.6,49.4);


(lib.leaf_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjcFjQgjgBgegEIg8gMQhRgSgugyIAAgBIAAgOQAVgkArgQQANgFANgIQBeg8BPhLQBPhJBGhUQBFhUBUhGQBGg6BigeQAHgDAIgBQAFgCAIABIABAAQALABAFgEIABAAIAAgCIACAAIACAAIAAgCIAOABIAAABIABAAIAOABIAAABQASAEAQgBIACAAQBYAoAHB5IAAACIACADIgGAMQABAGgBAEQgCAHgDAAQgCAXgGAOQgBAEgDgBIAAAIIgEAHIgFAEIAAAGIgIALIAAAGQgIAKgFAJQgBABAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgEAOgLAKIgCACQgSAggYAaQABAFgDACIgFACIgCAGIgIAGIgCAHIgNAMIgCAJQgTARgPAVIgIAEIgDAHIgGACIgCAGIgGACIgRARIgBAEQgCAGgEgBIgEAIQgUAUgMAUIgCACQgGgCgBADIABAHIgEADIAAACQgBADgEABIgFAKIAAgBQgkAVglAUQhmA0iJAPIAAABIgOABIgCAAIgDAAIAAABIgOABIgBAAIgOAAIAAABIgOABIgCAAIgMAAIgBAAIgFAAQgFAAgDgCg");
	mask.setTransform(47.325,35.7);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(92.95,-8.55);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regY:-0.6,scaleX:12.465,scaleY:12.465,y:-16.05},19,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AjcFjQgjgBgegEIg8gMQhRgSgugyIAAgBIAAgOQAVgkArgQQANgFANgIQBeg8BPhLQBPhJBGhUQBFhUBUhGQBGg6BigeQAHgDAIgBQAFgCAIABIABAAQALABAFgEIABAAIAAgCIACAAIACAAIAAgCIAOABIAAABIABAAIAOABIAAABQASAEAQgBIACAAQBYAoAHB5IAAACIACADIgGAMQABAGgBAEQgCAHgDAAQgCAXgGAOQgBAEgDgBIAAAIIgEAHIgFAEIAAAGIgIALIAAAGQgIAKgFAJQgBABAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgEAOgLAKIgCACQgSAggYAaQABAFgDACIgFACIgCAGIgIAGIgCAHIgNAMIgCAJQgTARgPAVIgIAEIgDAHIgGACIgCAGIgGACIgRARIgBAEQgCAGgEgBIgEAIQgUAUgMAUIgCACQgGgCgBADIABAHIgEADIAAACQgBADgEABIgFAKIAAgBQgkAVglAUQhmA0iJAPIAAABIgOABIgCAAIgDAAIAAABIgOABIgBAAIgOAAIAAABIgOABIgCAAIgMAAIgBAAIgFAAQgFAAgDgCg");
	this.shape.setTransform(47.325,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.7,71.4);


(lib.leaf_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AKbISQgbgdgXgiQg9hbhNhOIgBAAIgHgIQg2gxg+goQgvgfg2gWQhtguiUgFIgCAAIgKgCIgCAAIgfgCIgCAAIgKgBIgCAAIgBAAIgCAAQgGAAgEgCIgCAAIgFAAIgCAAQgGABgDgDIgBAAQgIgCgJABIgCAAIgQgEIgBAAQg6gIg2gLIgCAAQgHAAgFgDQgfgGgcgIQhXgXhHgmQhig4hChYQgggsgNhBIgBAAIgDgYIAAgBIAAgTIACAAIAAgCIAAgKQALgcAKgeQAchYA9g5IAMgFIAAAAIAOAAIABAAQAHgBADADIABABQABADAGgBIABAAIAAgCIASAAIABAAIAAgCIAaAAIACAAIAMAAIACAAIANABIAAABIALAAIABAAIAOABIAAABIAKAAIACAAIAOABIAAAAIARABIAAABIACAAIAOABIAAABQCIARBxAoQByApBnAxQBpAyBUBGQBVBFA+BbQA3BQAvBXQA0BlAsBtQAoBiAOB6QADAFgCAIIgBABIAAABQgBAMgLACIgCAAQgDAAgBgCg");
	mask.setTransform(68.69,53.2008);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(8.6,-10);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:1.1,scaleX:21.685,scaleY:21.685,x:32.45},19,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AKbISQgbgdgXgiQg9hbhNhOIgBAAIgHgIQg2gxg+goQgvgfg2gWQhtguiUgFIgCAAIgKgCIgCAAIgfgCIgCAAIgKgBIgCAAIgBAAIgCAAQgGAAgEgCIgCAAIgFAAIgCAAQgGABgDgDIgBAAQgIgCgJABIgCAAIgQgEIgBAAQg6gIg2gLIgCAAQgHAAgFgDQgfgGgcgIQhXgXhHgmQhig4hChYQgggsgNhBIgBAAIgDgYIAAgBIAAgTIACAAIAAgCIAAgKQALgcAKgeQAchYA9g5IAMgFIAAAAIAOAAIABAAQAHgBADADIABABQABADAGgBIABAAIAAgCIASAAIABAAIAAgCIAaAAIACAAIAMAAIACAAIANABIAAABIALAAIABAAIAOABIAAABIAKAAIACAAIAOABIAAAAIARABIAAABIACAAIAOABIAAABQCIARBxAoQByApBnAxQBpAyBUBGQBVBFA+BbQA3BQAvBXQA0BlAsBtQAoBiAOB6QADAFgCAIIgBABIAAABQgBAMgLACIgCAAQgDAAgBgCg");
	this.shape.setTransform(68.69,53.2008);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.4,106.4);


(lib.leaf_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnvFdIgBAAIgCAAIgaAAIgBAAIgNAAIgBAAQgIABgEgDIgCAAIgMAAIgCAAIgMAAIgBAAIgXAAIgCAAQgIACgEgDIgBAAIgTAAIgCAAQgMABgJgDIgBAAIgLAAIgBAAIgMAAIgCAAIgdAAIgCAAQgIABgEgDIgCAAIgDAAIgCAAIgfAAIgCAAQgIABgEgDIgBAAIgHAAIgCAAIgiAAIgCAAQgIABgEgDIgCAAIgmAAIgBAAQgJABgDgCIgCAAIgHAAIgCAAIgaAAIgBAAIgMAAIgCAAIgMAAIgCAAIgMAAIgCAAQgIABgEgDIgBAAIgeAAIgBAAQgIABgEgCIgCgBQgYgCgaAAIgCAAQgIACgEgDIgBAAIg7gCIgCAAQgIACgEgDIgBAAIgaAAIgCAAIgPAAIgCAAIghADIAAAAIgRAEIgCAAIgHAAIAAAAIgNABIgCAAIgFAAIAAABIgOABIgCAAQgLABgIgDIgBAAQgwgCgegVIgBAAQgFgEgBgHIACAAIAAgCIAAgCQAWgbAqgHIACAAIAAgCIAMgCIABAAQB2giBzgoIABAAIAAgBQAFAAACgBIACgBIDWheQBrguBqgwQBmgvBwgmIAHgDIACAAIDhhUQAegLAggKIAAgCQAFABACgCIACAAQAngPApgMIACgBIAAgBQAFAAACgCIACAAQBsgpB4gdIABAAIAAgDQAGAAAFgBIABAAQAogJArgGIABAAIAAgDIAMgBIACAAIACAAIACAAIAAgCQAJABAGgCIACAAIACAAIABAAIAAgCQAKABAGgDIABAAIAEAAIACAAIAAgCQAJABAGgCIACAAQAJgCAKAAIABAAIAAgCQAMABAHgDIACAAIAEAAIABAAIAAgCIAOAAIACAAIAFAAIACAAIAAgBIARAAIACAAIAAgBIAMAAIABAAIAOAAIACAAIAAgCIAMAAIACAAIARAAIABAAIAAgCIATAAIACAAIAOABIAAABIAFAAIACAAIAMAAIABAAIAOABIAAABIAFAAIACAAIAOAAIAAABIAOABIAAAAIANABIAAABIAOACIAAAAIACAAIACAAQAJAAAIACIACAAIARACIAAABIAFAAIACAAIAPADIAAABIACAAIABAAIAQADIAAAAIADAAIACAAIAOADIAAAAIAZAGIABABIAMADIAAABQBiAmBbAuIACAAQAEADAHABIABABQBzAnBiA4QA3AfAyAiIATAOIABABIASANIASAOIAIAGIAPAMIACABQASANASAIIABgCQAGABAEACQggAZgiASQgJgCgIAEQgJAEgKAHQhNAUhHATQgFAAgFACQiUAhiRAZQhrAahrAhIgRAAIgEABQgdALgaAOIgNAAIgNAKIgKAAQhCAQhCAbIhFAMIABAAIAAgBIgDAAIgGgBIAAABIgWADIAAABQgKAAgHACIgCAAIgJAAIAAABIgRABIAAAAIgOABIgBAAIgEAAIAAABIgOACIgBAAIgDAAIgGAAIAAAAIgOABIgBAAIgJAAIAAABIgOABIgBAAIgOAAIAAAAIgOABIgCAAIgMAAIAAABIgNABIgCAAIgMAAIgCAAIgOAAIgBAAIgCAAIAAABIgOABIgCAAIgMAAIgBAAIgMAAIgCAAIgWAAIgCAAIAAABIgOABIgCAAIgLAAIgBAAIgMAAIgCAAIgOAAIgCAAIgMAAIgBAAIgQAAIAAABIgOABIgBAAIgMAAIgCAAIgMAAIgCAAIgMAAIgCAAIgfAAIAAAAIggABIgCAAIgOAAIgBAAIgMAAIgCAAIgMAAIgCAAIgPAAIgCAAIgVAAIAAABIgOABIgBAAIgMAAIgCAAIgMAAIgCAAIgOAAIgBAAIgMAAIgCAAIgOAAIgCAAIgYAAIAAAAIg1ABIgCAAIgUAAIgCAAIgaAAIgBAAIgFABQgFAAgDgCg");
	mask.setTransform(141.575,35.1);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(228.3,-6.1);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:1.4,scaleX:28.055,scaleY:28.055,x:267.6},19,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AnvFdIgBAAIgCAAIgaAAIgBAAIgNAAIgBAAQgIABgEgDIgCAAIgMAAIgCAAIgMAAIgBAAIgXAAIgCAAQgIACgEgDIgBAAIgTAAIgCAAQgMABgJgDIgBAAIgLAAIgBAAIgMAAIgCAAIgdAAIgCAAQgIABgEgDIgCAAIgDAAIgCAAIgfAAIgCAAQgIABgEgDIgBAAIgHAAIgCAAIgiAAIgCAAQgIABgEgDIgCAAIgmAAIgBAAQgJABgDgCIgCAAIgHAAIgCAAIgaAAIgBAAIgMAAIgCAAIgMAAIgCAAIgMAAIgCAAQgIABgEgDIgBAAIgeAAIgBAAQgIABgEgCIgCgBQgYgCgaAAIgCAAQgIACgEgDIgBAAIg7gCIgCAAQgIACgEgDIgBAAIgaAAIgCAAIgPAAIgCAAIghADIAAAAIgRAEIgCAAIgHAAIAAAAIgNABIgCAAIgFAAIAAABIgOABIgCAAQgLABgIgDIgBAAQgwgCgegVIgBAAQgFgEgBgHIACAAIAAgCIAAgCQAWgbAqgHIACAAIAAgCIAMgCIABAAQB2giBzgoIABAAIAAgBQAFAAACgBIACgBIDWheQBrguBqgwQBmgvBwgmIAHgDIACAAIDhhUQAegLAggKIAAgCQAFABACgCIACAAQAngPApgMIACgBIAAgBQAFAAACgCIACAAQBsgpB4gdIABAAIAAgDQAGAAAFgBIABAAQAogJArgGIABAAIAAgDIAMgBIACAAIACAAIACAAIAAgCQAJABAGgCIACAAIACAAIABAAIAAgCQAKABAGgDIABAAIAEAAIACAAIAAgCQAJABAGgCIACAAQAJgCAKAAIABAAIAAgCQAMABAHgDIACAAIAEAAIABAAIAAgCIAOAAIACAAIAFAAIACAAIAAgBIARAAIACAAIAAgBIAMAAIABAAIAOAAIACAAIAAgCIAMAAIACAAIARAAIABAAIAAgCIATAAIACAAIAOABIAAABIAFAAIACAAIAMAAIABAAIAOABIAAABIAFAAIACAAIAOAAIAAABIAOABIAAAAIANABIAAABIAOACIAAAAIACAAIACAAQAJAAAIACIACAAIARACIAAABIAFAAIACAAIAPADIAAABIACAAIABAAIAQADIAAAAIADAAIACAAIAOADIAAAAIAZAGIABABIAMADIAAABQBiAmBbAuIACAAQAEADAHABIABABQBzAnBiA4QA3AfAyAiIATAOIABABIASANIASAOIAIAGIAPAMIACABQASANASAIIABgCQAGABAEACQggAZgiASQgJgCgIAEQgJAEgKAHQhNAUhHATQgFAAgFACQiUAhiRAZQhrAahrAhIgRAAIgEABQgdALgaAOIgNAAIgNAKIgKAAQhCAQhCAbIhFAMIABAAIAAgBIgDAAIgGgBIAAABIgWADIAAABQgKAAgHACIgCAAIgJAAIAAABIgRABIAAAAIgOABIgBAAIgEAAIAAABIgOACIgBAAIgDAAIgGAAIAAAAIgOABIgBAAIgJAAIAAABIgOABIgBAAIgOAAIAAAAIgOABIgCAAIgMAAIAAABIgNABIgCAAIgMAAIgCAAIgOAAIgBAAIgCAAIAAABIgOABIgCAAIgMAAIgBAAIgMAAIgCAAIgWAAIgCAAIAAABIgOABIgCAAIgLAAIgBAAIgMAAIgCAAIgOAAIgCAAIgMAAIgBAAIgQAAIAAABIgOABIgBAAIgMAAIgCAAIgMAAIgCAAIgMAAIgCAAIgfAAIAAAAIggABIgCAAIgOAAIgBAAIgMAAIgCAAIgMAAIgCAAIgPAAIgCAAIgVAAIAAABIgOABIgBAAIgMAAIgCAAIgMAAIgCAAIgOAAIgBAAIgMAAIgCAAIgOAAIgCAAIgYAAIAAAAIg1ABIgCAAIgUAAIgCAAIgaAAIgBAAIgFABQgFAAgDgCg");
	this.shape.setTransform(141.575,35.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283.2,70.2);


(lib.leaf_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AKtF0QgSgEgJgOIgBgCQgCgEABgHQgtgpgmgwQg7hLh+gHIgCAAIgVAAIgBAAIgOAAIgCAAIgHAAIAAAAIgOABIgBAAIgQAAIAAABIgNABIgCAAIgTAAIAAABIgOABIgCAAIgMAAIgBAAIgOAAIgCAAIgHAAIAAABIgNAAIgCAAIgMAAIgCAAIgMAAIgCAAIgPAAIgCAAIhlAAIgCAAQgIACgEgDQhxgDhlgRQiDgWhrgvIhpgwQhrgwhChYIgBAAQgDgHABgKIgBgBQgJgMgBgUIgBAAIAAgNIABAAIAAgCQAOhmBMgoIA1gaQAtgVA6gJQACgCAFAAIACAAIABAAIAAgBQAMAAAHgCIACAAIAEAAIABAAIALgCIABAAIAHAAIACAAIAAgBIAYAAIACAAIAAgCIAMAAIABAAIAVAAIACAAIAaAAIABAAIAMAAIACAAIAMAAIACAAIAMAAIACAAIANABIAAABIAJAAIACAAIANAAIAAABIACAAIAOABIAAABIAFAAIACAAIANABIABABIABAAIAOABIAAAAIACAAIABAAIAOABIAAABIACAAIACAAIATADIAAABIADAAIACAAIAPACIAAABQB+AcBnAxQBpAyBhA5QBiA4BTBHIAdAaIAIAHIAAACQAFAHAHAEIAAABIAIAIIABABQBJBRAnB0QARAzAIA+QADARgCAWIgBAAIAAACQgCAGgGACIgCAAg");
	mask.setTransform(69.715,37.225);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(2.95,-3.35);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:1,scaleX:19.7,scaleY:19.7,x:22.65},19,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AKtF0QgSgEgJgOIgBgCQgCgEABgHQgtgpgmgwQg7hLh+gHIgCAAIgVAAIgBAAIgOAAIgCAAIgHAAIAAAAIgOABIgBAAIgQAAIAAABIgNABIgCAAIgTAAIAAABIgOABIgCAAIgMAAIgBAAIgOAAIgCAAIgHAAIAAABIgNAAIgCAAIgMAAIgCAAIgMAAIgCAAIgPAAIgCAAIhlAAIgCAAQgIACgEgDQhxgDhlgRQiDgWhrgvIhpgwQhrgwhChYIgBAAQgDgHABgKIgBgBQgJgMgBgUIgBAAIAAgNIABAAIAAgCQAOhmBMgoIA1gaQAtgVA6gJQACgCAFAAIACAAIABAAIAAgBQAMAAAHgCIACAAIAEAAIABAAIALgCIABAAIAHAAIACAAIAAgBIAYAAIACAAIAAgCIAMAAIABAAIAVAAIACAAIAaAAIABAAIAMAAIACAAIAMAAIACAAIAMAAIACAAIANABIAAABIAJAAIACAAIANAAIAAABIACAAIAOABIAAABIAFAAIACAAIANABIABABIABAAIAOABIAAAAIACAAIABAAIAOABIAAABIACAAIACAAIATADIAAABIADAAIACAAIAPACIAAABQB+AcBnAxQBpAyBhA5QBiA4BTBHIAdAaIAIAHIAAACQAFAHAHAEIAAABIAIAIIABABQBJBRAnB0QARAzAIA+QADARgCAWIgBAAIAAACQgCAGgGACIgCAAg");
	this.shape.setTransform(69.715,37.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.5,74.5);


(lib.leaf_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtRFwQgogDgdgPIgCAAIgDgLQAuggA3gUQBUghBMgoQAYgOAYgPQBeg8BXhCQBZhBBag/QBahABkg1QBlg1BugsQBugrCAgaQCFgaCXAKQCOAJBWBEQAlAegPA/QgKAtgYAgQhCBahHBSQhGBThdA9QhdA9iCAWQhlARhzAAQiagCiSAIQiTAHiHAUQhkAOhiASQhCAMhIAAQglAAgogEg");
	mask.setTransform(92.3541,37.2002);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(165.25,-9.7);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regY:-1,scaleX:19.435,scaleY:19.435,y:-29.15},19,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AtRFwQgogDgdgPIgCAAIgDgLQAuggA3gUQBUghBMgoQAYgOAYgPQBeg8BXhCQBZhBBag/QBahABkg1QBlg1BugsQBugrCAgaQCFgaCXAKQCOAJBWBEQAlAegPA/QgKAtgYAgQhCBahHBSQhGBThdA9QhdA9iCAWQhlARhzAAQiagCiSAIQiTAHiHAUQhkAOhiASQhCAMhIAAQglAAgogEg");
	this.shape.setTransform(92.3541,37.2002);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184.7,74.4);


(lib.leaf_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlFDgIgCAAQhNADgvgdIgBAAQgGgDACgKIACAAIAAgCIAAgCQA8heBYhCQAsggAugfQBdg9Blg1QA7ggBJgRIAAgBQAGAAADgCIACAAIACAAIABAAIAAgCQAGAAAFgBIABgBQAMgDAOgCIACAAIAAgBQAKABAHgDIACAAIABAAIACAAIAAgCIAMAAIACAAIAHAAIABAAIAAgCIANAAIABAAIAAgBIATAAIACAAIAOAAIAAABIADAAIACAAIANABIABABIADAAIACAAIAPADIAAABIAEAAIABAAIAOACIAAABIAEAAIABAAIAMADIAAAAQAGgBACADIABAAIAMADIAAABIAFAAIAAABIAMADIAAABQA/AQAXA4IAAACIABAAQADAKgHACQgYAWgVAbQhCBVhnA0IAAABIgKAGIgBAAQgJAHgMADIgBABIgKAEQgBADgDACQhpAwh2AjIgBABQgFACgGABIgBABQhCAThKALIAAAAIgSADIgBAAIgJAAIAAABIgOABIgBAAIgCAAIAAABIgOAAIgBAAIgEAAIAAABIgOABIgBAAIgSAAIgBAAIAAABIgOABIgCAAIgKAAQgKAAgHgCg");
	mask.setTransform(45.7918,22.625);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(84.5,-10);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({scaleX:11.1,scaleY:11.1},19,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AlFDgIgCAAQhNADgvgdIgBAAQgGgDACgKIACAAIAAgCIAAgCQA8heBYhCQAsggAugfQBdg9Blg1QA7ggBJgRIAAgBQAGAAADgCIACAAIACAAIABAAIAAgCQAGAAAFgBIABgBQAMgDAOgCIACAAIAAgBQAKABAHgDIACAAIABAAIACAAIAAgCIAMAAIACAAIAHAAIABAAIAAgCIANAAIABAAIAAgBIATAAIACAAIAOAAIAAABIADAAIACAAIANABIABABIADAAIACAAIAPADIAAABIAEAAIABAAIAOACIAAABIAEAAIABAAIAMADIAAAAQAGgBACADIABAAIAMADIAAABIAFAAIAAABIAMADIAAABQA/AQAXA4IAAACIABAAQADAKgHACQgYAWgVAbQhCBVhnA0IAAABIgKAGIgBAAQgJAHgMADIgBABIgKAEQgBADgDACQhpAwh2AjIgBABQgFACgGABIgBABQhCAThKALIAAAAIgSADIgBAAIgJAAIAAABIgOABIgBAAIgCAAIAAABIgOAAIgBAAIgEAAIAAABIgOABIgBAAIgSAAIgBAAIAAABIgOABIgCAAIgKAAQgKAAgHgCg");
	this.shape.setTransform(45.7918,22.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.6,45.3);


(lib.leaf_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AHjL7IAAAAIgBgQIABAAIAAgCIAAgKQAHgfAAglIAAgDIAAgBIAAgMIAAgCIAAgWIAAgCIAAgMIAAgBIAAgGIgBAAQgBgHAAgIQgLhFgWg6QgshugOiMIgBAAIgBgNIAAgCIAAgFIgBAAIAAgOIAAgCIAAg5IAAgBIAAgQIAAgBIAAgNIAAgCIAAgUIABAAIAAgCQAChXAOhNIgBABQgMAFgOADIgBABIgOAEIgBAAQhFAVhIATIAAAAIgMADIgBAAQh5AiiHAOIAAACQgKAAgIACIgBAAIgHAAIAAABQgJABgIACIgCAAIgTABIAAABIgNABIAAABIhkANIAAABIgQABIAAAAIgOABIAAABIgPABIAAABIgQABIAAABIgPABIAAAAIgNABIAAABIgPABIAAABIgNABIgCAAIAAABIgOAAIgBAAIAAABIgQABIgBAAIAAABIgQABIgBAAIgCAAIAAABIgQAAIgBAAIAAACIgPAAIgBAAIgHAAIAAABIgNABIgCAAIgGAAIAAABIgNABIgCAAIgHAAIAAABIgOABIgBAAIgJAAIAAAAIgOABIgCAAIgLAAIgCAAIgEAAIAAABIgNABIgCAAIgOAAIgBAAIgBABIgOABIgBAAIgMAAIgCAAIgRAAIgCAAIgEAAIAAABIgNAAIgCAAIgMAAIgBAAIgMAAIAAABIgOABIgCAAIgMAAIgCAAIgYAAIgCAAIgMAAIgBAAQgJABgDgDIgCAAIgSAAIgBAAQgIACgEgDIgCAAIgRAAIgBAAQgJABgEgDIgCAAQgSgCgVAAIgBAAQgJACgEgDIgCgBQgVgBgXAAIgCAAQgIABgEgDIiKgIQhCgEhAgLQiCgWh9gdIj0g7IgBAAQgFgGgBgKIACAAIAAgBIAAgJQAagnA1gMIACAAIAAgCQAFAAACgBIACgBIABAAIAAgCQAFABACgCIACAAIABAAIAAgCIAJgBIABgBQAMgEANgDIABAAIAAgBIAJgCIACAAIAAgCIAfgGIACgBIAAgBIAHgCIABAAQAkgMAmgJIACAAIAAgBQAFAAADgCIACAAIACAAIACAAIAAgCIAIgBIACgBQADgCAGAAIABAAIAAgBQAGAAAGgCIACAAIACAAIAAgBQAGAAAEgCIABAAIAmgJIACAAIAAgCQAHABAGgCIABAAQAJgDAKgBIABAAIAAgBQAHAAAEgCIACAAIACAAIAAgCQAHAAAGgBIACgBIACAAIACAAIAAgBQAFAAAEgCIACAAIAGAAIABAAIAAgCQAIABAEgDIACAAQAagFAbgDIACgBIAAgBQAKABAFgCIACAAIAMgCIACAAIAAgCIAMgBIACgBIAKgBIACAAIAAgCQAKAAAHgCIABAAIACAAIAAgCIAQgBIABAAQAJgDAKgBIACAAIAAgBQAIABAFgDIABAAIABAAIACAAIAAgCQAJABAGgDIABAAIAWgDIACAAIAAgCQAGAAAFgBIABAAIAOgDIACAAIAAgBQAHAAAGgBIACgBIACAAIAAgBQAGAAAEgCIACAAIADAAIACAAIAAgCQAGABAFgCIABAAQAFgCAFAAIACAAIAAgCQAGAAAEgBIACgBIACAAIAAgBIALgCIACAAIACAAIACAAIAAgCQAHAAAFgBIABgBQAIgCAIgBIACAAIAAgCQAFABADgCIACAAIACAAIACAAIAAgCQAHAAAGgCIACAAIACAAIAAgCQAHABAFgDIABAAIACAAIAAgBQAHABAEgCIACgBIAxgMIACAAIAAgBQAFAAAEgCIABAAIAHgCIACAAIAAgCQAEAAAEgBIACAAQAIgEAKgBIABgBIAAgBQAFAAACgCIACAAQBygpBygmQB0gnB2gkQAygQA5gJIAAgCQAHABADgCIACAAQAGgCAIAAIABAAIAAgCQAHABAEgCIABAAQAIAAAHgCIABAAIAHgCIABAAQA0gHA4gFIABAAIANgBIACgBIADAAIABAAQAGgCAIABIACAAQALgDAPABIABAAIAAgCIAOAAIACAAIAAgBIAMAAIABAAIANAAIACAAIAHAAIABAAIAAgCIAMAAIACAAIAMAAIACAAIAgAAIACAAIAMAAIABAAIANAAIACAAIANABIAAABIAKAAIADAAQBZgoBqgXIACAAIAAgBQAHAAAFgCIACAAQAXgFAdgCIABAAIAAgBIAKAAIACAAIAAgCIAOAAIABAAIACAAIAAgCIAVABIAAABIAFAAIACAAIAKABIAAABIAlAAIABAAQBbg/B+gdIAagFIAAgBQAIABAFgDIACAAIAEAAIABAAIAAgCQAHABADgCIACgBIAGAAIABAAIAAgCQAHABADgCIACAAIAEAAIABAAIAAgCQAIABAEgCIACAAIAFAAIACAAIAAgCQAJABAGgDIACAAQAFgCAHAAIACAAQAEgBAGAAIACAAIADAAIACAAQADgDAGABIACAAIAEAAIACAAIAAgCIAaAAIACAAIAAgCIAVAAIABAAIAQAAIACAAIALAAIACAAIAMAAIACAAIAOABIAAABIAEAAIACAAIAOABIAAABIAKAAIACAAIAOABIAAABIACAAIABAAIAOABIAAAAIADAAIACAAIAVADIAAABIACAAIACAAQAHAAAIACIAAABIADAAIACAAQAFACAHABIAAAAIACAAIACAAIAKADIAAABIABAAIACAAQAFACAHABIABABQAIgBAFAEIACAAQAEADAGAAIAAAAIAMADIAAABIAKACIAAABIAKADIABABQAEgBACACIAAAAIAMAFIAAABIALACIAAABIAIADIAAABQAGAAAFACIAAABIAJACIAAABIAKADIAAABIACAAIALAEIAAABIACAAQAFADAHABIABABIABAAQAFADAHABIAAABIACACIACAAIALAEIAAABQAgAMAdAPIACABIAKAEIAAABQAWAKAVALIAAABIAKAEIAAABIA2AmIABAAIAAgBQAHgCAHAHIAAABIAAAEIAAACQADAHgBALIAAACIAAACQABAIgDAEIAAAKIAAABIAAADQABAIgDAEQgEAugNAnQgdBVgoBKQg3Bkg5BiQg4BfhJBSQhJBRhOBMQhNBMhSBIQhSBIhZBBQhaBBhdA9QguAegzAaQgnATgkAYQgKAGgIAAQgMAAgJgMg");
	mask.setTransform(168.9,77.4997);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(242.7,-10);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({scaleX:27.68,scaleY:27.68},19,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AHjL7IAAAAIgBgQIABAAIAAgCIAAgKQAHgfAAglIAAgDIAAgBIAAgMIAAgCIAAgWIAAgCIAAgMIAAgBIAAgGIgBAAQgBgHAAgIQgLhFgWg6QgshugOiMIgBAAIgBgNIAAgCIAAgFIgBAAIAAgOIAAgCIAAg5IAAgBIAAgQIAAgBIAAgNIAAgCIAAgUIABAAIAAgCQAChXAOhNIgBABQgMAFgOADIgBABIgOAEIgBAAQhFAVhIATIAAAAIgMADIgBAAQh5AiiHAOIAAACQgKAAgIACIgBAAIgHAAIAAABQgJABgIACIgCAAIgTABIAAABIgNABIAAABIhkANIAAABIgQABIAAAAIgOABIAAABIgPABIAAABIgQABIAAABIgPABIAAAAIgNABIAAABIgPABIAAABIgNABIgCAAIAAABIgOAAIgBAAIAAABIgQABIgBAAIAAABIgQABIgBAAIgCAAIAAABIgQAAIgBAAIAAACIgPAAIgBAAIgHAAIAAABIgNABIgCAAIgGAAIAAABIgNABIgCAAIgHAAIAAABIgOABIgBAAIgJAAIAAAAIgOABIgCAAIgLAAIgCAAIgEAAIAAABIgNABIgCAAIgOAAIgBAAIgBABIgOABIgBAAIgMAAIgCAAIgRAAIgCAAIgEAAIAAABIgNAAIgCAAIgMAAIgBAAIgMAAIAAABIgOABIgCAAIgMAAIgCAAIgYAAIgCAAIgMAAIgBAAQgJABgDgDIgCAAIgSAAIgBAAQgIACgEgDIgCAAIgRAAIgBAAQgJABgEgDIgCAAQgSgCgVAAIgBAAQgJACgEgDIgCgBQgVgBgXAAIgCAAQgIABgEgDIiKgIQhCgEhAgLQiCgWh9gdIj0g7IgBAAQgFgGgBgKIACAAIAAgBIAAgJQAagnA1gMIACAAIAAgCQAFAAACgBIACgBIABAAIAAgCQAFABACgCIACAAIABAAIAAgCIAJgBIABgBQAMgEANgDIABAAIAAgBIAJgCIACAAIAAgCIAfgGIACgBIAAgBIAHgCIABAAQAkgMAmgJIACAAIAAgBQAFAAADgCIACAAIACAAIACAAIAAgCIAIgBIACgBQADgCAGAAIABAAIAAgBQAGAAAGgCIACAAIACAAIAAgBQAGAAAEgCIABAAIAmgJIACAAIAAgCQAHABAGgCIABAAQAJgDAKgBIABAAIAAgBQAHAAAEgCIACAAIACAAIAAgCQAHAAAGgBIACgBIACAAIACAAIAAgBQAFAAAEgCIACAAIAGAAIABAAIAAgCQAIABAEgDIACAAQAagFAbgDIACgBIAAgBQAKABAFgCIACAAIAMgCIACAAIAAgCIAMgBIACgBIAKgBIACAAIAAgCQAKAAAHgCIABAAIACAAIAAgCIAQgBIABAAQAJgDAKgBIACAAIAAgBQAIABAFgDIABAAIABAAIACAAIAAgCQAJABAGgDIABAAIAWgDIACAAIAAgCQAGAAAFgBIABAAIAOgDIACAAIAAgBQAHAAAGgBIACgBIACAAIAAgBQAGAAAEgCIACAAIADAAIACAAIAAgCQAGABAFgCIABAAQAFgCAFAAIACAAIAAgCQAGAAAEgBIACgBIACAAIAAgBIALgCIACAAIACAAIACAAIAAgCQAHAAAFgBIABgBQAIgCAIgBIACAAIAAgCQAFABADgCIACAAIACAAIACAAIAAgCQAHAAAGgCIACAAIACAAIAAgCQAHABAFgDIABAAIACAAIAAgBQAHABAEgCIACgBIAxgMIACAAIAAgBQAFAAAEgCIABAAIAHgCIACAAIAAgCQAEAAAEgBIACAAQAIgEAKgBIABgBIAAgBQAFAAACgCIACAAQBygpBygmQB0gnB2gkQAygQA5gJIAAgCQAHABADgCIACAAQAGgCAIAAIABAAIAAgCQAHABAEgCIABAAQAIAAAHgCIABAAIAHgCIABAAQA0gHA4gFIABAAIANgBIACgBIADAAIABAAQAGgCAIABIACAAQALgDAPABIABAAIAAgCIAOAAIACAAIAAgBIAMAAIABAAIANAAIACAAIAHAAIABAAIAAgCIAMAAIACAAIAMAAIACAAIAgAAIACAAIAMAAIABAAIANAAIACAAIANABIAAABIAKAAIADAAQBZgoBqgXIACAAIAAgBQAHAAAFgCIACAAQAXgFAdgCIABAAIAAgBIAKAAIACAAIAAgCIAOAAIABAAIACAAIAAgCIAVABIAAABIAFAAIACAAIAKABIAAABIAlAAIABAAQBbg/B+gdIAagFIAAgBQAIABAFgDIACAAIAEAAIABAAIAAgCQAHABADgCIACgBIAGAAIABAAIAAgCQAHABADgCIACAAIAEAAIABAAIAAgCQAIABAEgCIACAAIAFAAIACAAIAAgCQAJABAGgDIACAAQAFgCAHAAIACAAQAEgBAGAAIACAAIADAAIACAAQADgDAGABIACAAIAEAAIACAAIAAgCIAaAAIACAAIAAgCIAVAAIABAAIAQAAIACAAIALAAIACAAIAMAAIACAAIAOABIAAABIAEAAIACAAIAOABIAAABIAKAAIACAAIAOABIAAABIACAAIABAAIAOABIAAAAIADAAIACAAIAVADIAAABIACAAIACAAQAHAAAIACIAAABIADAAIACAAQAFACAHABIAAAAIACAAIACAAIAKADIAAABIABAAIACAAQAFACAHABIABABQAIgBAFAEIACAAQAEADAGAAIAAAAIAMADIAAABIAKACIAAABIAKADIABABQAEgBACACIAAAAIAMAFIAAABIALACIAAABIAIADIAAABQAGAAAFACIAAABIAJACIAAABIAKADIAAABIACAAIALAEIAAABIACAAQAFADAHABIABABIABAAQAFADAHABIAAABIACACIACAAIALAEIAAABQAgAMAdAPIACABIAKAEIAAABQAWAKAVALIAAABIAKAEIAAABIA2AmIABAAIAAgBQAHgCAHAHIAAABIAAAEIAAACQADAHgBALIAAACIAAACQABAIgDAEIAAAKIAAABIAAADQABAIgDAEQgEAugNAnQgdBVgoBKQg3Bkg5BiQg4BfhJBSQhJBRhOBMQhNBMhSBIQhSBIhZBBQhaBBhdA9QguAegzAaQgnATgkAYQgKAGgIAAQgMAAgJgMg");
	this.shape.setTransform(168.9,77.4997);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,337.8,155);


(lib.leaf_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnkOWQgdgCgRgNIgBAAIgIgIIAAgCIgBgCIgBAAIgEgKIgBgBQgCgCABgFIgBAAIAAgOIAAgCIAAgKQAJgnAEgsIAAgBIAAgCIAAgOIgBgBQgBgDAAgFIgBAAIgCgSIAAgCIAAgHIgBAAIgBgOIAAgCIAAgEIAAgBIgCgOIAAgBIAAgMIAAgCIAAgNIAAgCIAAgOIAAgCIAAgRIAAgCIAAgRIACAAIAAgBIAAgGQADgCgBgHIAAgBIAAgCIAAgMIABAAIAAgCIAAgNQAPiNAeh6QAfh8AnhzQAlhzA4hiQA5hhBJhRQAZgbAagXQg8AKhIAIIgCAAIAAABIgPABIAAABIgOABIgCAAIgIAAIAAAAIgOACIgCAAIgHAAIAAABIgNAAIgCAAIgMAAIgCAAIgMAAIgBAAIgXAAIAAABIgnABIgCAAIgiAAIgCAAQgIACgFgEIgBAAQhIgEhHgEIgCAAQgIABgDgDIgDAAIgMAAIgBAAIgXAAIgBAAIgMAAIgCAAIgKAAIAAABIgOABIgCAAIgMAAIgCAAIgCAAIAAABIgPAAIgCAAQgXAFgaACIAAABIgOABIgCAAQgbADgEgWQA6g5BJgrIBIgqQBig5BngyQBpgxBtgsQBuguBzgnQBngjBwgcIAAgCQAHABACgCIACgBQATgFAWgDIACAAIAAgCQAHAAAFgBIACAAQAFgCAGAAIACgBIAAgBQAHABAEgDIACAAQAZgEAbgEIADgBQACgCAGABIACAAIABAAIACAAIAAgBIAKAAIACAAQAJgDAMABIACAAIAAgCIAYAAIACAAIAAgCIALAAIACAAIAOAAIABAAIAAgCIAMAAIADAAIANABIAAABIAKAAIACAAIAOABIAAABIAFAAIACAAIANAAIAAACIAOABIABABQAJgBAIACIABAAQAHACAJAAIAAABIADAAIACAAQAFACAJABIAAABIABAAIACAAIAKACIAAABQAFAAACABIACABQAEACAGABIAAABIAMACIABABIADAAQAEABADACIABAAQAFACAFgDIAAABICHAmIAaAHIAGACIABAIIAMANIABAHQAdDEAIDdIgDgBIAAABQgHAmgLAkIgDAOQgkB2g2BjQg3BjhBBaQguBBgyA8IgpAuQhIBRhTBHQhRBJhYBDQhWBChcA/QhbA9hjA4QhiA3h1AmIAAAAQgFADgHAAIAAABQgTAGgYAEIAAABIgRABIgCAAg");
	mask.setTransform(86.8,91.75);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(162.1,-5.2);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:1.2,scaleX:25.225,scaleY:25.225,x:192.35},19,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AnkOWQgdgCgRgNIgBAAIgIgIIAAgCIgBgCIgBAAIgEgKIgBgBQgCgCABgFIgBAAIAAgOIAAgCIAAgKQAJgnAEgsIAAgBIAAgCIAAgOIgBgBQgBgDAAgFIgBAAIgCgSIAAgCIAAgHIgBAAIgBgOIAAgCIAAgEIAAgBIgCgOIAAgBIAAgMIAAgCIAAgNIAAgCIAAgOIAAgCIAAgRIAAgCIAAgRIACAAIAAgBIAAgGQADgCgBgHIAAgBIAAgCIAAgMIABAAIAAgCIAAgNQAPiNAeh6QAfh8AnhzQAlhzA4hiQA5hhBJhRQAZgbAagXQg8AKhIAIIgCAAIAAABIgPABIAAABIgOABIgCAAIgIAAIAAAAIgOACIgCAAIgHAAIAAABIgNAAIgCAAIgMAAIgCAAIgMAAIgBAAIgXAAIAAABIgnABIgCAAIgiAAIgCAAQgIACgFgEIgBAAQhIgEhHgEIgCAAQgIABgDgDIgDAAIgMAAIgBAAIgXAAIgBAAIgMAAIgCAAIgKAAIAAABIgOABIgCAAIgMAAIgCAAIgCAAIAAABIgPAAIgCAAQgXAFgaACIAAABIgOABIgCAAQgbADgEgWQA6g5BJgrIBIgqQBig5BngyQBpgxBtgsQBuguBzgnQBngjBwgcIAAgCQAHABACgCIACgBQATgFAWgDIACAAIAAgCQAHAAAFgBIACAAQAFgCAGAAIACgBIAAgBQAHABAEgDIACAAQAZgEAbgEIADgBQACgCAGABIACAAIABAAIACAAIAAgBIAKAAIACAAQAJgDAMABIACAAIAAgCIAYAAIACAAIAAgCIALAAIACAAIAOAAIABAAIAAgCIAMAAIADAAIANABIAAABIAKAAIACAAIAOABIAAABIAFAAIACAAIANAAIAAACIAOABIABABQAJgBAIACIABAAQAHACAJAAIAAABIADAAIACAAQAFACAJABIAAABIABAAIACAAIAKACIAAABQAFAAACABIACABQAEACAGABIAAABIAMACIABABIADAAQAEABADACIABAAQAFACAFgDIAAABICHAmIAaAHIAGACIABAIIAMANIABAHQAdDEAIDdIgDgBIAAABQgHAmgLAkIgDAOQgkB2g2BjQg3BjhBBaQguBBgyA8IgpAuQhIBRhTBHQhRBJhYBDQhWBChcA/QhbA9hjA4QhiA3h1AmIAAAAQgFADgHAAIAAABQgTAGgYAEIAAABIgRABIgCAAg");
	this.shape.setTransform(86.8,91.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.6,183.5);


(lib.leaf_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA8GBQgLgCgEgJQgcg9gmgzQhBhYg4hiQg4hhggh6IgBAAIAAgOIgBgCQgFgXgDgZIgBAAIgBgOIgBAAIAAgOIAAgBIAAgEIgBAAIgBgNIAAgCIAAgQIAAgBIAAgVIACAAIAAgCIAAgMQAFgaAGgZIABgCQAJgOAVgDIACAAIAAgCQAHABAEgCIABgBIACAAIACAAQADgCAHAAIACABIAKAAIACAAIAAgCIAHAAIABAAIAAgCIAMAAIACAAIAaABIAAABIAFAAIACAAIANABIABABIABAAQAJgBAFACIACAAIANADIABABQAEgBADACIABAAIAMADIAAABIAMACIAAABIAKADIABABIAKACIAAABQAGACACAFIABAAQAKABAJACIAAABQCNANAvBqQASAnAGAyQAHAzADA2QADADgBAJIAAABIAAAsIAAACIAAABQABAJgDADIAAACIAAACIAAACQABAJgDAEQgMBTgdBDIgvBrQgXA3g5AUIgBABIgGABQgEAAgDgCg");
	mask.setTransform(24.6125,38.69);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(19.75,-10);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.5,regY:-0.5,scaleX:10.195,scaleY:10.195,x:24.85,y:-15.1},19,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AA8GBQgLgCgEgJQgcg9gmgzQhBhYg4hiQg4hhggh6IgBAAIAAgOIgBgCQgFgXgDgZIgBAAIgBgOIgBAAIAAgOIAAgBIAAgEIgBAAIgBgNIAAgCIAAgQIAAgBIAAgVIACAAIAAgCIAAgMQAFgaAGgZIABgCQAJgOAVgDIACAAIAAgCQAHABAEgCIABgBIACAAIACAAQADgCAHAAIACABIAKAAIACAAIAAgCIAHAAIABAAIAAgCIAMAAIACAAIAaABIAAABIAFAAIACAAIANABIABABIABAAQAJgBAFACIACAAIANADIABABQAEgBADACIABAAIAMADIAAABIAMACIAAABIAKADIABABIAKACIAAABQAGACACAFIABAAQAKABAJACIAAABQCNANAvBqQASAnAGAyQAHAzADA2QADADgBAJIAAABIAAAsIAAACIAAABQABAJgDADIAAACIAAACIAAACQABAJgDAEQgMBTgdBDIgvBrQgXA3g5AUIgBABIgGABQgEAAgDgCg");
	this.shape.setTransform(24.6125,38.69);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.2,77.4);


(lib.leaf_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("An1JHIgBAAQgHgBAAgJIgBAAIgBgTIACAAIAAgCIAAgKQAjh3AMiNQAIhsAThgQAThfAohKQAcgzAfgvQA9hdBPhKQBQhLBhg5QBgg4B7geQAXgGAZgCIAAgCIAOABIAAABIADACIAAACQAIgBAFACIABAAIAAgBIAWAAIACAAIAOABIAAAAIACAAIANABIAAABIAEAAIACAAIANADIAAABQCEAWAHCSIABAKQADAJgCAOIAAABIAAAMIAAACIAAACQACAIgDAEIAAACIAAABQABAJgDAFIAAACIAAACQABAIgDAEQgSCHg8BeQg7BehKBQIgnAnQhNBMhYBCQhZBChjA0IiwBcQhmA1huAsIAAABIgHABQgFAAgEgCg");
	var mask_graphics_19 = new cjs.Graphics().p("An1JHIgBAAQgHgBAAgJIgBAAIgBgTIACAAIAAgCIAAgKQAjh3AMiNQAIhsAThgQAThfAohKQAcgzAfgvQA9hdBPhKQBQhLBhg5QBgg4B7geQAXgGAZgCIAAgCIAOABIAAABIADACIAAACQAIgBAFACIABAAIAAgBIAWAAIACAAIAOABIAAAAIACAAIANABIAAABIAEAAIACAAIANADIAAABQCEAWAHCSIABAKQADAJgCAOIAAABIAAAMIAAACIAAACQACAIgDAEIAAACIAAABQABAJgDAFIAAACIAAACQABAIgDAEQgSCHg8BeQg7BehKBQIgnAnQhNBMhYBCQhZBChjA0IiwBcQhmA1huAsIAAABIgHABQgFAAgEgCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:51.175,y:58.49}).wait(19).to({graphics:mask_graphics_19,x:51.175,y:58.49}).wait(1));

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(96.05,-10);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:1,scaleX:19.62,scaleY:19.62,x:115.65},19,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("An1JHIgBAAQgHgBAAgJIgBAAIgBgTIACAAIAAgCIAAgKQAjh3AMiNQAIhsAThgQAThfAohKQAcgzAfgvQA9hdBPhKQBQhLBhg5QBgg4B7geQAXgGAZgCIAAgCIAOABIAAABIADACIAAACQAIgBAFACIABAAIAAgBIAWAAIACAAIAOABIAAAAIACAAIANABIAAABIAEAAIACAAIANADIAAABQCEAWAHCSIABAKQADAJgCAOIAAABIAAAMIAAACIAAACQACAIgDAEIAAACIAAABQABAJgDAFIAAACIAAACQABAIgDAEQgSCHg8BeQg7BehKBQIgnAnQhNBMhYBCQhZBChjA0IiwBcQhmA1huAsIAAABIgHABQgFAAgEgCg");
	this.shape.setTransform(51.175,58.49);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.4,117);


(lib.leaf_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ABhIjQgFgBgEgDQgDgCgBgEQgPgugTgnQgyhohJhRQhKhQg7hfQgXgjgVglQg3hhgWiEIgBAAIgBgOIgBAAIgBgNIAAgCIAAgEIAAAAIgBgNIAAgCIAAgMIgBAAIgBgTIAAgCIAAgbIAAgCIAAgMIACAAIAAgCIAAgIIAAgCIAAgMIABAAIAAgCIAAgMQAJhFAWg3IAAgBQAygrBTgJIACAAIAAgCIAMAAIABAAIATAAIACAAIAAgBIAWABIAAAAIAXAAIABAAIAOABIAAABIACAAIACAAIANABIAAABQCLAOBdA9IA8AmQAPgHAJARQAbAxAUA6QAXA/AABVQADAEgBAIIAAACIAAAdIAAACIAAAMIAAACIAAABQABAJgDADIAAACIAAACIAAAUIAAACIAAACQACAIgDAEIAAAYIAAACIAAABQABAJgDADIAAAHIAAACIAAACQABAHgDAEIAAACIAAABIAAACQABAIgDAEQgEA6gGA1QgRCLgtBtQgtBthiA5IAAAAIgGABQgFAAgCgDg");
	var mask_graphics_19 = new cjs.Graphics().p("ABhIjQgFgBgEgDQgDgCgBgEQgPgugTgnQgyhohJhRQhKhQg7hfQgXgjgVglQg3hhgWiEIgBAAIgBgOIgBAAIgBgNIAAgCIAAgEIAAAAIgBgNIAAgCIAAgMIgBAAIgBgTIAAgCIAAgbIAAgCIAAgMIACAAIAAgCIAAgIIAAgCIAAgMIABAAIAAgCIAAgMQAJhFAWg3IAAgBQAygrBTgJIACAAIAAgCIAMAAIABAAIATAAIACAAIAAgBIAWABIAAAAIAXAAIABAAIAOABIAAABIACAAIACAAIANABIAAABQCLAOBdA9IA8AmQAPgHAJARQAbAxAUA6QAXA/AABVQADAEgBAIIAAACIAAAdIAAACIAAAMIAAACIAAABQABAJgDADIAAACIAAACIAAAUIAAACIAAACQACAIgDAEIAAAYIAAACIAAABQABAJgDADIAAAHIAAACIAAACQABAHgDAEIAAACIAAABIAAACQABAIgDAEQgEA6gGA1QgRCLgtBtQgtBthiA5IAAAAIgGABQgFAAgCgDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:33.4625,y:55.0167}).wait(19).to({graphics:mask_graphics_19,x:33.4625,y:55.0167}).wait(1));

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(26.05,-12.4);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:0.7,regY:-0.7,scaleX:14.165,scaleY:14.165,x:35.95,y:-22.3},19,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("ABhIjQgFgBgEgDQgDgCgBgEQgPgugTgnQgyhohJhRQhKhQg7hfQgXgjgVglQg3hhgWiEIgBAAIgBgOIgBAAIgBgNIAAgCIAAgEIAAAAIgBgNIAAgCIAAgMIgBAAIgBgTIAAgCIAAgbIAAgCIAAgMIACAAIAAgCIAAgIIAAgCIAAgMIABAAIAAgCIAAgMQAJhFAWg3IAAgBQAygrBTgJIACAAIAAgCIAMAAIABAAIATAAIACAAIAAgBIAWABIAAAAIAXAAIABAAIAOABIAAABIACAAIACAAIANABIAAABQCLAOBdA9IA8AmQAPgHAJARQAbAxAUA6QAXA/AABVQADAEgBAIIAAACIAAAdIAAACIAAAMIAAACIAAABQABAJgDADIAAACIAAACIAAAUIAAACIAAACQACAIgDAEIAAAYIAAACIAAABQABAJgDADIAAAHIAAACIAAACQABAHgDAEIAAACIAAABIAAACQABAIgDAEQgEA6gGA1QgRCLgtBtQgtBthiA5IAAAAIgGABQgFAAgCgDg");
	this.shape.setTransform(33.4625,55.0167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,110.1);


(lib.leaf_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA8OeIgCAAQgTgHACgbIgBAAIgBgOIAAgCIAAgPIAAgCIAAgDIgBgBIgBgNIAAgCIAAgMIAAgCIAAgBIAAgBIgBgNIAAgCIAAgFIgBAAIgBgOQgRhogyhGIheiBIgjgyQgwhEgnhMQg0hmgeh7Qgeh7gKiQIgBAAIgBgOIAAgCIAAgWIAAAAIgBgOIAAgCIAAgMIAAgBIAAgXIgBAAIgBgTIAAgBIAAgMIACAAIAAgCIAAgcQAIiRAhh4QAhh6A9hcQAggwApglQAWgHAcgDIABAAIAAgCIAjAAIACAAIANABIAAABIAJAAIACAAIAGABIALACIAAAAQAhAHAeAKIATAHQAfAKAcAOQAPAGAOAIQATAKASAMIAAABIAJAGIAJAGQAYA8APBAQAtC/AmC+IAaBOIAAAHQACApAPAoIAGAcIAEAWQAJA5ADA/IAAACQADAEgCAIIAAACIAAATIAAABIAAAMIAAACIAAACQACAIgDAEIAAAOIAAABIAAACQABAIgDAEQgLB6gXBuQgbCAgiB3QgjB4g3BiQgOAZgPAXQggAvg0AZIAAABIgIABQgEAAgDgCg");
	mask.setTransform(37.7125,92.7818);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(25.3,-11.7);
	this.fill._off = true;

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).wait(1).to({_off:false},0).to({scaleX:25.19,scaleY:25.19},18,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AA8OeIgCAAQgTgHACgbIgBAAIgBgOIAAgCIAAgPIAAgCIAAgDIgBgBIgBgNIAAgCIAAgMIAAgCIAAgBIAAgBIgBgNIAAgCIAAgFIgBAAIgBgOQgRhogyhGIheiBIgjgyQgwhEgnhMQg0hmgeh7Qgeh7gKiQIgBAAIgBgOIAAgCIAAgWIAAAAIgBgOIAAgCIAAgMIAAgBIAAgXIgBAAIgBgTIAAgBIAAgMIACAAIAAgCIAAgcQAIiRAhh4QAhh6A9hcQAggwApglQAWgHAcgDIABAAIAAgCIAjAAIACAAIANABIAAABIAJAAIACAAIAGABIALACIAAAAQAhAHAeAKIATAHQAfAKAcAOQAPAGAOAIQATAKASAMIAAABIAJAGIAJAGQAYA8APBAQAtC/AmC+IAaBOIAAAHQACApAPAoIAGAcIAEAWQAJA5ADA/IAAACQADAEgCAIIAAACIAAATIAAABIAAAMIAAACIAAACQACAIgDAEIAAAOIAAABIAAACQABAIgDAEQgLB6gXBuQgbCAgiB3QgjB4g3BiQgOAZgPAXQggAvg0AZIAAABIgIABQgEAAgDgCg");
	this.shape.setTransform(37.7125,92.7818);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.4,185.6);


(lib.leaf_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ANiSvIgBAAQgQgEAAgUIgBAAIgBgOQgMg3gOg1Qgih5gzhmQgbg0gggtQhBhYhOhNQhDhCg7hMQhDhXgzhnIgZg2QgvhpgTiGIgBAAQAAgJgCgIIAAgCIAAgHIgBAAIgBgNIAAgCIgBAAIgBgOIAAgBIAAgEIgBAAIgBgOIAAgBIAAgEIAAAAIgBgOIAAgBIAAgHIgBAAIgBgOIAAgCIAAgMIAAgBIAAgLIgBAAIgBgOIAAgBIAAgVIAAgCIAAgMIACAAIAAgBIAAgJIAAgCQABgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAQgkAegqAYQhiA4hpAvQhrAwh1AkQh2AjiGAUIAAABQgKABgHACIgCAAQgHACgKAAIAAAAIgQABIAAABIgNABIgCAAIgCAAIAAABIgOABIgBAAIgGAAIAAABIgNAAIgCAAIgJAAIAAABIgPABIgCAAIgMAAIAAABIgOABIgBAAQgUABgQgDIgCAAIgCAAIgCAAQgUABgQgDIgBAAQgtgBgpgEIgCAAIgMAAIgCAAIgTAAIgBAAIgaACIgCAAIgDAAIAAABQgLAAgIACQgLACgKADQgkAMgOgZQAigrA6gVQANgFANgHQBhg4BQhLQBPhKBChYQBChYA7hfQA7hfA5hiQA4hhBIhRQBJhSBdg9QBbg+BsgtQBagmBvgSIAAgBQAJAAAFgCIABAAIALAAIABAAIAAgCIATAAIACAAIAAgCIAmAAIACAAIAMAAIABAAIAMAAIACAAIAOABIAAABIAFAAIACAAIANABIAAABIAOABIAAABIACAAIACAAIAAgCIADgCIACAAIAAgCIAFAAIACAAIAAgBIAbAAIACAAIAOABIAAAAIAFAAIACAAIANABIAAABIAHAAIACAAIATADIAAABQB/AaBQBKQBRBJAtBvQAsBsAXCDQAXCDAMCMQAIBXAGBXQADAEgCAIIAAABIACA5IAAACQADAEgBAIIAAACIAAAYIAAACQADADgBAJIAAABIAAAaIAAACQADAEgCAIIAAACIAAAMIAAABIAAAYIAAACIAAACIAAARIAAABIAAABQADAGgBAKIAAACIAAAPIAAACIAAAMIAAACIAAANIAAACIAAAMIAAACIAAAMIAAACIAAABQABAIgDAEIAAATIAAACIAAAMIAAACIAAABQACAJgDADIAAANIAAABIAAAMIAAACIAAACQABAIgDAEIAAAMIAAACIAAABQABAIgDAEIAAAMIAAACIAAACQABAIgDAEIAAAPIAAACIAAACQACAIgDAEIAAAHIAAABIAAACQABAIgDAEIAAAFIAAACIAAACQABAIgDAEIAAABIAAACQACAKgDAGIAAABQgBASgDAPIAAACIAAABIAAACQABAIgDAEIAAACQAAAQgDANIAAACIAAACQABAIgDAEIAAABQgCAdgFAZIAAABIAAACQACAIgDAEIAAACQgBAVgFARIAAABIAAACIABACQABAIgDAEIAAACQABAIgDAEIAAABQABAJgDADQgJBogPBiIgJBDQgRCMgfB4QgMAwggAZIAAABIgHABQgFAAgEgCg");
	mask.setTransform(105.2625,120.115);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(163.9,-14.4);

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).to({regX:1.4,scaleX:28.06,scaleY:28.06,x:203.2},19,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("ANiSvIgBAAQgQgEAAgUIgBAAIgBgOQgMg3gOg1Qgih5gzhmQgbg0gggtQhBhYhOhNQhDhCg7hMQhDhXgzhnIgZg2QgvhpgTiGIgBAAQAAgJgCgIIAAgCIAAgHIgBAAIgBgNIAAgCIgBAAIgBgOIAAgBIAAgEIgBAAIgBgOIAAgBIAAgEIAAAAIgBgOIAAgBIAAgHIgBAAIgBgOIAAgCIAAgMIAAgBIAAgLIgBAAIgBgOIAAgBIAAgVIAAgCIAAgMIACAAIAAgBIAAgJIAAgCQABgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAQgkAegqAYQhiA4hpAvQhrAwh1AkQh2AjiGAUIAAABQgKABgHACIgCAAQgHACgKAAIAAAAIgQABIAAABIgNABIgCAAIgCAAIAAABIgOABIgBAAIgGAAIAAABIgNAAIgCAAIgJAAIAAABIgPABIgCAAIgMAAIAAABIgOABIgBAAQgUABgQgDIgCAAIgCAAIgCAAQgUABgQgDIgBAAQgtgBgpgEIgCAAIgMAAIgCAAIgTAAIgBAAIgaACIgCAAIgDAAIAAABQgLAAgIACQgLACgKADQgkAMgOgZQAigrA6gVQANgFANgHQBhg4BQhLQBPhKBChYQBChYA7hfQA7hfA5hiQA4hhBIhRQBJhSBdg9QBbg+BsgtQBagmBvgSIAAgBQAJAAAFgCIABAAIALAAIABAAIAAgCIATAAIACAAIAAgCIAmAAIACAAIAMAAIABAAIAMAAIACAAIAOABIAAABIAFAAIACAAIANABIAAABIAOABIAAABIACAAIACAAIAAgCIADgCIACAAIAAgCIAFAAIACAAIAAgBIAbAAIACAAIAOABIAAAAIAFAAIACAAIANABIAAABIAHAAIACAAIATADIAAABQB/AaBQBKQBRBJAtBvQAsBsAXCDQAXCDAMCMQAIBXAGBXQADAEgCAIIAAABIACA5IAAACQADAEgBAIIAAACIAAAYIAAACQADADgBAJIAAABIAAAaIAAACQADAEgCAIIAAACIAAAMIAAABIAAAYIAAACIAAACIAAARIAAABIAAABQADAGgBAKIAAACIAAAPIAAACIAAAMIAAACIAAANIAAACIAAAMIAAACIAAAMIAAACIAAABQABAIgDAEIAAATIAAACIAAAMIAAACIAAABQACAJgDADIAAANIAAABIAAAMIAAACIAAACQABAIgDAEIAAAMIAAACIAAABQABAIgDAEIAAAMIAAACIAAACQABAIgDAEIAAAPIAAACIAAACQACAIgDAEIAAAHIAAABIAAACQABAIgDAEIAAAFIAAACIAAACQABAIgDAEIAAABIAAACQACAKgDAGIAAABQgBASgDAPIAAACIAAABIAAACQABAIgDAEIAAACQAAAQgDANIAAACIAAACQABAIgDAEIAAABQgCAdgFAZIAAABIAAACQACAIgDAEIAAACQgBAVgFARIAAABIAAACIABACQABAIgDAEIAAACQABAIgDAEIAAABQABAJgDADQgJBogPBiIgJBDQgRCMgfB4QgMAwggAZIAAABIgHABQgFAAgEgCg");
	this.shape.setTransform(105.2625,120.115);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.5,240.3);


(lib.leaf_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AN2VKIgcAAIAAgBQgcgNgWgSIgBAAIgFgGIgCgBIg1gnIgCgBQgDgDgEgDIgBgBIgvghIgBgBIgIgGIgBAAQgCgEgEgCIgBAAIgGgGIgBgBIhRg7IgBgBIgGgHQhIg0hLgyIi3h8Qhdg+hShIQgpgkgugfQhcg9hZhBIiyiCQhDgwhCgyIitiGQhWhEhHhTQg1g+gvhDQg/hbg0hmIgBAAIgEgKIgBgBQgohSgehdIgBAAQgCgHAAgKIgBgBQgBgDAAgFIgBAAIgCgKIAAgBIgBAAIgDgNIgBAAIgBgGIgBAAIgCgKIAAgDIgBAAIgDgMIAAgBIAAAAIgDgMIAAgCIAAgCIgBAAQAAgGgCgFIAAgCIAAgEIgBAAIgDgMIAAgBIAAgEIgBAAIgCgNIAAgCIAAgCIgBgBIgDgNIAAgBIAAgDIgBAAQAAgIgCgHIAAgBIAAgDIgBAAQgBgIgCgGIAAgDIAAgDIAAAAIgDgRIAAgCQgCgHAAgJIgBAAIAAgNIAAgCIgBAAIgBgOIAAgBIAAgEIgBAAIgBgNIAAgCIAAgCIgBAAIgBgOIAAgBIAAAAIgBgOIAAgCIgBAAIgBgNIAAgDIAAgMIAAgBIAAgCIgBAAIgBgOIAAgBIAAgMIgBAAIgBgOIAAgCIAAgaIAAgBIAAgXIACAAIAAgCIAAgIIAAgCIAAgSIACAAIAAgCIAAgVIACAAIAAgCIAAgiQAKiQAeh7IAShDIgCAAQgEABgBgEQAEAAACgBIABgBIACgBIACAAIAAgDIAGAAIACAAQACgBADAAIACAAQADgDAGABIABAAQADgCAEABIACAAIACAAIABAAIAAgCQAJABAFgDIACAAIAkgFIACAAIAAgCQAIABAEgCIABgBIAjgEIACAAIAAgCQAHABAFgCIABgBQAQgDARgBIACAAIAAgBQAIAAAGgBIABgBIAEAAIABAAIAAgBQAMABAHgDIACgBIATgBIACAAIAAgCQAKABAHgCIACAAIAngEIACAAIAAgCIAMAAIACAAIARAAIABAAIAAgCIAaAAIACAAIAOABIAAABIATAAIABAAIAAgCIAVAAIACAAIANABIABABIAIAAIACAAIAOABIAAABIABAAIACAAIAOABIAAABQBkAPBXAdQBzAmByAoQByAoBsAtQBsAuBoAyQBUAqBTAsQAEADAGACIAAACQAIADAGAEIACABIALAGIABAAIAKAHIAAAAIAKAEIAAACQBkA2BWBDQBWBFBSBIQA6A0A2A2IAIAHIABABIAFAEIAAABIAIAIIABABQADAGAFADIAAABIAIAIIABABIAIAIIAAAAIACABIAAABIAHAIIAAABIAIAIIABAAIABACIAAACIAJAHIAAABIAAADIAGAFIABABIABACIABACIAGAFIAAACIACACIAAABIAHAGIAAABQACADADACIAAABQAEAGAEAEIABABQBFBVAwBoQAXAxAjAjIABAAQADARgLgFIgBABQgJAMgTADIAAABQgVAEgSgEIgCAAIgFAAIgCAAIgJgCQgKgEgKgCQh+gchzgnIi3hBQhygph2glQh0glh6ggQBPBLBHBUQBGBSBABbQA/BaA7BeQAtBHAnBLQA1BmAuBrQAtBtAjB4QAiB4AUCHQAHA0ACA5QADAXgBAaIAAACIAAANIAAACIAAAMIAAACIAAAMIAAABIAAANIAAACIAAABQABAIgDAEIAAAOIAAABIAAANIAAACIAAALIAAACIAAAMIAAACIAAABQABAJgDADIAAAGIAAABIAAACQACAIgDAEIAAACQABAIgDAEIAAABQgBARgEALIAAACIAAACIAAABQABAJgDADIAAAHIAAACIABAAQADALgGADIAAABIgNAIIgCAAg");
	mask.setTransform(119.174,135.35);

	// Layer_2
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(-0.65,-2.9);
	this.fill._off = true;

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).wait(1).to({_off:false},0).to({regY:-1.9,scaleX:37.035,scaleY:37.035,y:-73.25},18,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AN2VKIgcAAIAAgBQgcgNgWgSIgBAAIgFgGIgCgBIg1gnIgCgBQgDgDgEgDIgBgBIgvghIgBgBIgIgGIgBAAQgCgEgEgCIgBAAIgGgGIgBgBIhRg7IgBgBIgGgHQhIg0hLgyIi3h8Qhdg+hShIQgpgkgugfQhcg9hZhBIiyiCQhDgwhCgyIitiGQhWhEhHhTQg1g+gvhDQg/hbg0hmIgBAAIgEgKIgBgBQgohSgehdIgBAAQgCgHAAgKIgBgBQgBgDAAgFIgBAAIgCgKIAAgBIgBAAIgDgNIgBAAIgBgGIgBAAIgCgKIAAgDIgBAAIgDgMIAAgBIAAAAIgDgMIAAgCIAAgCIgBAAQAAgGgCgFIAAgCIAAgEIgBAAIgDgMIAAgBIAAgEIgBAAIgCgNIAAgCIAAgCIgBgBIgDgNIAAgBIAAgDIgBAAQAAgIgCgHIAAgBIAAgDIgBAAQgBgIgCgGIAAgDIAAgDIAAAAIgDgRIAAgCQgCgHAAgJIgBAAIAAgNIAAgCIgBAAIgBgOIAAgBIAAgEIgBAAIgBgNIAAgCIAAgCIgBAAIgBgOIAAgBIAAAAIgBgOIAAgCIgBAAIgBgNIAAgDIAAgMIAAgBIAAgCIgBAAIgBgOIAAgBIAAgMIgBAAIgBgOIAAgCIAAgaIAAgBIAAgXIACAAIAAgCIAAgIIAAgCIAAgSIACAAIAAgCIAAgVIACAAIAAgCIAAgiQAKiQAeh7IAShDIgCAAQgEABgBgEQAEAAACgBIABgBIACgBIACAAIAAgDIAGAAIACAAQACgBADAAIACAAQADgDAGABIABAAQADgCAEABIACAAIACAAIABAAIAAgCQAJABAFgDIACAAIAkgFIACAAIAAgCQAIABAEgCIABgBIAjgEIACAAIAAgCQAHABAFgCIABgBQAQgDARgBIACAAIAAgBQAIAAAGgBIABgBIAEAAIABAAIAAgBQAMABAHgDIACgBIATgBIACAAIAAgCQAKABAHgCIACAAIAngEIACAAIAAgCIAMAAIACAAIARAAIABAAIAAgCIAaAAIACAAIAOABIAAABIATAAIABAAIAAgCIAVAAIACAAIANABIABABIAIAAIACAAIAOABIAAABIABAAIACAAIAOABIAAABQBkAPBXAdQBzAmByAoQByAoBsAtQBsAuBoAyQBUAqBTAsQAEADAGACIAAACQAIADAGAEIACABIALAGIABAAIAKAHIAAAAIAKAEIAAACQBkA2BWBDQBWBFBSBIQA6A0A2A2IAIAHIABABIAFAEIAAABIAIAIIABABQADAGAFADIAAABIAIAIIABABIAIAIIAAAAIACABIAAABIAHAIIAAABIAIAIIABAAIABACIAAACIAJAHIAAABIAAADIAGAFIABABIABACIABACIAGAFIAAACIACACIAAABIAHAGIAAABQACADADACIAAABQAEAGAEAEIABABQBFBVAwBoQAXAxAjAjIABAAQADARgLgFIgBABQgJAMgTADIAAABQgVAEgSgEIgCAAIgFAAIgCAAIgJgCQgKgEgKgCQh+gchzgnIi3hBQhygph2glQh0glh6ggQBPBLBHBUQBGBSBABbQA/BaA7BeQAtBHAnBLQA1BmAuBrQAtBtAjB4QAiB4AUCHQAHA0ACA5QADAXgBAaIAAACIAAANIAAACIAAAMIAAACIAAAMIAAABIAAANIAAACIAAABQABAIgDAEIAAAOIAAABIAAANIAAACIAAALIAAACIAAAMIAAACIAAABQABAJgDADIAAAGIAAABIAAACQACAIgDAEIAAACQABAIgDAEIAAABQgBARgEALIAAACIAAACIAAABQABAJgDADIAAAHIAAACIABAAQADALgGADIAAABIgNAIIgCAAg");
	this.shape.setTransform(119.174,135.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.4,270.7);


(lib.leaf_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AuhVrIgBAAIgCgNIAAgCIAAgCQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgCIgBAAIgCgHIAAAAIgBgOIAAgBIAAgcIAAgBIAAgNIAAgBIAAgOIAAgCIAAgMIABAAIAAgBIAAgGIAAgBIAAgMIAAgCIAAgMIAAgCIAAgMIAAgCIAAgMIAAgBIAAgMIAAgCIAAgpIAAgCIAAgVIAAgCIAAgMIAAgBIAAgMIAAgCIAAgMIAAgCIAAgMIAAAAIgBgOIAAgBIAAgMIAAgCIAAgFIgBAAIgBgOIAAgCIAAgKIAAAAIgBgOIAAgBIAAgGIgBAAIgBgNIAAgCIAAgHIgBAAIgBgPIAAgCQgDgsgFgqIgCAAIgBgOQgIg9gKg9QgWiDgNiNIgBAAIgBgNIAAgCIAAgJIAAAAIgBgOIAAgBIAAgOIgBAAIgBgOIAAgCIAAgWIAAAAIgBgOIAAgBIAAgVIAAgCIAAhDIgBAAIgBgbIAAgCIAAgMIAAgCIAAgMIACAAIAAgCIAAgIIAAgCIAAgMIAAgCIAAgMIABAAIAAgBIAAgCIAAgCIAAgMIACAAIAAgCIAAgPIAAgCIAAgMIABAAIAAgCIAAgFIAAgBIAAgMIACAAIAAgCIAAgFQAOiLAXiEQAWiDAnhyQAohzA3hjQA3hkBDhWQBDhXBKhQQBKhPBThIQBShHBbhAQBDgwBPgkQAtgVA5gIIAAgBQAJABAEgDIACAAIABAAIACAAIAAgCIATgBIACgBQAFgCAKABIACAAIAAgCIAPAAIACAAIAAgCIArAAIABAAIAOABIAAABIAGAAIABAAIASADIAAAAQB/AbBHBUIARATQBKBOA/BcQA+BcA4BiQA4BhAzBpQAwBoAqBxQApBwAjB5QASA6APA/QAQBDAJBKIADAOIAAACIAAAJIAAABQACAHABAJIAAABQAKBjAGBlIAAACQADADgBAJIAAABIAAAMIAAACIAAAOIAAACQADADgBAJIAAABIAAAYIAAACIAAAXIAAABIAAAVIAAACIAAATIAAABIAAAOIAAACIAAAMIAAABIAAACQABAIgDAEIAAAJIAAACIAAABQABAIgDAEIAAACQABAHgCADIAAACQAAALgCAGIAAACIAAACQABAIgDAEQgJBLgKBJQgTCGgiB4IAAACIAAACQgBAJgDAGIAAACQABAHgDADIAAAEIAAABIAAACQACAIgDAEIAAACQABAHgDADIAAACQgCAcgRANIAAABQgIAEgGgDIgBgBQgEgDgGgBQgNgRgFgZQgGgYgHgVQgohvgvhlQgyhog9hdIh6i5Qg9heg8hfQg7heg0hmQgzhlgWiEIAAgBIgBgNIAAgDQgcBZgjBVQguBsgzBnQgyBng2BjQg2Bkg7BeQg7BfhBBaQhABZhFBVIgiArQhEBWhMBPIiYCbQgnAngdAwQgkA8g8AlIgCAAIgGABQgNAAgCgKg");
	var mask_graphics_19 = new cjs.Graphics().p("AuhVrIgBAAIgCgNIAAgCIAAgCQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgCIgBAAIgCgHIAAAAIgBgOIAAgBIAAgcIAAgBIAAgNIAAgBIAAgOIAAgCIAAgMIABAAIAAgBIAAgGIAAgBIAAgMIAAgCIAAgMIAAgCIAAgMIAAgCIAAgMIAAgBIAAgMIAAgCIAAgpIAAgCIAAgVIAAgCIAAgMIAAgBIAAgMIAAgCIAAgMIAAgCIAAgMIAAAAIgBgOIAAgBIAAgMIAAgCIAAgFIgBAAIgBgOIAAgCIAAgKIAAAAIgBgOIAAgBIAAgGIgBAAIgBgNIAAgCIAAgHIgBAAIgBgPIAAgCQgDgsgFgqIgCAAIgBgOQgIg9gKg9QgWiDgNiNIgBAAIgBgNIAAgCIAAgJIAAAAIgBgOIAAgBIAAgOIgBAAIgBgOIAAgCIAAgWIAAAAIgBgOIAAgBIAAgVIAAgCIAAhDIgBAAIgBgbIAAgCIAAgMIAAgCIAAgMIACAAIAAgCIAAgIIAAgCIAAgMIAAgCIAAgMIABAAIAAgBIAAgCIAAgCIAAgMIACAAIAAgCIAAgPIAAgCIAAgMIABAAIAAgCIAAgFIAAgBIAAgMIACAAIAAgCIAAgFQAOiLAXiEQAWiDAnhyQAohzA3hjQA3hkBDhWQBDhXBKhQQBKhPBThIQBShHBbhAQBDgwBPgkQAtgVA5gIIAAgBQAJABAEgDIACAAIABAAIACAAIAAgCIATgBIACgBQAFgCAKABIACAAIAAgCIAPAAIACAAIAAgCIArAAIABAAIAOABIAAABIAGAAIABAAIASADIAAAAQB/AbBHBUIARATQBKBOA/BcQA+BcA4BiQA4BhAzBpQAwBoAqBxQApBwAjB5QASA6APA/QAQBDAJBKIADAOIAAACIAAAJIAAABQACAHABAJIAAABQAKBjAGBlIAAACQADADgBAJIAAABIAAAMIAAACIAAAOIAAACQADADgBAJIAAABIAAAYIAAACIAAAXIAAABIAAAVIAAACIAAATIAAABIAAAOIAAACIAAAMIAAABIAAACQABAIgDAEIAAAJIAAACIAAABQABAIgDAEIAAACQABAHgCADIAAACQAAALgCAGIAAACIAAACQABAIgDAEQgJBLgKBJQgTCGgiB4IAAACIAAACQgBAJgDAGIAAACQABAHgDADIAAAEIAAABIAAACQACAIgDAEIAAACQABAHgDADIAAACQgCAcgRANIAAABQgIAEgGgDIgBgBQgEgDgGgBQgNgRgFgZQgGgYgHgVQgohvgvhlQgyhog9hdIh6i5Qg9heg8hfQg7heg0hmQgzhlgWiEIAAgBIgBgNIAAgDQgcBZgjBVQguBsgzBnQgyBng2BjQg2Bkg7BeQg7BfhBBaQhABZhFBVIgiArQhEBWhMBPIiYCbQgnAngdAwQgkA8g8AlIgCAAIgGABQgNAAgCgKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:101.3,y:139.68}).wait(19).to({graphics:mask_graphics_19,x:101.3,y:139.68}).wait(1));

	// Layer_4
	this.fill = new lib.fill();
	this.fill.name = "fill";
	this.fill.setTransform(117.1,0.05);
	this.fill._off = true;

	var maskedShapeInstanceList = [this.fill];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fill).wait(1).to({_off:false},0).to({scaleX:32.975,scaleY:32.975},18,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("AuhVrIgBAAIgCgNIAAgCIAAgCQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgCIgBAAIgCgHIAAAAIgBgOIAAgBIAAgcIAAgBIAAgNIAAgBIAAgOIAAgCIAAgMIABAAIAAgBIAAgGIAAgBIAAgMIAAgCIAAgMIAAgCIAAgMIAAgCIAAgMIAAgBIAAgMIAAgCIAAgpIAAgCIAAgVIAAgCIAAgMIAAgBIAAgMIAAgCIAAgMIAAgCIAAgMIAAAAIgBgOIAAgBIAAgMIAAgCIAAgFIgBAAIgBgOIAAgCIAAgKIAAAAIgBgOIAAgBIAAgGIgBAAIgBgNIAAgCIAAgHIgBAAIgBgPIAAgCQgDgsgFgqIgCAAIgBgOQgIg9gKg9QgWiDgNiNIgBAAIgBgNIAAgCIAAgJIAAAAIgBgOIAAgBIAAgOIgBAAIgBgOIAAgCIAAgWIAAAAIgBgOIAAgBIAAgVIAAgCIAAhDIgBAAIgBgbIAAgCIAAgMIAAgCIAAgMIACAAIAAgCIAAgIIAAgCIAAgMIAAgCIAAgMIABAAIAAgBIAAgCIAAgCIAAgMIACAAIAAgCIAAgPIAAgCIAAgMIABAAIAAgCIAAgFIAAgBIAAgMIACAAIAAgCIAAgFQAOiLAXiEQAWiDAnhyQAohzA3hjQA3hkBDhWQBDhXBKhQQBKhPBThIQBShHBbhAQBDgwBPgkQAtgVA5gIIAAgBQAJABAEgDIACAAIABAAIACAAIAAgCIATgBIACgBQAFgCAKABIACAAIAAgCIAPAAIACAAIAAgCIArAAIABAAIAOABIAAABIAGAAIABAAIASADIAAAAQB/AbBHBUIARATQBKBOA/BcQA+BcA4BiQA4BhAzBpQAwBoAqBxQApBwAjB5QASA6APA/QAQBDAJBKIADAOIAAACIAAAJIAAABQACAHABAJIAAABQAKBjAGBlIAAACQADADgBAJIAAABIAAAMIAAACIAAAOIAAACQADADgBAJIAAABIAAAYIAAACIAAAXIAAABIAAAVIAAACIAAATIAAABIAAAOIAAACIAAAMIAAABIAAACQABAIgDAEIAAAJIAAACIAAABQABAIgDAEIAAACQABAHgCADIAAACQAAALgCAGIAAACIAAACQABAIgDAEQgJBLgKBJQgTCGgiB4IAAACIAAACQgBAJgDAGIAAACQABAHgDADIAAAEIAAABIAAACQACAIgDAEIAAACQABAHgDADIAAACQgCAcgRANIAAABQgIAEgGgDIgBgBQgEgDgGgBQgNgRgFgZQgGgYgHgVQgohvgvhlQgyhog9hdIh6i5Qg9heg8hfQg7heg0hmQgzhlgWiEIAAgBIgBgNIAAgDQgcBZgjBVQguBsgzBnQgyBng2BjQg2Bkg7BeQg7BfhBBaQhABZhFBVIgiArQhEBWhMBPIiYCbQgnAngdAwQgkA8g8AlIgCAAIgGABQgNAAgCgKg");
	this.shape.setTransform(101.3,139.68);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202.6,279.4);


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

	// Layer_7
	this.ball = new lib.ball();
	this.ball.name = "ball";
	this.ball.setTransform(429.1,311.45,0.2369,0.2369,0,0,0,38.2,38.2);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

	// Layer_6
	this.leaf_15 = new lib.leaf_15();
	this.leaf_15.name = "leaf_15";
	this.leaf_15.setTransform(703.5,869.9);

	this.leaf_14 = new lib.leaf_14();
	this.leaf_14.name = "leaf_14";
	this.leaf_14.setTransform(543.6,964.05,1,1,0,0,0,47.3,35.7);

	this.leaf_13 = new lib.leaf_13();
	this.leaf_13.name = "leaf_13";
	this.leaf_13.setTransform(359.5,817,1,1,0,0,0,68.7,53.2);

	this.leaf_12 = new lib.leaf_12();
	this.leaf_12.name = "leaf_12";
	this.leaf_12.setTransform(107.7,825.2,1,1,0,0,0,141.6,35.1);

	this.leaf_11 = new lib.leaf_11();
	this.leaf_11.name = "leaf_11";
	this.leaf_11.setTransform(697,652.85);

	this.leaf_10 = new lib.leaf_10();
	this.leaf_10.name = "leaf_10";
	this.leaf_10.setTransform(609.85,727.1,1,1,0,0,0,92.4,37.2);

	this.leaf_9 = new lib.leaf_9();
	this.leaf_9.name = "leaf_9";
	this.leaf_9.setTransform(334.4,658.2);

	this.leaf_8 = new lib.leaf_8();
	this.leaf_8.name = "leaf_8";
	this.leaf_8.setTransform(82.55,651.4,1,1,0,0,0,168.9,77.5);

	this.leaf_7 = new lib.leaf_7();
	this.leaf_7.name = "leaf_7";
	this.leaf_7.setTransform(743,499.1,1,1,0,0,0,86.8,91.8);

	this.leaf_6 = new lib.leaf_6();
	this.leaf_6.name = "leaf_6";
	this.leaf_6.setTransform(585.55,509.8,1,1,0,0,0,24.6,38.7);

	this.leaf_5 = new lib.leaf_5();
	this.leaf_5.name = "leaf_5";
	this.leaf_5.setTransform(185.05,372.7);

	this.leaf_4 = new lib.leaf_4();
	this.leaf_4.name = "leaf_4";
	this.leaf_4.setTransform(44.7,438.05,1,1,0,0,0,33.5,55);

	this.leaf_3 = new lib.leaf_3();
	this.leaf_3.name = "leaf_3";
	this.leaf_3.setTransform(808.25,277.05,1,1,0,0,0,37.7,92.8);

	this.leaf_2 = new lib.leaf_2();
	this.leaf_2.name = "leaf_2";
	this.leaf_2.setTransform(419.05,345.8,1,1,0,0,0,105.2,120.1);

	this.leaf_1 = new lib.leaf_1();
	this.leaf_1.name = "leaf_1";
	this.leaf_1.setTransform(606.7,171.65,1,1,0,0,0,119.2,135.3);

	this.leaf_0 = new lib.leaf_0();
	this.leaf_0.name = "leaf_0";
	this.leaf_0.setTransform(166.15,214.4,1,1,0,0,0,101.3,139.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.leaf_0},{t:this.leaf_1},{t:this.leaf_2},{t:this.leaf_3},{t:this.leaf_4},{t:this.leaf_5},{t:this.leaf_6},{t:this.leaf_7},{t:this.leaf_8},{t:this.leaf_9},{t:this.leaf_10},{t:this.leaf_11},{t:this.leaf_12},{t:this.leaf_13},{t:this.leaf_14},{t:this.leaf_15}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,136,83,0.996)").s().p("EBNOAHeIAAgCQgCgLAAgOQANgdgEgjIAAgCIAAgCIAAgMIACAAQAGgRACgYQANiMAnhxQAohzA7hdQgpAbgxATQhwAqiAAbIAAABQgJACgGgDIgCAAQgGAAABgHQAVg5AhgsQAhgrAngmIAbgaQAagYAdgXQBXhDBngzIADAAIAAE0IAAEyIAADPQg/ArhVATQgQADgNAAQgYAAgQgMgEhQmAD0IAAkzIAAkzIAAgCIAAgaQBngyCBgcQAwgKA7gBIAAgCIAMAAIABAAIAOABIAAABIAJAAIACAAIANAAIAAABIAEAAIACAAIARADIAAABIADAAIABAAIAPACIAAABQAFAAADAEIAAABIAAACQAFACgCAIIgBAAIAAACIABACIAAACQASARgDAnIAAACQADAIgCANIAAABIAAAtIAAACIAAAOIAAABIAAACQACAIgDAEIAAACIAAAMIAAABIAAACQABAIgDAEIAAACIAAACIAAABQABAJgDADQgFAwgKAqQgLAqgMAnQgjB3g+BcQg9BdhTBIQhSBHhdA9IAAi1g");
	this.shape.setTransform(386.25,344.5474);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(56,120,77,0.996)").s().p("AoUDeQgNgCgEgJIgBAAIgBgjQATiGAih3QAVhKAWhHIE0AAIEzAAIE0AAIBUAAQhUAuhgAjQhwAph8AgIjyBAQg9AOg6AVQhwAphTBHQgUASgRAVQgbAggwAJg");
	this.shape_1.setTransform(93.55,4.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-129.65,-18,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-129.65,1.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_4
	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(-129.65,-18,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243D30").s().p("EBLzBQnIk0AAIkzAAIk0AAIk0AAIk0AAIk0AAIkzAAIk0AAIk1AAIkzAAIk0AAIk0AAIkzAAIk1AAIk0AAIkyAAIk0AAIkzAAIk1AAIk0AAIkzAAIk0AAIk0AAIk0AAIk0AAIkzAAIk0AAIk0AAIk0AAIk0AAIkzAAIk0AAIigAAIAAkzIAAk0IAAk1IAAkzIAAk0IAAk0IAAkzIAAk1IAAkzIAAk0IAAk0IAAkzIAAk1IAAk0IAAkzIAAk0IAAkzIAAk0IAAk0IAAkzIAAk0IAAk0IAAk0IAAk0IAAkzIAAk0IAAk0IAAk0IAAk0IAAkzIAAk0IAAk0IAAk0IAAigIEzAAIE0AAIE1AAIEzAAIE0AAIE0AAIEzAAIE1AAIEzAAIE0AAIE0AAIEzAAIE1AAIE0AAIEzAAIE0AAIEzAAIE0AAIE0AAIE0AAIEzAAIE0AAIE0AAIE0AAIEzAAIE0AAIE0AAIE0AAIE0AAIEzAAIE0AAIE0AAIE0AAICgAAIAAE0IAAE0IAAEzIAAE0IAAE1IAAEzIAAE0IAAEzIAAE0IAAE1IAAEzIAAE0IAAE0IAAEzIAAE1IAAE0IAAEyIAAE0IAAEzIAAE1IAAE0IAAEzIAAE0IAAE0IAAE0IAAE0IAAEzIAAE0IAAE0IAAE0IAAE0IAAEzIAAE0IAACgIk0AAg");
	this.shape_2.setTransform(386.25,497.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_6_copy
	this.leaf_31 = new lib.leaf_15();
	this.leaf_31.name = "leaf_31";
	this.leaf_31.setTransform(703.5,1901.7);

	this.leaf_30 = new lib.leaf_14();
	this.leaf_30.name = "leaf_30";
	this.leaf_30.setTransform(543.6,1995.85,1,1,0,0,0,47.3,35.7);

	this.leaf_29 = new lib.leaf_13();
	this.leaf_29.name = "leaf_29";
	this.leaf_29.setTransform(359.5,1848.8,1,1,0,0,0,68.7,53.2);

	this.leaf_28 = new lib.leaf_12();
	this.leaf_28.name = "leaf_28";
	this.leaf_28.setTransform(107.7,1857,1,1,0,0,0,141.6,35.1);

	this.leaf_27 = new lib.leaf_11();
	this.leaf_27.name = "leaf_27";
	this.leaf_27.setTransform(697,1684.65);

	this.leaf_26 = new lib.leaf_10();
	this.leaf_26.name = "leaf_26";
	this.leaf_26.setTransform(609.85,1758.9,1,1,0,0,0,92.4,37.2);

	this.leaf_25 = new lib.leaf_9();
	this.leaf_25.name = "leaf_25";
	this.leaf_25.setTransform(334.4,1690);

	this.leaf_24 = new lib.leaf_8();
	this.leaf_24.name = "leaf_24";
	this.leaf_24.setTransform(82.55,1683.2,1,1,0,0,0,168.9,77.5);

	this.leaf_23 = new lib.leaf_7();
	this.leaf_23.name = "leaf_23";
	this.leaf_23.setTransform(743,1530.9,1,1,0,0,0,86.8,91.8);

	this.leaf_22 = new lib.leaf_6();
	this.leaf_22.name = "leaf_22";
	this.leaf_22.setTransform(585.55,1541.6,1,1,0,0,0,24.6,38.7);

	this.leaf_21 = new lib.leaf_5();
	this.leaf_21.name = "leaf_21";
	this.leaf_21.setTransform(185.05,1404.5);

	this.leaf_20 = new lib.leaf_4();
	this.leaf_20.name = "leaf_20";
	this.leaf_20.setTransform(44.7,1469.85,1,1,0,0,0,33.5,55);

	this.leaf_19 = new lib.leaf_3();
	this.leaf_19.name = "leaf_19";
	this.leaf_19.setTransform(808.25,1308.85,1,1,0,0,0,37.7,92.8);

	this.leaf_17 = new lib.leaf_2();
	this.leaf_17.name = "leaf_17";
	this.leaf_17.setTransform(419.05,1377.6,1,1,0,0,0,105.2,120.1);

	this.leaf_18 = new lib.leaf_1();
	this.leaf_18.name = "leaf_18";
	this.leaf_18.setTransform(606.7,1203.45,1,1,0,0,0,119.2,135.3);

	this.leaf_16 = new lib.leaf_0();
	this.leaf_16.name = "leaf_16";
	this.leaf_16.setTransform(166.15,1246.2,1,1,0,0,0,101.3,139.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.leaf_16},{t:this.leaf_18},{t:this.leaf_17},{t:this.leaf_19},{t:this.leaf_20},{t:this.leaf_21},{t:this.leaf_22},{t:this.leaf_23},{t:this.leaf_24},{t:this.leaf_25},{t:this.leaf_26},{t:this.leaf_27},{t:this.leaf_28},{t:this.leaf_29},{t:this.leaf_30},{t:this.leaf_31}]}).wait(1));

	// Layer_1_copy
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(56,120,77,0.996)").s().p("AoUDeQgNgCgEgJIgBAAIgBgjQATiGAih3QAVhKAWhHIE0AAIEzAAIE0AAIBUAAQhUAuhgAjQhwAph8AgIjyBAQg9AOg6AVQhwAphTBHQgUASgRAVQgbAggwAJg");
	this.shape_3.setTransform(93.55,1036.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(57,136,83,0.996)").s().p("EBNOAHeIAAgCQgCgLAAgOQANgdgEgjIAAgCIAAgCIAAgMIACAAQAGgRACgYQANiMAnhxQAohzA7hdQgpAbgxATQhwAqiAAbIAAABQgJACgGgDIgCAAQgGAAABgHQAVg5AhgsQAhgrAngmIAbgaQAagYAdgXQBXhDBngzIADAAIAAE0IAAEyIAADPQg/ArhVATQgQADgNAAQgYAAgQgMgEhQmAD0IAAkzIAAkzIAAgCIAAgaQBngyCBgcQAwgKA7gBIAAgCIAMAAIABAAIAOABIAAABIAJAAIACAAIANAAIAAABIAEAAIACAAIARADIAAABIADAAIABAAIAPACIAAABQAFAAADAEIAAABIAAACQAFACgCAIIgBAAIAAACIABACIAAACQASARgDAnIAAACQADAIgCANIAAABIAAAtIAAACIAAAOIAAABIAAACQACAIgDAEIAAACIAAAMIAAABIAAACQABAIgDAEIAAACIAAACIAAABQABAJgDADQgFAwgKAqQgLAqgMAnQgjB3g+BcQg9BdhTBIQhSBHhdA9IAAi1g");
	this.shape_4.setTransform(386.25,1376.3474);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_2_copy
	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(-129.65,1013.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_3_copy
	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(-129.65,1033.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_4_copy
	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(-129.65,1013.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer_5_copy
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243D30").s().p("EBLzBQnIk0AAIkzAAIk0AAIk0AAIk0AAIk0AAIkzAAIk0AAIk1AAIkzAAIk0AAIk0AAIkzAAIk1AAIk0AAIkyAAIk0AAIkzAAIk1AAIk0AAIkzAAIk0AAIk0AAIk0AAIk0AAIkzAAIk0AAIk0AAIk0AAIk0AAIkzAAIk0AAIigAAIAAk0IAAk0IAAkzIAAk0IAAk0IAAk0IAAkzIAAk0IAAk0IAAk0IAAk0IAAkzIAAk0IAAk0IAAk0IAAk0IAAkzIAAkzIAAk0IAAk1IAAkzIAAk0IAAkzIAAk1IAAk0IAAkzIAAk0IAAk0IAAk0IAAk0IAAk0IAAkzIAAk0IAAigIEzAAIE0AAIE1AAIEzAAIE0AAIE0AAIEzAAIE1AAIEzAAIE0AAIE0AAIEzAAIE1AAIE0AAIEzAAIE0AAIEzAAIE0AAIE0AAIE0AAIEzAAIE0AAIE0AAIE0AAIEzAAIE0AAIE0AAIE0AAIE0AAIEzAAIE0AAIE0AAIE0AAICgAAIAAE0IAAE0IAAE0IAAE0IAAE0IAAEzIAAE0IAAE0IAAE0IAAE0IAAEzIAAE0IAAE0IAAE0IAAEzIAAE0IAAEzIAAE0IAAE0IAAEzIAAE0IAAE0IAAE0IAAE0IAAEzIAAE0IAAE0IAAE0IAAE0IAAE0IAAEzIAAE0IAAE0IAACgIk0AAg");
	this.shape_5.setTransform(386.25,1529.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.page, new cjs.Rectangle(-129.6,-18,1032,2063.8), null);


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

	// Layer_2
	this.page = new lib.page();
	this.page.name = "page";
	this.page.setTransform(509.9,401.9,1,1,0,0,0,383.9,383.9);

	this.timeline.addTween(cjs.Tween.get(this.page).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(508.4,384,520.0000000000001,1679.8000000000002);
// library properties:
lib.properties = {
	id: '854620DD4A16F742838C9B46504B8515',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#243D30",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_6.png", id:"CachedBmp_6"},
		{src:"images/CachedBmp_5.png", id:"CachedBmp_5"},
		{src:"images/CachedBmp_4.png", id:"CachedBmp_4"},
		{src:"images/CachedBmp_3.png", id:"CachedBmp_3"},
		{src:"images/CachedBmp_2.png", id:"CachedBmp_2"},
		{src:"images/CachedBmp_1.png", id:"CachedBmp_1"}
	],
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