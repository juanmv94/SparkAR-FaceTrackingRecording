const Diagnostics = require('Diagnostics');
const Patches = require('Patches');
const Time = require('Time');
const intervaloms = 100;
const recTimems = 10000;

const numFrames=Math.ceil(recTimems/intervaloms);

var interval=Time.setInterval(f,intervaloms);
var frame=0;
var recording=[];

function f() {
	var posx=Patches.getScalarValue("posx").pinLastValue();
	var posy=Patches.getScalarValue("posy").pinLastValue();
	var posz=Patches.getScalarValue("posz").pinLastValue();
	
	var rotx=Patches.getScalarValue("rotx").pinLastValue();
	var roty=Patches.getScalarValue("roty").pinLastValue();
	var rotz=Patches.getScalarValue("rotz").pinLastValue();
	
	recording.push({"posx":posx,"posy":posy,"posz":posz,"rotx":rotx,"roty":roty,"rotz":rotz});
	
	if (++frame>numFrames) {
		Time.clearInterval(interval);
		Diagnostics.log("Finalizado. var Recording=");
		Diagnostics.log(recording);
	}
}



