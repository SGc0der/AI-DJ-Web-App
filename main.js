cradles = "";
toxic = "";
function preload() {
    cradles = loadSound("Cradles(PaglaSongs).mp3");
    toxic = loadSound("BoyWithUke(PaglaSongs).mp3");
}
function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(390, 170);
    video = createCapture();
    video.hide();
}
function draw() {
    image(video, 0, 0, 500, 400);
}