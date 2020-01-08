# FaceTrackingRecording

An Spark AR utility to record facetracking from a video/GIF, and then play it with the user face.

## The project
This utility is splited in 3 projects: 1 for recording, and 2 for playing the facetracking recording.

### Record
This project allows you to record the facetracker movements from the simulator in SparkAR. You just have to follow these steps:
#### 1. Open the project
The project is made with SparkAR 73.0.0 so any version after will open it
#### 2. change the real-time simulation video
Click the left camera icon and then the + button to use your desired **\*.webm** video.
You should first convert your video or GIF to WEBM format using online converters, or any program for video conversion like **FFMPEG**.
If you want to use this one, the command would be something like:
> ffmpeg -i input.gif output.webm
	
#### 3. Edit the script time constants
You should edit these 2 constants in **scripts/script.js**

```javascript
const intervalms = 100;
const recTimems = 10000;
```

* **intervalms** sets the interval in milliseconds to record face positions of the facetracker. If you for example want 10 frames per second, it will be 1000/10 = 100
* **recTimems** the number of milliseconds to record from beginning of the simulation. If you want for example 10 seconds, it will be 10\*1000 = 10000

### 4. Clear the console and restart the simulation
Every time you change the parameters in the **script.js** you should clear the console to remove previous recording logs from it, and restart the simulation.
After the specified time, a console log will show an array of face positions like:

```javascript
[{"posx":-0.007241778075695038,"posy":-0.03252420201897621,"posz":-0.5028273463249207,"rotx":-8.999058723449707,"roty":4.387806415557861,"rotz":2.962066173553467},{"posx":-0.007218386046588421,"posy":-0.02704869583249092,"posz":-0.5050930380821228,"rotx":-11.640742301940918,"roty":5.620565414428711,"rotz":5.489805221557617},...]
```

You should copy this **full** array for the **Play** script.
If after playing you don't like the recorded timings, go back to step 3.

## Play
There are two versions of the play project:
* In **playByFrame** you set the facetracking recording frame you want to show with patches. You should use this one if you want a good synchronization between the facetracking recording and the animation.

* In **play** you just have to set the interval at **scripts/script.js** and facetracking animation will play automatically.
```javascript
const intervalms = 100;
const autoloop = false;	//true to loop automatically without need of the reset signal
```
You have a reset signal with the patches to restart animation from beginning, but there's also an autoloop functionality that can be enabled by setting *const autoloop = true;*  in the script but it's **not recomended** as the video and facetracking can desync very easily with time.
> Note: it's possible that playback of the video and facetracking recording are not synced after video conversions. If you feel that your facetracking recording is going very fast and ends before the video, add some intervalms for example from 100 to 105, or decrease it if it's going very slow, and keep trying until it's synced.

## Setting your recorded facetracking recording
Don't forget to replace the dummy recording from **script.js** with yours. It must be placed in the value of **const recording**.
```javascript
//Insert your recording here!
const recording=[{"posx":-0.007241778075695038,"posy":-0.03252420201897621,"posz":-0.5028273463249207,"rotx":-8.999058723449707,"roty":4.387806415557861,"rotz":2.962066173553467},{"posx":-0.007218386046588421,"posy":-0.02704869583249092,"posz":-0.5050930380821228,"rotx":-11.640742301940918,"roty":5.620565414428711,"rotz":5.489805221557617},...];
```

## Make your filter!
Once the **play** project is working ok for you, you can rename the project and keep adding it things so you can make your own filter ;)