var video;
function setup(){
    var Canvas=createCanvas(320,240);
    Canvas.parent("webcam");
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(370,320);
    video.hide();
    Model=ml5.imageClassifier("model.json",modelloaded);
}
function modelloaded(){
    console.log("The Model is loaded");
}
function check(error,value){
        if(error){
            console.log(error);
        }
        else{
            console.log(value);
            var accuracy=value[0].confidence*100;
            accuracy=accuracy.toFixed(0)+"%";
            document.getElementById("object").textContent=value[0].label;
            document.getElementById("accuracy").textContent=accuracy;
        }
}
function draw(){
    image(video,0,0,370,320);
    Model.classify(video,check)
}