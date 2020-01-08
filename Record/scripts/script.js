//FaceTrackingRecording by @Juanmv94
const Diagnostics = require('Diagnostics');
const Patches = require('Patches');
const Time = require('Time');
const intervalms = 100;
const recTimems = 10000;

const numFrames=Math.ceil(recTimems/intervalms);

var frame=0;
var recording=new Array(numFrames);
var interval=Time.setInterval(f,intervalms);

function f() {
	var posx=Patches.getScalarValue("posx").pinLastValue();
	var posy=Patches.getScalarValue("posy").pinLastValue();
	var posz=Patches.getScalarValue("posz").pinLastValue();
	
	var rotx=Patches.getScalarValue("rotx").pinLastValue();
	var roty=Patches.getScalarValue("roty").pinLastValue();
	var rotz=Patches.getScalarValue("rotz").pinLastValue();
	
	recording[frame++]={"posx":posx,"posy":posy,"posz":posz,"rotx":rotx,"roty":roty,"rotz":rotz};
	
	if (frame==numFrames) {
		Time.clearInterval(interval);
		Diagnostics.log("Recording completed! var Recording=");
		Diagnostics.log(recording);
	}
}



