# FaceTrackingRecording

An Spark AR utility to record facetracking from a video/GIF, and then play it with the user face.

* **Free to use only for personal ig accounts**
* **Selling filters with FaceTrackingRecording is not allowed!**
* **Contact @Juanmv94 for help or bussiness use**

## The project
This project allows you to record the facetracker movements from the simulator in SparkAR.
This utility is splited in 2 projects: 1 for recording and 1 for playing the facetracking recording.
You just have to follow these steps:

#### 1. Generate the frame JPGs and WEBM
As you can imagine, you can't use MP4 or GIF in your project, so you need to convert your video/GIF to JPG frames (JPGs are smaller than PNGs).
You need to use [FFMPEG](https://www.ffmpeg.org/ "FFMPEG") for this, so download it first if you still don't have it.
For generating JPGs in your working directory use:
>ffmpeg -i input.mp4 -r 15 %04d.jpg

Where *-r 15* means your desired framerate. If you don't want to change the framerate omit this parameter.
Keep in mind that your video must be in vertical ratio, so edit it if isn't. You can add the *vf=crop...* filter from FFMPEG for this.

Then you need to generate a webm file at 1fps (recomended) with frame counter for the recording project. Use something like:
>ffmpeg -r 1 -i %04d.jpg -vf "[in]drawtext=text='%{frame_num}':start_number=1:x=0:y=0:fontsize=40:fontcolor=0xFFFFFFCC[txt];color=c=red:r=1:s=420x720:d=6[pre];[pre][txt]concat=n=2" -g 1 camera.webm

for generating this file with translucid white frame counter on the center of the screen, and *6* seconds of padding *red* screen. You should change *420x720* with your video resolution or command won't work!


#### 2. Open the record project
The project is made with SparkAR 86.0.0 so any version after will open it.
Click the left camera icon and then the + button to use your desired **\*.webm** video.
You also need to edit the constants in **scripts/script.js**

```javascript
const frameRate = 1;
const numFrames = 34;
const intervalms = 1000/frameRate;
```
change the constant **numFrames** to the number of frames you have generated.

Once you are ready it's time for recording! Remember some facts about SparkAR:
* When you first load a project, sometimes there's some delay until script starts.
* When you click the reload button, scripts and patches reload at the moment but there's a small delay until the camera simulator reloads.

So, when the script is loaded, an instruction telling you to tap the screen will show. Then you must enable "Simulate touch" at the emulator, and reload the project.
As soon as the first frame (with number 1) appear, you must touch the screen at simulator. That can be in 0.5-1.5 seconds so be quick! if you are late and touch the screen at 2 frame, you should reload and try again. A flash efect will tell you the moment facetracker positions are beeing recorded.
After the video is finished (no more flashes), a console log will show an array of face positions like:

```javascript
[{"posx":-0.007241778075695038,"posy":-0.03252420201897621,"posz":-0.5028273463249207,"rotx":-8.999058723449707,"roty":4.387806415557861,"rotz":2.962066173553467},{"posx":-0.007218386046588421,"posy":-0.02704869583249092,"posz":-0.5050930380821228,"rotx":-11.640742301940918,"roty":5.620565414428711,"rotz":5.489805221557617},...]
```

You should copy this **full** array for the **Play** script.

#### 3. Open the play project
The project is made with SparkAR 110.1.0 so any version after will open it.
* Open the project and replace the dummy Texture Secuence *00[1-34]* with yours (Delete it and import from computer all your JPGs. When imported, change the type at the right menu to "Texture Secuence". Add this new texture sequence to *animationSequence0*). **Remember to disable compression!**
* Change the **frameRate** script.js constant with your desired value for playback frame rate.
* Set the **interpolation** script.js constant to **true** or **false** to your choice.
* Finally, you should replace the dummy recording from **scripts/script.js** in this project with yours. It must be placed in the value of **const recording**.
```javascript
//Insert your recording here!
const recording=[{"posx":-0.007241778075695038,"posy":-0.03252420201897621,"posz":-0.5028273463249207,"rotx":-8.999058723449707,"roty":4.387806415557861,"rotz":2.962066173553467},{"posx":-0.007218386046588421,"posy":-0.02704869583249092,"posz":-0.5050930380821228,"rotx":-11.640742301940918,"roty":5.620565414428711,"rotz":5.489805221557617},...];
```
* You can also tune other parameters like the ambient/directional light intensity, skin smoothing (Material 2), face cut dimensions (SDF Ellipse), and face brightness/rgb dominant color (Pack4 first 3 values).

## Make your filter!
Once the **play** project is working ok for you, you can rename the project and keep adding it things so you can make your own filter ;)
