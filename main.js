leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
song1 = "";
song2 = "";
song1status = "";
song2status = "";

function preload(){
  song1 = loadSound('Aria Math.mp3');
  song2 = loadSound('z6eit.mp3');
   
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
    song1status = song1.isPlaying();
  song2status = song2.isPlaying();


    if(scoreRightWrist > 0.2){
        circle(rightWristX,rightWristY,20);
                song2.stop();
       if(song1status == false){
       
        document.getElementById("music").innerHTML = "Music = Minecraft Theme Song";
        
        song1.play();
       }
    }

    if(scoreLeftWrist > 0.2){
        circle(leftWristX,leftWristY,20);
        song1.stop();
       
        if(song2status == false){
       
        document.getElementById("music").innerHTML = "Music = Someone Screaming";
        
        song2.play();
       }
}
}
// Sound System //
