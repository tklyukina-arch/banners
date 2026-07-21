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



(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,340);


(lib.render = function() {
	this.initialize(img.render);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,765,200);// helper functions:

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


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C3F134").s().p("Eh19ASwMAAAglfMDr7AAAMAAAAlfg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-755,-120,1510.1,240), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F2B19").s().p("AgJBZIAAgkQgZgBgOgOQgOgPAAgXQAAgXAOgOQAOgOAZgBIAAgkIASAAIAAAkQAaABAOAOQAOAOAAAXQAAAXgOAPQgOAOgaABIAAAkgAAJAkQAQAAAJgJQAJgKAAgRQAAgQgJgKQgJgJgQAAgAghgaQgKAKABAQQgBARAKAKQAJAJAPAAIAAhHQgPAAgJAJg");
	this.shape.setTransform(350.9,11.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F2B19").s().p("AgwBHIAAiLIATAAIAAAPQANgRATAAQAVAAAMAOQANAOAAAZQAAAYgNAOQgMAOgVAAQgTAAgNgRIAAA1gAgRgxQgIAEgEAGIAAArQAEAGAIAEQAIAEAIAAQANAAAJgKQAIgJAAgQQAAgQgIgKQgJgKgNAAQgIAAgIAEg");
	this.shape_1.setTransform(338.425,12.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F2B19").s().p("AgJAJQgDgEAAgFQAAgFADgDQAFgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_2.setTransform(328.75,15.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F2B19").s().p("AAmAzIAAhMIgiBMIgGAAIgjhMIAABMIgTAAIAAhlIAZAAIAfBIIAghIIAZAAIAABlg");
	this.shape_3.setTransform(319.475,11.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F2B19").s().p("AglAmQgNgPAAgXQAAgWANgPQAPgPAWAAQAXAAAOAPQAOAPAAAWQAAAXgOAPQgOAPgXAAQgWAAgPgPgAgXgYQgIAKAAAOQAAAPAIAKQAJALAOAAQAPAAAIgLQAIgKAAgPQAAgOgIgKQgJgLgOAAQgOAAgJALg");
	this.shape_4.setTransform(306.675,11.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F2B19").s().p("AAnBAIAAgaIhNAAIAAAaIgQAAIAAgrIAJAAQAKgQAEgsIACgYIBIAAIAABUIAMAAIAAArgAgOgiQgDApgKAOIAzAAIAAhDIglAAg");
	this.shape_5.setTransform(293.85,12.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F2B19").s().p("AgJAJQgDgEAAgFQAAgFADgDQAFgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgFgEg");
	this.shape_6.setTransform(284.65,15.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F2B19").s().p("AhCAzIAAhlIATAAIAABUIAmAAIAAhUIASAAIAABUIAoAAIAAhUIATAAIAABlg");
	this.shape_7.setTransform(274.1,11.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F2B19").s().p("AgfAtQgMgKAAgPQAAgRAMgIQAKgIAOAAQAUAAAMANIAAgQQAAgJgHgGQgHgFgLAAQgQAAgNANIgIgNQAQgQAYAAQASAAALAIQAMAJAAASIAABEIgTAAIAAgLQgMANgUAAQgOAAgKgIgAgRAFQgGAGAAAJQAAAJAGAFQAHAGAKAAQAQAAAJgMIAAgRQgJgLgQAAQgKAAgHAFg");
	this.shape_8.setTransform(259.475,11.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F2B19").s().p("AAZAzIAAgsIgxAAIAAAsIgTAAIAAhlIATAAIAAApIAxAAIAAgpIATAAIAABlg");
	this.shape_9.setTransform(248.425,11.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F2B19").s().p("AgfAtQgMgKAAgPQAAgRAMgIQAKgIAOAAQAUAAAMANIAAgQQAAgJgHgGQgHgFgLAAQgQAAgNANIgIgNQAQgQAYAAQASAAALAIQAMAJAAASIAABEIgTAAIAAgLQgMANgUAAQgOAAgKgIgAgRAFQgGAGAAAJQAAAJAGAFQAHAGAKAAQAQAAAJgMIAAgRQgJgLgQAAQgKAAgHAFg");
	this.shape_10.setTransform(230.375,11.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F2B19").s().p("AAZAzIAAgsIgxAAIAAAsIgTAAIAAhlIATAAIAAApIAxAAIAAgpIATAAIAABlg");
	this.shape_11.setTransform(219.325,11.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1F2B19").s().p("AAaAzIAAgmIgZAAIgXAmIgWAAIAagnQgLgCgHgIQgGgHAAgNQAAgOAIgIQAIgKAQAAIA3AAIAABlgAgTgdQgFAEABAHQAAAPAPAAIAiAAIAAgeIgiAAQgHAAgEAEg");
	this.shape_12.setTransform(201.6,11.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F2B19").s().p("AAZAzIAAhKIgyBKIgSAAIAAhlIATAAIAABIIAxhIIATAAIAABlg");
	this.shape_13.setTransform(189.575,11.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1F2B19").s().p("AAgBAIAAgaIhPAAIAAhlIASAAIAABUIAvAAIAAhUIATAAIAABUIAMAAIAAArg");
	this.shape_14.setTransform(178.1,12.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1F2B19").s().p("AgfAtQgMgKAAgPQAAgRAMgIQAKgIAOAAQAUAAAMANIAAgQQAAgJgHgGQgHgFgLAAQgQAAgNANIgIgNQAQgQAYAAQASAAALAIQAMAJAAASIAABEIgTAAIAAgLQgMANgUAAQgOAAgKgIgAgRAFQgGAGAAAJQAAAJAGAFQAHAGAKAAQAQAAAJgMIAAgRQgJgLgQAAQgKAAgHAFg");
	this.shape_15.setTransform(165.375,11.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1F2B19").s().p("AgwBHIAAiLIATAAIAAAPQANgRATAAQAVAAAMAOQANAOAAAZQAAAYgNAOQgMAOgVAAQgTAAgNgRIAAA1gAgRgxQgIAEgEAGIAAArQAEAGAIAEQAIAEAIAAQANAAAJgKQAIgJAAgQQAAgQgIgKQgJgKgNAAQgIAAgIAEg");
	this.shape_16.setTransform(154.825,12.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1F2B19").s().p("AgfAtQgMgKAAgPQAAgRAMgIQAKgIAOAAQAUAAAMANIAAgQQAAgJgHgGQgHgFgLAAQgQAAgNANIgIgNQAQgQAYAAQASAAALAIQAMAJAAASIAABEIgTAAIAAgLQgMANgUAAQgOAAgKgIgAgRAFQgGAGAAAJQAAAJAGAFQAHAGAKAAQAQAAAJgMIAAgRQgJgLgQAAQgKAAgHAFg");
	this.shape_17.setTransform(142.075,11.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1F2B19").s().p("AgwAiQAIAAAFgNQAGgPADggIACgZIBJAAIAABkIgTAAIAAhTIglAAIgBAJQgDAsgLASQgJAPgRAAg");
	this.shape_18.setTransform(130.075,11.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1F2B19").s().p("AAWAzIghgsIgPAQIAAAcIgTAAIAAhlIATAAIAAAzIAwgzIAYAAIgsAuIAsA3g");
	this.shape_19.setTransform(119.35,11.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1F2B19").s().p("AgiAnQgPgPAAgYQAAgVAOgQQAPgPAVAAQAWAAAOAQQANAPAAAXIAAAEIhPAAQABAOAJAIQAKAKANAAQASAAAMgMIAJAMQgPAPgaAAQgVAAgPgOgAAfgGQAAgMgHgJQgJgKgOAAQgNAAgJAKQgIAJAAAMIA8AAIAAAAg");
	this.shape_20.setTransform(107.5,11.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1F2B19").s().p("AAmBAIAAgaIhLAAIAAAaIgRAAIAAgrIAJAAQAKgQAEgsIACgYIBJAAIAABUIALAAIAAArgAgOgiQgEApgJAOIA0AAIAAhDIgmAAg");
	this.shape_21.setTransform(94.8,12.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1F2B19").s().p("AAaAzIAAgmIgZAAIgXAmIgWAAIAagnQgLgCgGgIQgIgHABgNQgBgOAJgIQAIgKAQAAIA3AAIAABlgAgTgdQgEAEAAAHQAAAPAPAAIAiAAIAAgeIgiAAQgHAAgEAEg");
	this.shape_22.setTransform(77.05,11.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1F2B19").s().p("AgfAtQgMgKAAgPQAAgRAMgIQAKgIAOAAQAUAAAMANIAAgQQAAgJgHgGQgHgFgLAAQgQAAgNANIgIgNQAQgQAYAAQASAAALAIQAMAJAAASIAABEIgTAAIAAgLQgMANgUAAQgOAAgKgIgAgRAFQgGAGAAAJQAAAJAGAFQAHAGAKAAQAQAAAJgMIAAgRQgJgLgQAAQgKAAgHAFg");
	this.shape_23.setTransform(65.025,11.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1F2B19").s().p("AAZAzIAAgsIgxAAIAAAsIgTAAIAAhlIATAAIAAApIAxAAIAAgpIATAAIAABlg");
	this.shape_24.setTransform(53.975,11.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1F2B19").s().p("AgJAzIAAhUIgdAAIAAgRIBNAAIAAARIgeAAIAABUg");
	this.shape_25.setTransform(41.925,11.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1F2B19").s().p("AAWAzIgggsIgQAQIAAAcIgTAAIAAhlIATAAIAAAzIAwgzIAXAAIgrAuIAsA3g");
	this.shape_26.setTransform(32.2,11.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1F2B19").s().p("AgiAnQgPgPAAgYQAAgVAOgQQAOgPAWAAQAWAAAOAQQANAPAAAXIAAAEIhPAAQABAOAJAIQAJAKAOAAQASAAAMgMIAJAMQgPAPgZAAQgXAAgOgOgAAfgGQAAgMgHgJQgJgKgOAAQgOAAgIAKQgIAJgBAMIA9AAIAAAAg");
	this.shape_27.setTransform(20.35,11.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1F2B19").s().p("AglAmQgNgPAAgXQAAgWANgPQAPgPAWAAQAXAAAOAPQAOAPAAAWQAAAXgOAPQgOAPgXAAQgWAAgPgPgAgXgYQgIAKAAAOQAAAPAIAKQAJALAOAAQAPAAAIgLQAIgKAAgPQAAgOgIgKQgJgLgOAAQgOAAgJALg");
	this.shape_28.setTransform(8.825,11.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1F2B19").s().p("AgwBHIAAiLIATAAIAAAPQANgRATAAQAVAAAMAOQANAOAAAZQAAAYgNAOQgMAOgVAAQgTAAgNgRIAAA1gAgRgxQgIAEgEAGIAAArQAEAGAIAEQAIAEAIAAQANAAAJgKQAIgJAAgQQAAgQgIgKQgJgKgNAAQgIAAgIAEg");
	this.shape_29.setTransform(-2.475,12.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1F2B19").s().p("AAZAzIAAhUIgxAAIAABUIgTAAIAAhlIBXAAIAABlg");
	this.shape_30.setTransform(-14.625,11.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1F2B19").s().p("AgNASQAFgDAEgGQAEgFABgEIgDAAQgEAAgEgDQgDgEAAgFQAAgFAEgEQADgEAGAAQAFAAAEAFQAFAFAAAIQAAAUgSANg");
	this.shape_31.setTransform(-29.525,16.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1F2B19").s().p("AgIAmIAggmIgggkIARAAIAhAkIghAmgAgpAmIAhgmIghgkIASAAIAgAkIggAmg");
	this.shape_32.setTransform(-38.875,11.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1F2B19").s().p("AAdBGIgxg9IgNAPIAAAuIgVAAIAAiLIAVAAIAABFIA5hFIAaAAIg4BDIA9BIg");
	this.shape_33.setTransform(-50.675,9.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1F2B19").s().p("AAyBGIAAhuIguBuIgHAAIguhuIAABuIgVAAIAAiLIAeAAIAoBkIAphkIAeAAIAACLg");
	this.shape_34.setTransform(-66.575,9.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1F2B19").s().p("AgqA1QgVgVAAggQAAgfAVgVQAVgTAdgBQAkABAUAdIgSAJQgGgIgJgGQgLgFgMgBQgUABgPAPQgOAOAAAXQAAAXAOAPQAPAQAUAAQAMAAALgGQAJgFAGgJIASAJQgUAegkgBQgdAAgVgTg");
	this.shape_35.setTransform(-83.025,9.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1F2B19").s().p("AAYAmIgggmIAggkIASAAIghAkIAhAmgAgIAmIghgmIAhgkIARAAIggAkIAgAmg");
	this.shape_36.setTransform(-97.125,11.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1F2B19").s().p("AggBCQgOgHgHgKIALgNQAIAIALAFQAMAFALAAQAPAAAJgHQAJgGAAgLQAAgWgiAAIgYAAIAAgSIAYAAQAOAAAIgFQAKgGAAgKQAAgKgKgGQgIgGgNAAQgXAAgRAQIgLgNQATgVAhAAQAWAAAOAKQAPAKAAARQAAAOgKAJQgJAHgMACQAMACAKAHQALAKAAAPQAAARgPAMQgPALgYAAQgRAAgPgGg");
	this.shape_37.setTransform(-115.8,9.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1F2B19").s().p("AgqA1QgVgVAAggQAAgfAVgVQAVgTAdgBQAkABAUAdIgSAJQgGgIgJgGQgLgFgMgBQgUABgPAPQgOAOAAAXQAAAXAOAPQAPAQAUAAQAMAAALgGQAJgFAGgJIASAJQgUAegkgBQgdAAgVgTg");
	this.shape_38.setTransform(-129.575,9.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1F2B19").s().p("AAYAmIgggmIAggkIASAAIghAkIAhAmgAgIAmIghgmIAhgkIARAAIggAkIAgAmg");
	this.shape_39.setTransform(-143.675,11.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1F2B19").s().p("AgyA0QgTgUgBggQABgfATgUQAUgUAegBQAfABAUAUQAUAUgBAfQABAggUAUQgUAVgfgBQgeABgUgVgAgjglQgNAOABAXQgBAXANAPQAOAQAVAAQAWAAAOgQQANgPAAgXQAAgXgNgOQgOgPgWgBQgVABgOAPg");
	this.shape_40.setTransform(-162.65,9.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1F2B19").s().p("AgyA0QgTgUgBggQABgfATgUQAUgUAegBQAgABATAUQAUAUgBAfQABAggUAUQgTAVgggBQgeABgUgVgAgjglQgNAOABAXQgBAXANAPQAOAQAVAAQAWAAAOgQQANgPAAgXQAAgXgNgOQgOgPgWgBQgVABgOAPg");
	this.shape_41.setTransform(-178.95,9.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1F2B19").s().p("AgyA0QgUgUAAggQAAgfAUgUQAUgUAegBQAgABATAUQAUAUAAAfQAAAggUAUQgTAVgggBQgeABgUgVgAgjglQgMAOAAAXQAAAXAMAPQAOAQAVAAQAWAAAOgQQANgPAAgXQAAgXgNgOQgOgPgWgBQgVABgOAPg");
	this.shape_42.setTransform(-195.25,9.15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1F2B19").s().p("AAWAzIghgsIgPAQIAAAcIgTAAIAAhlIATAAIAAAzIAwgzIAYAAIgsAuIAsA3g");
	this.shape_43.setTransform(-214.45,11.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1F2B19").s().p("AAZAzIAAhKIgyBKIgSAAIAAhlIATAAIAABIIAxhIIATAAIAABlg");
	this.shape_44.setTransform(-226.925,11.075);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1F2B19").s().p("AA6BAIAAgaIiDAAIAAhlIATAAIAABUIAnAAIAAhUIASAAIAABUIAnAAIAAhUIATAAIAABUIANAAIAAArg");
	this.shape_45.setTransform(-240.475,12.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1F2B19").s().p("AAZBHIAAhJIgyBJIgSAAIAAhkIATAAIAABIIAxhIIATAAIAABkgAgig+IAKgIQAJANAPAAQAQAAAJgNIALAIQgOASgWAAQgVAAgNgSg");
	this.shape_46.setTransform(-255.775,9.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1F2B19").s().p("AglAmQgNgPAAgXQAAgWANgPQAPgPAWAAQAXAAAOAPQAOAPAAAWQAAAXgOAPQgOAPgXAAQgWAAgPgPgAgXgYQgIAKAAAOQAAAPAIAKQAJALAOAAQAPAAAIgLQAIgKAAgPQAAgOgIgKQgJgLgOAAQgOAAgJALg");
	this.shape_47.setTransform(-267.275,11.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1F2B19").s().p("AgwBHIAAiLIATAAIAAAPQANgRATAAQAVAAAMAOQANAOAAAZQAAAYgNAOQgMAOgVAAQgTAAgNgRIAAA1gAgRgxQgIAEgEAGIAAArQAEAGAIAEQAIAEAIAAQANAAAJgKQAIgJAAgQQAAgQgIgKQgJgKgNAAQgIAAgIAEg");
	this.shape_48.setTransform(-278.575,12.875);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1F2B19").s().p("AgJAzIAAhUIgdAAIAAgRIBNAAIAAARIgeAAIAABUg");
	this.shape_49.setTransform(-291.125,11.075);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1F2B19").s().p("AgeAmQgOgPAAgXQAAgWAOgPQAPgPAWAAQAYAAAOASIgNALQgJgMgPAAQgOAAgJAKQgJAKAAAPQAAAQAJAKQAJAKAOAAQAPAAAJgMIANALQgOASgYAAQgWAAgPgPg");
	this.shape_50.setTransform(-300.575,11.075);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1F2B19").s().p("AgfAtQgMgKAAgPQAAgRAMgIQAKgIAOAAQAUAAAMANIAAgQQAAgJgHgGQgHgFgLAAQgQAAgNANIgIgNQAQgQAYAAQASAAALAIQAMAJAAASIAABEIgTAAIAAgLQgMANgUAAQgOAAgKgIgAgRAFQgGAGAAAJQAAAJAGAFQAHAGAKAAQAQAAAJgMIAAgRQgJgLgQAAQgKAAgHAFg");
	this.shape_51.setTransform(-312.325,11.075);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1F2B19").s().p("AggBCQgOgHgHgKIALgNQAIAIALAFQALAFAMAAQAPAAAJgHQAJgGAAgLQAAgWgiAAIgYAAIAAgSIAYAAQANAAAJgFQAKgGAAgKQAAgKgKgGQgJgGgMAAQgYAAgQAQIgKgNQASgVAhAAQAVAAAPAKQAPAKAAARQAAAOgKAJQgJAHgMACQAMACAKAHQALAKAAAPQAAARgPAMQgPALgYAAQgRAAgPgGg");
	this.shape_52.setTransform(-325.6,9.175);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1F2B19").s().p("AgJAJQgDgEAAgFQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_53.setTransform(324.8,-5.925);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1F2B19").s().p("AgeBCQgNgHgHgKIALgNQAPASAYAAQAOAAAIgHQAIgGAAgLQAAgWggAAIgPAAIAAgSIAPAAQANAAAIgFQAJgGAAgKQAAgKgIgGQgJgGgMAAQgUAAgQAQIgLgNQASgVAeAAQAWAAANAKQAOAKAAARQAAAOgKAJQgIAHgMACQAMACAJAHQALAKAAAPQAAASgNALQgOALgYAAQgQAAgOgGg");
	this.shape_54.setTransform(316.325,-11.825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1F2B19").s().p("AgnAzQgNgTAAggQAAgeAPgUQAQgVAbAAQAZAAAPAQIgLAQQgLgOgSAAQgRAAgKAQQgKAOAAAVIAAADQAFgGAKgGQAMgHALAAQAUAAAMALQAOALAAAWQAAATgNANQgPAOgWAAQgcAAgOgVgAgeASQABAOAHAKQAJAMAPAAQAOAAAIgJQAIgIAAgLQAAgNgJgHQgIgGgNAAQgUAAgMASg");
	this.shape_55.setTransform(305.275,-11.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1F2B19").s().p("AgeBCQgNgHgHgKIALgNQAPASAYAAQAOAAAIgHQAIgGAAgLQAAgWggAAIgPAAIAAgSIAPAAQANAAAIgFQAJgGAAgKQAAgKgIgGQgJgGgMAAQgUAAgQAQIgLgNQASgVAeAAQAWAAANAKQAOAKAAARQAAAOgKAJQgIAHgMACQAMACAJAHQALAKAAAPQAAASgNALQgOALgYAAQgQAAgOgGg");
	this.shape_56.setTransform(293.025,-11.825);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1F2B19").s().p("AgnAzQgNgTAAggQAAgeAPgUQAQgVAbAAQAZAAAPAQIgLAQQgLgOgSAAQgRAAgKAQQgKAOAAAVIAAADQAFgGAKgGQAMgHALAAQAUAAAMALQAOALAAAWQAAATgNANQgPAOgWAAQgcAAgOgVgAgeASQABAOAHAKQAJAMAPAAQAOAAAIgJQAIgIAAgLQAAgNgJgHQgIgGgNAAQgUAAgMASg");
	this.shape_57.setTransform(281.975,-11.825);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1F2B19").s().p("AgjA+QgQgKAAgSQAAgNAKgKQAJgJANgEQgegJAAgYQAAgSAQgKQAOgIATAAQAUAAAOAIQAQAKAAASQAAAYgeAJQANAEAJAJQAKAKAAANQAAASgQAKQgOAKgWAAQgVAAgOgKgAgSANQgMAIAAALQAAAJAJAHQAJAGAMAAQANAAAJgGQAJgHAAgJQAAgLgMgIQgJgFgKgBQgJABgJAFgAgTgvQgIAGAAAJQAAAKALAGQAHAEAJACQAKgCAIgEQALgGAAgKQAAgJgJgGQgIgGgMAAQgLAAgIAGg");
	this.shape_58.setTransform(270.225,-11.825);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1F2B19").s().p("AgwBHIAAgQQArgiAOgPQATgTAAgPQAAgMgJgGQgHgFgLAAQgXAAgOARIgNgOQASgWAfAAQAVAAANAKQAPAMAAAUQAAATgSAUQgOARgfAZIBAAAIAAASg");
	this.shape_59.setTransform(258.375,-11.95);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1F2B19").s().p("AAHBGIAAhwIgWAYIgMgNIAkgmIATAAIAACLg");
	this.shape_60.setTransform(243.95,-11.85);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1F2B19").s().p("AAHBGIAAhwIgWAYIgMgNIAlgmIASAAIAACLg");
	this.shape_61.setTransform(232.3,-11.85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1F2B19").s().p("AgeBCQgNgHgHgKIALgNQAPASAYAAQAOAAAIgHQAIgGAAgLQAAgWggAAIgPAAIAAgSIAPAAQANAAAIgFQAJgGAAgKQAAgKgIgGQgJgGgMAAQgUAAgQAQIgLgNQASgVAeAAQAWAAANAKQAOAKAAARQAAAOgKAJQgIAHgMACQAMACAJAHQALAKAAAPQAAASgNALQgOALgYAAQgQAAgOgGg");
	this.shape_62.setTransform(223.125,-11.825);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1F2B19").s().p("AgwBHIAAgQQArgiAOgPQATgTAAgPQAAgMgJgGQgHgFgLAAQgXAAgOARIgNgOQASgWAfAAQAVAAANAKQAPAMAAAUQAAATgSAUQgOARgfAZIBAAAIAAASg");
	this.shape_63.setTransform(211.775,-11.95);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1F2B19").s().p("AAnBGIAAg+IhNAAIAAA+IgVAAIAAiLIAVAAIAAA7IBNAAIAAg7IAVAAIAACLg");
	this.shape_64.setTransform(192.375,-11.85);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1F2B19").s().p("AAnBGIAAg+IhNAAIAAA+IgVAAIAAiLIAVAAIAAA7IBNAAIAAg7IAVAAIAACLg");
	this.shape_65.setTransform(177.225,-11.85);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1F2B19").s().p("AAmBGIAAhuIhMBuIgVAAIAAiLIAWAAIAABrIBLhrIAWAAIAACLg");
	this.shape_66.setTransform(162.05,-11.85);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1F2B19").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_67.setTransform(145.45,-5.925);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1F2B19").s().p("AgIAmIAggmIggglIARAAIAhAlIghAmgAgpAmIAhgmIghglIASAAIAgAlIggAmg");
	this.shape_68.setTransform(136.175,-9.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1F2B19").s().p("AgKBGIAAgOQgegCgSgPQgRgPAAgYQAAgWARgPQASgQAegCIAAgOIAVAAIAAAOQAeACASAPQASAQAAAWQAAAYgSAPQgSAPgeACIAAAOgAALAlQAUgCAMgJQAMgLAAgPQAAgOgMgLQgMgJgUgCgAgqgZQgMALAAAOQAAAPAMALQAMAJAUACIAAhJQgUACgMAJg");
	this.shape_69.setTransform(121.95,-11.85);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1F2B19").s().p("AAmBZIAAhuIhMBuIgVAAIAAiLIAWAAIAABrIBLhrIAWAAIAACLgAgihPIAKgJQAJANAPAAQAQAAAJgNIALAJQgOASgWAAQgVAAgNgSg");
	this.shape_70.setTransform(105.7,-13.725);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#1F2B19").s().p("AAuBGIgMgdIhDAAIgMAdIgXAAIA4iLIAZAAIA4CLgAAcAWIgchJIgbBJIA3AAg");
	this.shape_71.setTransform(90.975,-11.85);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1F2B19").s().p("Ag/AzQANAAAIgOQAJgSAEgvIAEgqIBZAAIAACLIgVAAIAAh5IgyAAIgCAZQgGA8gPAWQgKAQgXAAg");
	this.shape_72.setTransform(76.675,-11.725);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1F2B19").s().p("AAuBGIgMgdIhDAAIgMAdIgXAAIA4iLIAZAAIA4CLgAAcAWIgchJIgbBJIA3AAg");
	this.shape_73.setTransform(62.375,-11.85);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1F2B19").s().p("AAmBGIAAhuIhMBuIgVAAIAAiLIAWAAIAABrIBLhrIAWAAIAACLg");
	this.shape_74.setTransform(47.75,-11.85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1F2B19").s().p("AA0BTIAAgaIhnAAIAAAaIgTAAIAAgsIALAAQARgTAHhCIADgkIBWAAIAAB5IARAAIAAAsgAgRgsQgFBCgPARIBGAAIAAhnIgwAAg");
	this.shape_75.setTransform(33.075,-10.55);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1F2B19").s().p("AguBGIAAiLIBdAAIAAASIhIAAIAAAqIBGAAIAAARIhGAAIAAAsIBIAAIAAASg");
	this.shape_76.setTransform(17.8,-11.85);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1F2B19").s().p("AAyBGIAAhvIguBvIgHAAIguhvIAABvIgVAAIAAiLIAeAAIAoBjIAphjIAeAAIAACLg");
	this.shape_77.setTransform(2.725,-11.85);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1F2B19").s().p("AAYAmIgggmIAgglIASAAIghAlIAhAmgAgIAmIghgmIAhglIARAAIggAlIAgAmg");
	this.shape_78.setTransform(-12.675,-9.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1F2B19").s().p("AgyA0QgUgUAAggQAAgeAUgVQAUgUAeAAQAgAAATAUQATAVABAeQgBAggTAUQgTAVggAAQgeAAgUgVgAgiglQgOAPAAAWQAAAYAOAOQANAQAVAAQAWAAAOgQQANgOAAgYQAAgWgNgPQgOgQgWABQgVgBgNAQg");
	this.shape_79.setTransform(-31.65,-11.85);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1F2B19").s().p("AgyA0QgUgUABggQgBgeAUgVQAUgUAeAAQAgAAATAUQATAVABAeQgBAggTAUQgTAVggAAQgeAAgUgVgAgiglQgOAPAAAWQAAAYAOAOQANAQAVAAQAWAAAOgQQANgOAAgYQAAgWgNgPQgOgQgWABQgVgBgNAQg");
	this.shape_80.setTransform(-47.95,-11.85);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1F2B19").s().p("AgyA0QgTgUAAggQAAgeATgVQAUgUAeAAQAfAAAUAUQATAVAAAeQAAAggTAUQgUAVgfAAQgeAAgUgVgAgiglQgNAPgBAWQABAYANAOQANAQAVAAQAWAAAOgQQANgOAAgYQAAgWgNgPQgOgQgWABQgVgBgNAQg");
	this.shape_81.setTransform(-64.25,-11.85);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1F2B19").s().p("AgsAzIAAhlIATAAIAAAkIAjAAQAQAAAKAKQAIAIAAAOQAAANgIAJQgKALgQAAgAgZAiIAhAAQAJAAAEgFQAEgEAAgHQAAgHgEgFQgEgFgJAAIghAAg");
	this.shape_82.setTransform(-82.55,-9.925);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1F2B19").s().p("AgwAhQAIAAAFgMQAGgPADggIACgZIBJAAIAABkIgTAAIAAhTIglAAIgBAJQgDArgLATQgJAPgRAAg");
	this.shape_83.setTransform(-95.225,-9.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#1F2B19").s().p("AgjAnQgOgPAAgYQAAgVAOgQQAPgPAUAAQAXAAAOAQQANAPAAAXIAAAEIhPAAQABAOAJAIQAJAKAOAAQATAAALgMIAJAMQgPAPgZAAQgWAAgQgOgAAggGQgBgMgHgJQgIgKgQAAQgNAAgIAKQgHAJgCAMIA+AAIAAAAg");
	this.shape_84.setTransform(-106.3,-9.925);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1F2B19").s().p("AgJAzIAAhUIgdAAIAAgRIBNAAIAAARIgeAAIAABUg");
	this.shape_85.setTransform(-118.375,-9.925);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1F2B19").s().p("AgfAtQgMgKAAgPQAAgRAMgIQAKgIAOAAQAUAAAMANIAAgQQAAgJgHgGQgHgFgLAAQgQAAgNANIgIgNQAQgQAYAAQASAAALAIQAMAJAAASIAABEIgTAAIAAgLQgMANgUAAQgOAAgKgIgAgRAFQgGAGAAAJQAAAJAGAFQAHAGAKAAQAQAAAJgMIAAgRQgJgLgQAAQgKAAgHAFg");
	this.shape_86.setTransform(-129.075,-9.925);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1F2B19").s().p("AAmBAIAAgaIhLAAIAAAaIgRAAIAAgrIAJAAQAKgQAEgsIACgYIBIAAIAABUIAMAAIAAArgAgOgiQgEApgJAOIA0AAIAAhDIgmAAg");
	this.shape_87.setTransform(-141.15,-8.625);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#1F2B19").s().p("AglAmQgNgPAAgXQAAgWANgPQAPgPAWAAQAXAAAOAPQAOAPAAAWQAAAXgOAPQgOAPgXAAQgWAAgPgPgAgXgYQgIAKAAAOQAAAPAIAKQAJALAOAAQAPAAAIgLQAIgKAAgPQAAgOgIgKQgJgLgOAAQgOAAgJALg");
	this.shape_88.setTransform(-152.675,-9.925);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1F2B19").s().p("AAmAzIAAhMIgiBMIgGAAIgjhMIAABMIgTAAIAAhlIAZAAIAfBIIAghIIAZAAIAABlg");
	this.shape_89.setTransform(-165.475,-9.925);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1F2B19").s().p("AgfAtQgMgKAAgPQAAgRAMgIQAKgIAOAAQAUAAAMANIAAgQQAAgJgHgGQgHgFgLAAQgQAAgNANIgIgNQAQgQAYAAQASAAALAIQAMAJAAASIAABEIgTAAIAAgLQgMANgUAAQgOAAgKgIgAgRAFQgGAGAAAJQAAAJAGAFQAHAGAKAAQAQAAAJgMIAAgRQgJgLgQAAQgKAAgHAFg");
	this.shape_90.setTransform(-179.025,-9.925);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1F2B19").s().p("AgwAhQAIAAAFgMQAGgPADggIACgZIBJAAIAABkIgTAAIAAhTIglAAIgBAJQgDArgLATQgJAPgRAAg");
	this.shape_91.setTransform(-191.025,-9.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#1F2B19").s().p("AAWAzIgggsIgQAQIAAAcIgTAAIAAhlIATAAIAAAzIAwgzIAYAAIgsAuIAsA3g");
	this.shape_92.setTransform(-201.75,-9.925);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1F2B19").s().p("AgjAnQgOgPAAgYQAAgVAOgQQAPgPAUAAQAXAAAOAQQANAPAAAXIAAAEIhPAAQABAOAJAIQAJAKAOAAQATAAALgMIAJAMQgQAPgZAAQgVAAgQgOgAAggGQgBgMgHgJQgIgKgQAAQgMAAgJAKQgHAJgBAMIA9AAIAAAAg");
	this.shape_93.setTransform(-213.6,-9.925);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1F2B19").s().p("AgzBGIAAiLIA6AAQAVAAAMAMQAMAMAAATQAAATgMAKQgMANgVAAIglAAIAAA2gAgegBIAjAAQALgBAHgGQAHgHAAgLQAAgLgHgHQgHgGgLgBIgjAAg");
	this.shape_94.setTransform(-226.75,-11.85);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#1F2B19").s().p("AgIAJQgEgEAAgFQAAgFAEgDQADgEAFAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_95.setTransform(-242.6,-5.925);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1F2B19").s().p("AgfAtQgMgKAAgPQAAgRAMgIQAKgIAOAAQAUAAAMANIAAgQQAAgJgHgGQgHgFgLAAQgQAAgNANIgIgNQAQgQAYAAQASAAALAIQAMAJAAASIAABEIgTAAIAAgLQgMANgUAAQgOAAgKgIgAgRAFQgGAGAAAJQAAAJAGAFQAHAGAKAAQAQAAAJgMIAAgRQgJgLgQAAQgKAAgHAFg");
	this.shape_96.setTransform(-251.475,-9.925);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1F2B19").s().p("AAmAzIAAhMIgiBMIgGAAIgjhMIAABMIgTAAIAAhlIAZAAIAfBIIAghIIAZAAIAABlg");
	this.shape_97.setTransform(-263.525,-9.925);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1F2B19").s().p("AgfAtQgMgKAAgPQAAgRAMgIQAKgIAOAAQAUAAAMANIAAgQQAAgJgHgGQgHgFgLAAQgQAAgNANIgIgNQAQgQAYAAQASAAALAIQAMAJAAASIAABEIgTAAIAAgLQgMANgUAAQgOAAgKgIgAgRAFQgGAGAAAJQAAAJAGAFQAHAGAKAAQAQAAAJgMIAAgRQgJgLgQAAQgKAAgHAFg");
	this.shape_98.setTransform(-277.075,-9.925);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#1F2B19").s().p("AgwAhQAIAAAFgMQAGgPADggIACgZIBJAAIAABkIgTAAIAAhTIglAAIgBAJQgDArgLATQgJAPgRAAg");
	this.shape_99.setTransform(-289.075,-9.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1F2B19").s().p("AAWAzIghgsIgPAQIAAAcIgTAAIAAhlIATAAIAAAzIAwgzIAXAAIgrAuIAsA3g");
	this.shape_100.setTransform(-299.8,-9.925);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1F2B19").s().p("AgiAnQgPgPAAgYQAAgVAOgQQAOgPAWAAQAWAAAOAQQANAPAAAXIAAAEIhPAAQABAOAJAIQAKAKANAAQASAAAMgMIAJAMQgPAPgZAAQgXAAgOgOgAAfgGQAAgMgHgJQgJgKgOAAQgOAAgIAKQgIAJgBAMIA9AAIAAAAg");
	this.shape_101.setTransform(-311.65,-9.925);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1F2B19").s().p("AgzBGIAAiLIA6AAQAVAAAMAMQAMAMAAATQAAATgMAKQgMANgVAAIglAAIAAA2gAgegBIAiAAQAMgBAHgGQAHgHAAgLQAAgLgHgHQgHgGgMgBIgiAAg");
	this.shape_102.setTransform(-324.8,-11.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-333.5,-23,696.9,46), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1F2B19").s().p("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");
	this.shape.setTransform(21.4,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-331.9,-23.4,707.7,89.80000000000001), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D2B12").s().p("AhUC/QADgaASg5IBsliQACgFAJgJQAIgHAGgEQArgahFD0QgkB7gtCUQgTAfgTAaQgPgoAGgsg");
	this.shape.setTransform(39.2145,-0.6655,0.3807,0.3807);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D2B12").s().p("Ah1EHQgGgCAEgOIAJgYIBFjGQgXgGgKgGQgMgFgGgJIBFghIA4jSQABgGAKgGQAIgGAFgCQAGgBAFANQAFANgCAHIgqDTQA4ASAZAxQAZAzgbAwQggA2hWAnQg9AbgfAAQgJAAgGgCgAgtDIQAogPAXgQQAfgUAPgZQAPgagRgbQgOgYghgRg");
	this.shape_1.setTransform(30.5866,-0.4886,0.3807,0.3807);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D2B12").s().p("AiQCzIBilWQAIgcABgMQACgUgJgVQAXgVAqgFQApgEAhAOQAlAQAMAnQAMAkgQAmQgWAyguAiQgrAfg5APIg/DNQgIAcgnAnQgRgyALgqgAAPjQIgdCZQAmgSAXgUQAbgXASgkQAHgNgHgUQgHgRgLgIQgJgHgXAAIgCAAQgWAAgDAJg");
	this.shape_2.setTransform(12.398,-0.389,0.3807,0.3807);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D2B12").s().p("AirDfQAyjLBOjaIgbgUQgSgNAmgLQAhgLA5gDQA6gEAmAHQArAHgIASQgCAGgKAHQgKAHgHABIiAACIgjCYIA3AHQAHABAJAGQAKAHgCAFQgCAFgIAIQgIAIgFABIhNATIgxCbQAiADA1gBQAnADAVAeQALARhdAJQhuAKgTATIgQgkg");
	this.shape_3.setTransform(-75.0655,0.2709,0.3807,0.3807);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D2B12").s().p("Ah7AzQBBjZARgeIgbgYQgEgEAKgLQAKgMAIgBQESgohPBOIiIAFIghCXQA3AIAaAIQgKAegeAIIg6AGIg4CgIBSADQAuACAVAgQAHAMgUAFQgMADgsAEQhnAIgoAZQgDACgDAAQgaAAA/jTg");
	this.shape_4.setTransform(2.14,0.3088,0.3807,0.3807);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D2B12").s().p("AihD7QgEgQAEgIQCOkPBhihQgCADAfgfQApgpAHALQADAFADAKQADAMAAAFQgZDRgFAbQgcCsgsA+QgFAIgKgCQgJgDgBgKQgEgpAOhEIAQhqQAIg5ADguIi/FOQgEAGgMAGQgLAFgHABIgBAAQgFAAgEgPg");
	this.shape_5.setTransform(-87.9342,-0.1424,0.3807,0.3807);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D2B12").s().p("AifD7QgEgQAEgGQB6jvB1jDIAbgZQAggdALgGQAXgMgUCiQgJBKgTBuQgSBwgpA2QgQAVgKgBQgKgBADgWIAvlFIjEFXQgDAFgNAGQgLAFgHABIAAAAQgGAAgDgQg");
	this.shape_6.setTransform(-44.1512,-0.1388,0.3807,0.3807);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D2B12").s().p("Ai4D9QgGgEgBgIQgDg+A2ikQAchWArh8IgYgPQgYgPAmgNQAigLA+gEQBBgEAwAHQA3AIAHATQACAGgNAKQgMAKgHgBIiugEIgjCaIBiADQAGAAAKAFQAIAEAGAEQAFADgJAQQgJAOgHABIh+AMIg2CdIBuAGQAUArg7ALIg8AIQgnAGgWAJIgHACQgEAAgEgDg");
	this.shape_7.setTransform(102.1716,0.1292,0.3807,0.3807);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D2B12").s().p("AiEEEQgJgGgHgRQgHgRACgOQAYiGAjhmQAqh5BAhiQANgUAtAGQAsAFANAVQBBBnhWCjQhAB6hwBrQgIAHgXABIgDAAQgUAAgIgGgAgegXQhADDAIAnQAigaAqg7QAqg9AdhBQBLikhMgsIgEgBQgbAAg7C6g");
	this.shape_8.setTransform(79.1828,0.6688,0.3807,0.3807);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D2B12").s().p("AiBEHQg5gTBLjjQAchWAlhSQAkhQAUgYQAagKAhACQAmACAOASQBKBghXCnQg+B2hwByQgIAIgXADIgRACQgJAAgGgCgAghgXQg+C+AHArQArgnApg7QAeguAjhCQAdg3ABhDQAChJgkgNIgDgBQgbAAg8C6g");
	this.shape_9.setTransform(-96.9525,0.7069,0.3807,0.3807);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D2B12").s().p("AjCE/QALgtATgpQAPghAagsICBjTIgUjEQAAgHAGgPQAGgMAEgGQAEgFAOAGQANAFACAHIAbB7IBhiWQADgEAJgEQAIgEAFgBQAhgHhEB+QhJCJAEAJIANEdQABAGgIAZQAAAEgMgIQgMgHgCgFQgTgkgLg5IgQhpQg7BggpA/QhKBwgeAAIgEgBg");
	this.shape_10.setTransform(47.2736,-0.4173,0.3807,0.3807);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D2B12").s().p("AjGEZQgGg1AWgxQBejTA6imIgLgUQgHgOAEgDIA6gvQAEgDAOAKQAPAMAEAAIB5AEQAFAAAWAUQAEAFgNAMQgMALgHABIiRAHIhBC+QAugCAXADQAkAGATATQAUAXADAiQADAigRAdQguBNhMApQg/AghEAAQgTAAgUgCgAgPApQgeABgSAIIhNC5QBHgFBNhHQBShLg7gjQgNgIgaAAIgHAAg");
	this.shape_11.setTransform(90.0765,-0.0237,0.3807,0.3807);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D2B12").s().p("AjQDIICMlyIANgjQACgRgNgVQgDgGACgGQACgGAHgCQBFgVBSgEQBjgEAaAhQgYAzgPA1QguCih1DqQgCAFgKAHQgJAHgBgDQgIg7BCisQAkhcBDicQgfgKgpABQgeABg0AJQhOEAhUDDQgMAcgmAfQgNguAQgrg");
	this.shape_12.setTransform(-10.4727,-0.2186,0.3807,0.3807);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D2B12").s().p("AjQEdQgYgCAEgJIC9nkIgNgTQgHgNADgFQAUgYBrgLQB2gMAnApQAEAEgJANQgMARgBAFQgcBrgyCMQg/CygkAnQgDAEgTgEQgSgEACgGQAZhfA0iHQAfhNBAiZQg/gJhaAMQgxCXglBrQhGDPgfAlIgTAAIgQAAg");
	this.shape_13.setTransform(-108.8643,-0.4433,0.3807,0.3807);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D2B12").s().p("AjZD9QAAgVAGgRICjmwIgVgZQgDgEALgKQAMgKAGgBICJgVQAggFAkAJQAiAJAXASQgWAvgNAvQgYBWg5CLQhFCogjAdQgEADgEgOQgFgPACgGQA1i6BzkGQhAgShcAXQhHDyhdDZQgKAWgkAZQgHgQAAgVg");
	this.shape_14.setTransform(67.783,-0.3109,0.3807,0.3807);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D2B12").s().p("AjNELQAegUAjgPQAYgKArgOIA5jbIAchoQAThDAHgiIgCgZQgDgUAFgDQAQgNAjgIQAigHAXAFQAkAHAPAaQAPAagKAiQgMApgjApQgWAbgvAqQBJApAOA2QANAygxA3QgrAxhLAmQhIAkg/AIQgQACgNAAQgsAAgQgXgAgOC6QBmgbAbg4QARgkgcgjQgZgfgjgBgABXjnIgTCDQAmgZAUgaQAZgigBgoQgBgNgegCIgKAAQgVAAgBAJg");
	this.shape_15.setTransform(19.235,-0.2278,0.3807,0.3807);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D2B12").s().p("AhkB2QA4hFBZhoQgvABgegQQglgTAGgmQALhDA8gxQA2gsBJgOIA8ApQgJBmguClQg6DQg3AdQgIgLgFgQQgFgQACgKIAhiNIi4DfQgNAQgoAMQgMgzBpiEgAAsjOQglAlgJAvQAQARAmgBQAngBAKgVQAbg5AIhGQg2AMgmAlg");
	this.shape_16.setTransform(-32.4883,0.1229,0.3807,0.3807);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D2B12").s().p("AibErQgWgFgPgbQgOgbAKgUQAGgMAagJQALgFAggIIDumsQAGgLAXgSQATgOAVgMQAKgGADAaQACASgCATQgPCEgMBNQgTBvgbBcQA6gIARAJQgEAjgSAcQgTAggfAOQgKAFgDgVQgCgSAFgZQg1ABhCAIQhBAIg4AMQgRAvgPAAIgCAAgAg1CuIB/gMIAokeg");
	this.shape_17.setTransform(-58.9525,1.1735,0.3807,0.3807);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D2B12").s().p("AjIEoQgFgLAEgkQAFgmAJgDIBGgZIDqmmQAFgJAUgQIAbgXIAQgOQADgDAJAKQAIAJgBAFIgWDDQgGA8gPBDQgLAwgVBPIBJgCQgCAUgHAeQgIAggHANQgHAMgKACQgOACgKACQgFACgFgDQgFgCgBgGQgCgKgCgrIjlAcIgYArQgHALgNAAIgaADQgOAAgEgHgAgyCtIB/gMIAqkkg");
	this.shape_18.setTransform(109.8316,0.814,0.3807,0.3807);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-117.6,-12.5,235.2,25.1), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D2B12").s().p("AlaBWQgKgFAAgFIADgSQADgNADgFIBWhzQADgEALgCQAKgDAGAAQAEAAgCALQgBAJgDAGIguBVQCWhFCmgfQDFgkB7ApQjJASh0ATQi3Aeh1AvIA4ARQAAAEgKAGQgKAFgFABIhnAMIgBAAQgFAAgIgFg");
	this.shape.setTransform(-0.0188,0.0014,0.3807,0.3807);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-13.6,-3.4,27.2,6.9), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D2B12").s().p("AhbG/QgOgCgGgZQgFgUADgRIAVigQABgEAFgJQAFgJAEgDQADgDAKAEQAKADABAFIAUBNQB2i2gMj4QgCg2gQh6QgMhbAFgiQAAgEANAIQAMAHABAFQAZBsAKByQAMB+gKBnQgJBjgtBeQgmBNhIBdIBqABQAZAAABAMQABALgVAOQgtAchDAAQgSAAgUgCg");
	this.shape.setTransform(0.0297,-0.0321,0.3807,0.3807);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-4.3,-17.1,8.7,34.2), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D2B12").s().p("AplBCQBtgfCdgQQIpg3EagDQgfgJgPgLQgOgMAMgFQAfgOCIAsQAHACAAARQgBAQgHAEIhVAzQgHAFgWAGQgEABgFgGQgGgGACgEIARgpQoGAVoHA8IgOAAQggAAgagOg");
	this.shape.setTransform(-0.0032,-0.019,0.3807,0.3807);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-23.3,-3.1,46.7,6.2), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D2B12").s().p("AhWDIQgYimAniOQAahdA1hbIhHAJQgFABgKgCQgJgCgEgCQgDgCgCgHQgBgHACgDQADgEAIgFQAIgEAGgCICegfQAEgBADADQADACAAAEQgGBXgUAvQgZA4gShuQgWAqgUBaQgVBegHBfQgUD3BRAvQgLAEgKAAQg+AAgXiag");
	this.shape.setTransform(0.0092,-0.0307,0.3807,0.3807);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-3.7,-13.5,7.4,27), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D2B12").s().p("AAYB0QARgSAZgEIA2gHIlCjyQBNASBhBLQCNBrAMAHIADgfQADgSAHgGIBBCfQhVgPhegZg");
	this.shape.setTransform(-0.0314,-0.0015,0.3807,0.3807);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-7.7,-5.9,15.4,11.9), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.car();
	this.instance.setTransform(-180.85,-142.45,0.7058,0.7059);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-186.2,-149.4,372.5,298.8), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.render();
	this.instance.setTransform(-182.5,-79.75,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-431.7,-79.7,861.2,160), null);


(lib.guider = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(51,255,0,0.098)").s().p("AolImIAAxLIRLAAIAARLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guider, new cjs.Rectangle(-55,-55,110,110), null);


(lib.guidel = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(51,255,0,0.098)").s().p("AolImIAAxLIRLAAIAARLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guidel, new cjs.Rectangle(-55,-55,110,110), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnSAE/IAAp9MBOlAAAIAAJ9g");
	mask.setTransform(251.5,31.925);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F2B19").s().p("AAqBZIAAg/IgxAAIgfA/IgkAAIAihEQgLgFgGgHQgRgPAAgZQAAgYARgRQAQgQAYAAIBcAAIAACxgAgigxQgIAIABAKQgBALAIAHQAIAJALAAIA5AAIAAg2Ig5AAQgKAAgJAJg");
	this.shape.setTransform(420.65,53.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F2B19").s().p("AArBZIAAh+IhZB+IgcAAIAAixIAgAAIAAB7IBZh7IAcAAIAACxg");
	this.shape_1.setTransform(402.025,53.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F2B19").s().p("AAtBZIAAhOIhZAAIAABOIggAAIAAixIAgAAIAABEIBZAAIAAhEIAgAAIAACxg");
	this.shape_2.setTransform(382.225,53.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F2B19").s().p("AgVBdQgOAAgMgGQgMgHgHgJQgMgSAAgQQAAgfAbgOQANgHAQgEIAigFIAigFQgBgPgNgJQgOgKgSABQgaAAgMAQIgEAFIgdgOIAFgHQAWgeAsAAQA0AAATAmQAIAQAAAQIAABvIgcAAIAAgiQgJASgUAKQgTAKgUAAIgEAAgAAHADQgYAEgLAFQgSAIAAAPQAAALAIAJQAJAIAMABQASABAQgJQASgKAHgQQAFgMAAgUIgoAFg");
	this.shape_3.setTransform(362.4,53.179);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F2B19").s().p("AAtBZIAAiRIhZAAIAACRIggAAIAAixICZAAIAACxg");
	this.shape_4.setTransform(343.225,53.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F2B19").s().p("AA8BZIAAhrIgyBVIgTAAIgzhVIAABrIggAAIAAixIAdAAIA/BrIBAhrIAdAAIAACxg");
	this.shape_5.setTransform(321.65,53.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F2B19").s().p("AhBBAQgUgZAAgnQAAgmAUgaQALgOASgHQARgIATAAQAqAAAXAdQAVAbAAAlQAAAmgVAaQgXAegqAAQgpAAgYgegAgngsQgNAQAAAcQAAAdANAQQAMASAbAAQAaAAAOgSQAMgQAAgdQAAgcgMgQQgNgSgbAAQgbAAgMASg");
	this.shape_6.setTransform(300.125,53.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F2B19").s().p("AAoBZIgxhMIgjAAIAABMIgfAAIAAixIAfAAIAABMIAjAAIAuhMIAkAAIg3BYIA7BZg");
	this.shape_7.setTransform(283.2,53.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F2B19").s().p("AArBZIAAg/IgyAAIgeA/IglAAIAhhEQgIgEgIgHQgRgRAAgYQAAgYARgRQAQgQAYAAIBbAAIABCxgAgigxQgIAHAAALQABALAGAIQAJAIAKAAIA7AAIAAg1Ig7AAQgLAAgHAIg");
	this.shape_8.setTransform(495.5,15.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F2B19").s().p("AgUBdQgOAAgNgGQgMgHgHgJQgMgSAAgQQAAgOAHgNQAIgLAMgHQANgHAQgEIAigFIAigFQgBgPgNgJQgNgKgUABQgZAAgMAQIgEAFIgdgOIAFgHQAXgeArAAQA1AAASAmQAIAPAAARIAABvIgcAAIAAgiQgIASgUAKQgUAKgUAAIgDAAgAAHADQgZAFgKAEQgRAIgBAPQAAALAJAJQAIAJANAAQAQABARgJQATgKAGgQQAFgMABgUIgpAFg");
	this.shape_9.setTransform(476.8,15.329);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F2B19").s().p("AAtBZIAAhOIhZAAIAABOIggAAIAAixIAgAAIAABEIBZAAIAAhEIAgAAIAACxg");
	this.shape_10.setTransform(457.625,15.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F2B19").s().p("AhFBZIAAixIAgAAIAAA/IAyAAQAYAAARAQQAQAQAAAZQAAAYgQARQgRAQgYAAgAglA6IAwAAQAMAAAHgIQAHgJABgJQgBgKgHgJQgIgIgLAAIgwAAg");
	this.shape_11.setTransform(439.85,15.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1F2B19").s().p("AhQBZIAAgdQAQAAAGgKQAEgHADgWIAOhtIB2AAIAACxIgfAAIAAiUIg9AAIgLBWQgEAhgMAOQgMAPgWAAIgIAAg");
	this.shape_12.setTransform(420.15,15.347);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F2B19").s().p("AAABeQgrgCgVgcQgVgZAAgnQACgoATgYQAXgdApAAQAqAAAYAdQAUAaAAAmIAAAJIiJAAQACAXAKANQAOASAZAAQAbAAAOgSIAEgIIAgANIgKAPQgZAdgnAAIgDAAgAAzgQQgDgRgHgLQgPgTgaABQgYgBgPATQgIAKgDASIBlAAIAAAAg");
	this.shape_13.setTransform(401.45,15.3266);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1F2B19").s().p("AgPBZIAAiUIg9AAIAAgdICZAAIAAAdIg9AAIAACUg");
	this.shape_14.setTransform(383.025,15.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1F2B19").s().p("AArBZIAAh9IhZB9IgcAAIAAixIAgAAIAAB7IBZh7IAcAAIAACxg");
	this.shape_15.setTransform(364.675,15.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1F2B19").s().p("AhBBAQgUgZAAgnQAAgmAUgaQALgNASgIQARgIATAAQAqAAAXAdQAVAaAAAmQAAAmgVAaQgXAegqAAQgpAAgYgegAgngsQgMAPAAAdQAAAeAMAPQANASAaAAQAaAAAOgSQAMgQAAgdQAAgcgMgQQgNgSgbAAQgaAAgNASg");
	this.shape_16.setTransform(344.925,15.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1F2B19").s().p("AhSCDIAAkAIAcAAIAAATQAWgYAiAAQAnAAAWAdQAUAZAAAoQAAAngUAZQgWAdgnAAQggAAgVgUIAABegAgphUQgOARABAfQgBAfAOAQQAPARAZAAQAZAAAOgUQAMgOAAgeQAAgdgMgRQgNgTgaAAQgaAAgOARg");
	this.shape_17.setTransform(325.3,19.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1F2B19").s().p("AgOBZIAAiUIg+AAIAAgdICZAAIAAAdIg9AAIAACUg");
	this.shape_18.setTransform(306.1,15.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1F2B19").s().p("AhRBVQgbghAAg0QABg0AaggQAegmA2AAQA2AAAfAmQANAQAIAbIghAFQgFgQgJgNQgVgbgmAAQgmAAgUAbQgSAWgBArQABArASAXQATAbAnAAQAmABAVgcQAJgNAEgOIAfAJQgFAUgNARQgfAmg2AAQg1AAgfgmg");
	this.shape_19.setTransform(285.425,12.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1F2B19").s().p("Ag9E7IgJgCIgCAAIgKgDIgTgFIgBAAIgngPIAAgBQhcgqgzhaIgCgEIiKBoQhUA+hqAAQiFAAhdhdQhdhdAAiFQAAiDBdheQBdhdCFAAQBHAABAAeQA/AdAsA1IhlBIQgbgcgkgQQglgQgpAAQhRAAg5A5Qg6A5AABQQAABRA6A5QA5A6BRAAQArAAAvgZQAYgMAPgMQCih0AAgBIgBgDIgBgbQAAiDBeheQBdhdCEAAQBHAABAAeQA+AdAtA1IhlBIQgcgcgkgQQglgQgoAAQhQAAg6A5Qg5A5AABQQAABRA5A5QA6A6BQAAIABAAQAqAAAvgZQAYgMAPgMIDMiTIAAktICNAAIAADJIEYjJIC6AAIAAAQImQEeIGQEgIAAAOIi8AAIkWjIIAADIIiNAAIAAibIiQBtQhUA+hpAAg");
	this.shape_20.setTransform(160.475,31.925);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(67.1,0,435.9,63.9), null);


(lib.bn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0,0,1,1,0,0,0,251.5,31.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F2B19").s().p("AkuBGIAAiMIJdAAIAACMg");
	this.shape.setTransform(-221.175,23.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F2B19").s().p("AkuBHIAAiMIJdAAIAACMg");
	this.shape_1.setTransform(-221.175,-23.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-251.5,-31.9,503,63.9), null);


(lib.rightcontainer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border_right
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E8E9EC").ss(2,2,0,3).p("AAA1pMAAAArT");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// right_container
	this.guide_background_mc = new lib.guider();
	this.guide_background_mc.name = "guide_background_mc";
	this.guide_background_mc.setTransform(-55,0);

	this.timeline.addTween(cjs.Tween.get(this.guide_background_mc).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightcontainer, new cjs.Rectangle(-110,-139.6,111,279.2), null);


(lib.leftcontainer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border_left
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E8E9EC").ss(2,2,0,3).p("AAAXNMAAAguZ");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// left_container
	this.guide_background_mc = new lib.guidel();
	this.guide_background_mc.name = "guide_background_mc";
	this.guide_background_mc.setTransform(55,0);

	this.timeline.addTween(cjs.Tween.get(this.guide_background_mc).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftcontainer, new cjs.Rectangle(-1,-149.5,111,299), null);


(lib.centercontainer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E8E9EC").ss(2,2,0,3).p("EmGngPiMMNPAAAEGGoAPjMsNPAAA");
	this.shape.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(375));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F2B19").s().p("EggBAMgIAA4/MBADAAAIAAY/g");
	this.shape_1.setTransform(366.75,0);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(282).to({_off:false},0).wait(93));

	// Layer_18
	this.instance = new lib.Symbol16();
	this.instance.setTransform(44.95,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(359).to({_off:false},0).to({alpha:1},15).wait(1));

	// Layer_12
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(-99.95,-71.45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({x:-89.35,y:-60.55,alpha:1},29,cjs.Ease.backOut).wait(302));

	// Layer_13
	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(-140.05,-43,1,1,-59.9996,0,0,23.9,-0.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({rotation:0,x:-139.95,y:-43.05,alpha:1},29,cjs.Ease.backOut).wait(302));

	// Layer_14
	this.instance_3 = new lib.Symbol9();
	this.instance_3.setTransform(-68.9,-21.95);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).to({x:-36.25,y:-26.95,alpha:1},29,cjs.Ease.backOut).wait(302));

	// Layer_15
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(69.95,-43.05,1,1,-83.4576,0,0,-17.9,-0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({rotation:0,x:70.05,y:-43,alpha:1},29,cjs.Ease.backOut).wait(302));

	// Layer_16
	this.instance_5 = new lib.Symbol11();
	this.instance_5.setTransform(50.05,-30,1,1,59.9996,0,0,0.1,32);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).to({rotation:0,x:50,y:-30.05,alpha:1},29,cjs.Ease.backOut).wait(302));

	// Layer_8
	this.instance_6 = new lib.Symbol12();
	this.instance_6.setTransform(-39.25,-43,0.239,0.239);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({scaleX:1,scaleY:1},29,cjs.Ease.backOut).wait(302));

	// Layer_17
	this.instance_7 = new lib.Symbol15();
	this.instance_7.setTransform(-234.75,121.85);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(239).to({_off:false},0).to({y:40.85,alpha:0.5586},40,cjs.Ease.cubicInOut).wait(96));

	// Layer_6
	this.instance_8 = new lib.Symbol13();
	this.instance_8.setTransform(-237.85,64.25);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).to({y:24.65,alpha:1},35,cjs.Ease.cubicOut).wait(175).to({y:-0.35,alpha:0},40,cjs.Ease.cubicInOut).wait(96));

	// Layer_1
	this.instance_9 = new lib.Symbol4();
	this.instance_9.setTransform(-408.05,0.05,0.6252,0.6252,0,0,0,0,-0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).to({y:-34.95,alpha:1},26,cjs.Ease.cubicOut).wait(331));

	// Layer_3
	this.instance_10 = new lib.Symbol6();
	this.instance_10.setTransform(385,248);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:24},44,cjs.Ease.cubicOut).wait(331));

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ab5MgIAA4/IBBAAIAAY/g");
	var mask_graphics_1 = new cjs.Graphics().p("AYvMgIAA4/IFOAAIAAY/g");
	var mask_graphics_2 = new cjs.Graphics().p("AVvMgIAA4/IJOAAIAAY/g");
	var mask_graphics_3 = new cjs.Graphics().p("AS3MgIAA4/INEAAIAAY/g");
	var mask_graphics_4 = new cjs.Graphics().p("AQIMgIAA4/IQtAAIAAY/g");
	var mask_graphics_5 = new cjs.Graphics().p("ANiMgIAA4/IUKAAIAAY/g");
	var mask_graphics_6 = new cjs.Graphics().p("ALEMgIAA4/IXdAAIAAY/g");
	var mask_graphics_7 = new cjs.Graphics().p("AIuMgIAA4/IalAAIAAY/g");
	var mask_graphics_8 = new cjs.Graphics().p("AGgMgIAA4/IdiAAIAAY/g");
	var mask_graphics_9 = new cjs.Graphics().p("AEaMgIAA4/MAgVAAAIAAY/g");
	var mask_graphics_10 = new cjs.Graphics().p("ACbMgIAA4/MAi+AAAIAAY/g");
	var mask_graphics_11 = new cjs.Graphics().p("AAjMgIAA4/MAleAAAIAAY/g");
	var mask_graphics_12 = new cjs.Graphics().p("AhMMgIAA4/MAnzAAAIAAY/g");
	var mask_graphics_13 = new cjs.Graphics().p("Ai2MgIAA4/MAqAAAAIAAY/g");
	var mask_graphics_14 = new cjs.Graphics().p("AkZMgIAA4/MAsEAAAIAAY/g");
	var mask_graphics_15 = new cjs.Graphics().p("Al2MgIAA4/MAuAAAAIAAY/g");
	var mask_graphics_16 = new cjs.Graphics().p("AnMMgIAA4/MAvzAAAIAAY/g");
	var mask_graphics_17 = new cjs.Graphics().p("AodMgIAA4/MAxfAAAIAAY/g");
	var mask_graphics_18 = new cjs.Graphics().p("ApoMgIAA4/MAzDAAAIAAY/g");
	var mask_graphics_19 = new cjs.Graphics().p("AqtMgIAA4/MA0fAAAIAAY/g");
	var mask_graphics_20 = new cjs.Graphics().p("ArtMgIAA4/MA10AAAIAAY/g");
	var mask_graphics_21 = new cjs.Graphics().p("AsoMgIAA4/MA3DAAAIAAY/g");
	var mask_graphics_22 = new cjs.Graphics().p("AteMgIAA4/MA4LAAAIAAY/g");
	var mask_graphics_23 = new cjs.Graphics().p("AuPMgIAA4/MA5MAAAIAAY/g");
	var mask_graphics_24 = new cjs.Graphics().p("Au8MgIAA4/MA6IAAAIAAY/g");
	var mask_graphics_25 = new cjs.Graphics().p("AvlMgIAA4/MA6/AAAIAAY/g");
	var mask_graphics_26 = new cjs.Graphics().p("AwJMgIAA4/MA7vAAAIAAY/g");
	var mask_graphics_27 = new cjs.Graphics().p("AwqMgIAA4/MA8bAAAIAAY/g");
	var mask_graphics_28 = new cjs.Graphics().p("AxHMgIAA4/MA9BAAAIAAY/g");
	var mask_graphics_29 = new cjs.Graphics().p("AxgMgIAA4/MA9jAAAIAAY/g");
	var mask_graphics_30 = new cjs.Graphics().p("Ax3MgIAA4/MA+BAAAIAAY/g");
	var mask_graphics_31 = new cjs.Graphics().p("AyKMgIAA4/MA+bAAAIAAY/g");
	var mask_graphics_32 = new cjs.Graphics().p("AybMgIAA4/MA+xAAAIAAY/g");
	var mask_graphics_33 = new cjs.Graphics().p("AypMgIAA4/MA/EAAAIAAY/g");
	var mask_graphics_34 = new cjs.Graphics().p("Ay1MgIAA4/MA/UAAAIAAY/g");
	var mask_graphics_35 = new cjs.Graphics().p("Ay+MgIAA4/MA/gAAAIAAY/g");
	var mask_graphics_36 = new cjs.Graphics().p("AzGMgIAA4/MA/rAAAIAAY/g");
	var mask_graphics_37 = new cjs.Graphics().p("AzMMgIAA4/MA/zAAAIAAY/g");
	var mask_graphics_38 = new cjs.Graphics().p("AzRMgIAA4/MA/5AAAIAAY/g");
	var mask_graphics_39 = new cjs.Graphics().p("AzUMgIAA4/MA/9AAAIAAY/g");
	var mask_graphics_40 = new cjs.Graphics().p("AzWMgIAA4/MBAAAAAIAAY/g");
	var mask_graphics_41 = new cjs.Graphics().p("AzXMgIAA4/MBABAAAIAAY/g");
	var mask_graphics_42 = new cjs.Graphics().p("AzYMgIAA4/MBADAAAIAAY/g");
	var mask_graphics_43 = new cjs.Graphics().p("AzYMgIAA4/MBADAAAIAAY/g");
	var mask_graphics_44 = new cjs.Graphics().p("AzYMgIAA4/MBADAAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:185,y:0}).wait(1).to({graphics:mask_graphics_1,x:191.7227,y:0}).wait(1).to({graphics:mask_graphics_2,x:198.1399,y:0}).wait(1).to({graphics:mask_graphics_3,x:204.2587,y:0}).wait(1).to({graphics:mask_graphics_4,x:210.0861,y:0}).wait(1).to({graphics:mask_graphics_5,x:215.6294,y:0}).wait(1).to({graphics:mask_graphics_6,x:220.8955,y:0}).wait(1).to({graphics:mask_graphics_7,x:225.8917,y:0}).wait(1).to({graphics:mask_graphics_8,x:230.6249,y:0}).wait(1).to({graphics:mask_graphics_9,x:235.1024,y:0}).wait(1).to({graphics:mask_graphics_10,x:239.3312,y:0}).wait(1).to({graphics:mask_graphics_11,x:243.3184,y:0}).wait(1).to({graphics:mask_graphics_12,x:247.0711,y:0}).wait(1).to({graphics:mask_graphics_13,x:250.5965,y:0}).wait(1).to({graphics:mask_graphics_14,x:253.9016,y:0}).wait(1).to({graphics:mask_graphics_15,x:256.9935,y:0}).wait(1).to({graphics:mask_graphics_16,x:259.8794,y:0}).wait(1).to({graphics:mask_graphics_17,x:262.5664,y:0}).wait(1).to({graphics:mask_graphics_18,x:265.0615,y:0}).wait(1).to({graphics:mask_graphics_19,x:267.3719,y:0}).wait(1).to({graphics:mask_graphics_20,x:269.5046,y:0}).wait(1).to({graphics:mask_graphics_21,x:271.4668,y:0}).wait(1).to({graphics:mask_graphics_22,x:273.2656,y:0}).wait(1).to({graphics:mask_graphics_23,x:274.9081,y:0}).wait(1).to({graphics:mask_graphics_24,x:276.4014,y:0}).wait(1).to({graphics:mask_graphics_25,x:277.7526,y:0}).wait(1).to({graphics:mask_graphics_26,x:278.9687,y:0}).wait(1).to({graphics:mask_graphics_27,x:280.057,y:0}).wait(1).to({graphics:mask_graphics_28,x:281.0245,y:0}).wait(1).to({graphics:mask_graphics_29,x:281.8783,y:0}).wait(1).to({graphics:mask_graphics_30,x:282.6256,y:0}).wait(1).to({graphics:mask_graphics_31,x:283.2733,y:0}).wait(1).to({graphics:mask_graphics_32,x:283.8287,y:0}).wait(1).to({graphics:mask_graphics_33,x:284.2988,y:0}).wait(1).to({graphics:mask_graphics_34,x:284.6908,y:0}).wait(1).to({graphics:mask_graphics_35,x:285.0117,y:0}).wait(1).to({graphics:mask_graphics_36,x:285.2687,y:0}).wait(1).to({graphics:mask_graphics_37,x:285.4688,y:0}).wait(1).to({graphics:mask_graphics_38,x:285.6192,y:0}).wait(1).to({graphics:mask_graphics_39,x:285.727,y:0}).wait(1).to({graphics:mask_graphics_40,x:285.7992,y:0}).wait(1).to({graphics:mask_graphics_41,x:285.843,y:0}).wait(1).to({graphics:mask_graphics_42,x:285.8655,y:0}).wait(1).to({graphics:mask_graphics_43,x:285.8738,y:0}).wait(1).to({graphics:mask_graphics_44,x:285.875,y:0}).wait(331));

	// Layer_2
	this.instance_11 = new lib.Symbol5();
	this.instance_11.setTransform(270.05,0.5);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(375));

	// bg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3F134").s().p("EmGnAPoIAA/PMMNPAAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(375));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2501,-120,5002,465.6);


// stage content:
(lib.ssk_desk_1200x200 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		
		// код для баннера-растяжки (с учетом window.devicePixelRatio)
		var _this = this;
		var canvasWidth = canvas.width;  
		var canvasHeight = 200; 
		
		
		window.addEventListener('resize', resize, false);
			function resize() {
				canvas.width = window.innerWidth * window.devicePixelRatio;
				canvas.height = canvasHeight * window.devicePixelRatio;
				
				canvas.style.width =  window.innerWidth +"px";	
				
				stage.scaleX = stage.scaleY = window.devicePixelRatio; 	
			
				
				_this.scale_left_mc.x = 0;
				_this.scale_center_mc.x = Math.round((window.innerWidth / 2));
				_this.scale_right_mc.x = window.innerWidth;
		
				
			}
			
		resize();
			
		
		this.btnMain.cursor = "pointer";
		this.btnMain.addEventListener("click", function (e) {
		var t = e.nativeEvent;
		if (t.which == 1 || t.button == 0) {
		window.callClick();};});
		
		this.scale_left_mc.guide_background_mc.visible = false;	
		this.scale_right_mc.guide_background_mc.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// button
	this.btnMain = new lib.bn();
	this.btnMain.name = "btnMain";
	this.btnMain.setTransform(2250,100,20.8332,0.5,0,0,0,108,200);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.bn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(1));

	// right
	this.scale_right_mc = new lib.rightcontainer();
	this.scale_right_mc.name = "scale_right_mc";
	this.scale_right_mc.setTransform(1200,100);

	this.timeline.addTween(cjs.Tween.get(this.scale_right_mc).wait(1));

	// left
	this.scale_left_mc = new lib.leftcontainer();
	this.scale_left_mc.name = "scale_left_mc";
	this.scale_left_mc.setTransform(0,100);

	this.timeline.addTween(cjs.Tween.get(this.scale_left_mc).wait(1));

	// center
	this.scale_center_mc = new lib.centercontainer();
	this.scale_center_mc.name = "scale_center_mc";
	this.scale_center_mc.setTransform(600,100);

	this.timeline.addTween(cjs.Tween.get(this.scale_center_mc).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1301.3,50.2,6301.3,395.40000000000003);
// library properties:
lib.properties = {
	id: '2D19E59416AC4633895BFFCE1D87CDF9',
	width: 1200,
	height: 200,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/car.png", id:"car"},
		{src:"images/render.jpg", id:"render"}
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
an.compositions['2D19E59416AC4633895BFFCE1D87CDF9'] = {
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