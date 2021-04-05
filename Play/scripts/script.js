/***************************************
 * FaceTrackingRecording by @Juanmv94 (C) 2020
 * Free to use only for personal ig accounts
 * Selling filters with FaceTrackingRecording is not allowed!
 * Contact @Juanmv94 for help or bussiness use
 * Don't remove this copyright message
 **************************************/
 
const R = require('Reactive');
const Time = require('Time');
const Scene = require('Scene');
const Textures = require('Textures');
const Animation = require('Animation');
const CameraInfo = require('CameraInfo');

const frameRate = 15;
const interpolation=true;

//Insert your recording here!
const recording=[{"posx":0.14743763208389282,"posy":0.1212596669793129,"posz":-0.6526417136192322,"rotx":10.485936164855957,"roty":20.07145118713379,"rotz":7.255241394042969},{"posx":0.14786987006664276,"posy":0.12142692506313324,"posz":-0.6532281637191772,"rotx":10.47154712677002,"roty":20.31512451171875,"rotz":7.480104923248291},{"posx":0.15696322917938232,"posy":0.12267354130744934,"posz":-0.678544819355011,"rotx":13.06064510345459,"roty":21.971012115478516,"rotz":7.489558696746826},{"posx":0.16360226273536682,"posy":0.11855214834213257,"posz":-0.6868313550949097,"rotx":13.196009635925293,"roty":21.862323760986328,"rotz":7.321200370788574},{"posx":0.1678406000137329,"posy":0.10995816439390182,"posz":-0.6694074869155884,"rotx":14.431013107299805,"roty":24.313234329223633,"rotz":7.188460826873779},{"posx":0.17152510583400726,"posy":0.11296188831329346,"posz":-0.6759653091430664,"rotx":13.798558235168457,"roty":26.949546813964844,"rotz":7.888187408447266},{"posx":0.16696837544441223,"posy":0.12117142975330353,"posz":-0.6805824041366577,"rotx":12.324856758117676,"roty":26.127187728881836,"rotz":6.6120924949646},{"posx":0.1614537388086319,"posy":0.12129626423120499,"posz":-0.6894941329956055,"rotx":11.680974006652832,"roty":23.513694763183594,"rotz":6.865137577056885},{"posx":0.14549216628074646,"posy":0.11472784727811813,"posz":-0.6574109792709351,"rotx":5.373725891113281,"roty":16.37752342224121,"rotz":3.5989108085632324},{"posx":0.12128397822380066,"posy":0.11209964752197266,"posz":-0.6606987118721008,"rotx":8.47033977508545,"roty":2.9530887603759766,"rotz":-2.409169912338257},{"posx":0.10777893662452698,"posy":0.1040877029299736,"posz":-0.6381388306617737,"rotx":9.429681777954102,"roty":-2.9223482608795166,"rotz":-5.795724868774414},{"posx":0.10737967491149902,"posy":0.10094503313302994,"posz":-0.6367757320404053,"rotx":9.47869873046875,"roty":-4.065934658050537,"rotz":-6.046065807342529},{"posx":0.10541122406721115,"posy":0.0958426296710968,"posz":-0.6322871446609497,"rotx":9.199909210205078,"roty":-5.051112174987793,"rotz":-6.747521877288818},{"posx":0.10066118836402893,"posy":0.09353037923574448,"posz":-0.6240894794464111,"rotx":10.491345405578613,"roty":-4.962337970733643,"rotz":-6.449456691741943},{"posx":0.09903571009635925,"posy":0.09494446963071823,"posz":-0.6349852681159973,"rotx":11.453774452209473,"roty":-5.248706817626953,"rotz":-6.91554069519043},{"posx":0.08785726130008698,"posy":0.09289686381816864,"posz":-0.6207473874092102,"rotx":8.720182418823242,"roty":-5.282377243041992,"rotz":-6.533811092376709},{"posx":0.07612009346485138,"posy":0.09232630580663681,"posz":-0.6223809123039246,"rotx":9.097054481506348,"roty":-4.5701904296875,"rotz":-6.700123310089111},{"posx":0.06710068136453629,"posy":0.09042638540267944,"posz":-0.6110828518867493,"rotx":8.429145812988281,"roty":-4.063138008117676,"rotz":-6.823296546936035},{"posx":0.05100691318511963,"posy":0.0901336520910263,"posz":-0.6184467673301697,"rotx":10.12891960144043,"roty":-1.9548276662826538,"rotz":-6.4654107093811035},{"posx":0.031083710491657257,"posy":0.09034033119678497,"posz":-0.6096365451812744,"rotx":8.980618476867676,"roty":-0.37656548619270325,"rotz":-5.211635589599609},{"posx":0.02130921743810177,"posy":0.09297038614749908,"posz":-0.6160110831260681,"rotx":9.153374671936035,"roty":2.2003045082092285,"rotz":-5.334249019622803},{"posx":0.000600071158260107,"posy":0.0907256007194519,"posz":-0.6108245253562927,"rotx":8.674079895019531,"roty":2.933669090270996,"rotz":-2.6004292964935303},{"posx":-0.020259182900190353,"posy":0.08396036177873611,"posz":-0.5643796324729919,"rotx":3.906304359436035,"roty":3.4406111240386963,"rotz":0.14016461372375488},{"posx":-0.030946984887123108,"posy":0.08957263827323914,"posz":-0.5873327851295471,"rotx":4.666731357574463,"roty":3.5618722438812256,"rotz":1.3504712581634521},{"posx":-0.048364948481321335,"posy":0.09360136836767197,"posz":-0.5845329761505127,"rotx":4.989886283874512,"roty":3.7768921852111816,"rotz":2.7973811626434326},{"posx":-0.06761343777179718,"posy":0.09580329805612564,"posz":-0.5856902599334717,"rotx":5.158246040344238,"roty":2.287644386291504,"rotz":4.361032485961914},{"posx":-0.08686692267656326,"posy":0.10169509798288345,"posz":-0.6206098198890686,"rotx":9.516897201538086,"roty":-2.1196603775024414,"rotz":4.4436845779418945},{"posx":-0.11846231669187546,"posy":0.10227210819721222,"posz":-0.6414281129837036,"rotx":17.08677101135254,"roty":-13.104445457458496,"rotz":3.5813653469085693},{"posx":-0.13256308436393738,"posy":0.09960508346557617,"posz":-0.65847247838974,"rotx":13.388041496276855,"roty":-20.16436004638672,"rotz":10.253508567810059},{"posx":-0.13063879311084747,"posy":0.0951605960726738,"posz":-0.6401194334030151,"rotx":13.569611549377441,"roty":-26.773107528686523,"rotz":9.98453426361084},{"posx":-0.12594451010227203,"posy":0.10019711405038834,"posz":-0.6491124033927917,"rotx":9.767651557922363,"roty":-35.71278381347656,"rotz":7.125514030456543},{"posx":-0.11353833228349686,"posy":0.09761510044336319,"posz":-0.6340833306312561,"rotx":12.59433364868164,"roty":-49.59626007080078,"rotz":-1.539747953414917},{"posx":-0.10718225687742233,"posy":0.09394403547048569,"posz":-0.639473021030426,"rotx":13.387003898620605,"roty":-53.66358947753906,"rotz":-1.6572068929672241},{"posx":-0.09258679300546646,"posy":0.09154064953327179,"posz":-0.6604713201522827,"rotx":17.396554946899414,"roty":-56.0164680480957,"rotz":-5.717209815979004}];

const timeDriver=Animation.timeDriver({durationMilliseconds: recording.length/frameRate*1000, loopCount: Infinity,  mirror: false});

recording.push(recording[recording.length-1]);
var vis=recording.map(x=>(x.posx==0 && x.posy==0 && x.posz==0)?0:1);

function sampler(keyf) {
	return interpolation ? Animation.samplers.polyline({keyframes:keyf}) : Animation.samplers.sequence({samplers:keyf.map(x=>Animation.samplers.constant(x))});
}

Promise.all([Textures.findFirst("animationSequence0"),Scene.root.findByPath("**/faceMesh*")]).then(function(arr) {
	const animationSequence=arr[0], faceMeshes=arr[1];
	const frameSampler=Animation.samplers.frame(recording.length), frameAnimation=Animation.animate(timeDriver, frameSampler);
	const fspx=sampler(recording.map(x=>x.posx)),fapx=Animation.animate(timeDriver, fspx);
	const fspy=sampler(recording.map(x=>x.posy)),fapy=Animation.animate(timeDriver, fspy);
	const fspz=sampler(recording.map(x=>x.posz)),fapz=Animation.animate(timeDriver, fspz);
	const fsrx=sampler(recording.map(x=>x.rotx*Math.PI/180)),farx=Animation.animate(timeDriver, fsrx);
	const fsry=sampler(recording.map(x=>x.roty*Math.PI/180)),fary=Animation.animate(timeDriver, fsry);
	const fsrz=sampler(recording.map(x=>x.rotz*Math.PI/180)),farz=Animation.animate(timeDriver, fsrz);
	const fsv=sampler(vis),fav=Animation.animate(timeDriver, fsv);
	animationSequence.currentFrame=frameAnimation;
	faceMeshes.forEach(function(fm) {
		fm.transform.position=R.point(fapx,fapy,fapz);
		fm.transform.rotationX=farx; fm.transform.rotationY=fary; fm.transform.rotationZ=farz;
		fm.hidden=fav.lt(1);
	});
	timeDriver.start();
});

CameraInfo.isRecordingVideo.monitor().subscribe(function(v){if (v.newValue) timeDriver.reset();});
