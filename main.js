cradles = "";
toxic = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
score_leftWrist = 0;
songStatus = "";
function preload() {
    cradles = loadSound("Cradles(PaglaSongs).mp3");
    toxic = loadSound("BoyWithUke(PaglaSongs).mp3");
}
function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(390, 170);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw() {
    image(video, 0, 0, 500, 400);
    fill("red");
    stroke("red");
    songStatus = cradles.isPlaying();
    if(score_leftWrist > 0.2) {
        circle(leftWristX. leftWristY, 20);
        toxic.stop();
        if(songStatus == false) {
            cradles.play();
            document.getElementById("song_name").innerHTML = "Song Name: Cradles"
        }
    }
}
function modelLoaded() {
    console.log("Model Loaded!");
}
function gotPoses(results) {
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    rightWristX = results[0].pose.leftWrist.x;
    rightWristY = results[0].pose.leftWrist.y;
    console.log("Coordinates: " + leftWristX + ", " + leftWristY + "; " + rightWristX + ", " + rightWristY);
    score_leftWrist = results[0].pose.keypoints[9].score;
}