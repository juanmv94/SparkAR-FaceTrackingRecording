//FaceTrackingRecording by @Juanmv94
const Diagnostics = require('Diagnostics');
const Patches = require('Patches');
const Time = require('Time');
const R = require('Reactive');

const frameRate = 1;
const numFrames = 34;
const intervalms = 1000/frameRate;

var frame=0;
var recording=new Array(numFrames);
var waiting=true;
var interval=null;
Patches.setBooleanValue("waiting",true);

Patches.getPulseValue("start").subscribe(function() {
	if (waiting) {
		waiting=false;
		interval=Time.setInterval(f,intervalms);
		f();
	}
});

function f() {
	var posx=Patches.getScalarValue("posx").pinLastValue();
	var posy=Patches.getScalarValue("posy").pinLastValue();
	var posz=Patches.getScalarValue("posz").pinLastValue();
	
	var rotx=Patches.getScalarValue("rotx").pinLastValue();
	var roty=Patches.getScalarValue("roty").pinLastValue();
	var rotz=Patches.getScalarValue("rotz").pinLastValue();
	
	recording[frame++]={"posx":posx,"posy":posy,"posz":posz,"rotx":rotx,"roty":roty,"rotz":rotz};
	Patches.setPulseValue("frame",R.once());
	if (frame==numFrames) {
		Time.clearInterval(interval);
		Diagnostics.log("Recording completed! var Recording=");
		Diagnostics.log(recording);
	}
}



