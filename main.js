leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
song = "";

function preload(){
   
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}


function modelLoaded(){
    console.log('Posenet is loaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightWristX + " rightWristY = "+rightWristY);
    }
}
// Drawing System //

function draw(){
    image(video, 0, 0, 600, 500);

    fill('black')
    stroke('blue')
    
if(scoreRightWrist > 0.2) {
    circle(rightWristX,rightWristY,20)

  


if(rightWristY > 300 && rightWristY <= 400)
{
document.getElementById("speed").innerHTML = "Speed = 2x";
song.rate(2);
}




    if(scoreLeftWrist > 0.2){
        circle(leftWristX,leftWristY,20);
        InNumberleftWristY = Number(leftWristY);
       
        document.getElementById("music").innerHTML = "Music = I Show Spped Yelling";
        song.stop();
        song.loadSound('z6eit.mp3');
        song.play();
}
}
// Sound System //

