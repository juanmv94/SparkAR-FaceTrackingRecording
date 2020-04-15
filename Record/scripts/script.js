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

var head;

Promise.all([Patches.outputs.getVector("pos"),Patches.outputs.getVector("rot")]).then(function(h){
	head=h;
	Patches.outputs.getPulse("start").then(function(pv){
		pv.subscribe(function() {
			if (waiting) {
				waiting=false;
				interval=Time.setInterval(f,intervalms);
				f();
			}
		});
		Patches.inputs.setBoolean("waiting",true);
	});
});

function f() {
	var posx=head[0].x.pinLastValue();
	var posy=head[0].y.pinLastValue();
	var posz=head[0].z.pinLastValue();
	
	var rotx=head[1].x.pinLastValue();
	var roty=head[1].y.pinLastValue();
	var rotz=head[1].z.pinLastValue();
	
	recording[frame++]={"posx":posx,"posy":posy,"posz":posz,"rotx":rotx,"roty":roty,"rotz":rotz};
	Patches.inputs.setPulse("frame",R.once());
	if (frame==numFrames) {
		Time.clearInterval(interval);
		Diagnostics.log("Recording completed! var Recording=");
		Diagnostics.log(recording);
	}
}



