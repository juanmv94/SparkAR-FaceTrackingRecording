const Scene = require('Scene');
export const Diagnostics = require('Diagnostics');
const TouchGestures = require('TouchGestures');

TouchGestures.onTap().subscribe(()=>{
	Scene.root.findFirst("faceMesh0").then((face)=>{
		Diagnostics.log(`\{"posx":${face.transform.x.pinLastValue()},"posy":${face.transform.y.pinLastValue()},"posz":${face.transform.z.pinLastValue()},"rotx":${face.transform.rotationX.pinLastValue()*180/Math.PI},"roty":${face.transform.rotationY.pinLastValue()*180/Math.PI},"rotz":${face.transform.rotationZ.pinLastValue()*180/Math.PI}\}`);
	});
});