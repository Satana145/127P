song="";
song_2="";
left_wrist_x=0;
left_wrist_y=0;
right_wrist_x=0;
right_wrist_y=0;
score_left_wrist = 0;
score_right_wrist=0;
song_status=0;
song_2_status=0;
function preload()
{
    song=loadSound("music.mp3");
    song_2=loadSound("music2.mp3");
}

}

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
}

function draw() {
	image(video, 0, 0, 600, 500);
}

