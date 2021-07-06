function preload()
{

}
var width = (screen.width - 200)/4
var height = 300

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    //canvas.position(width, 200);
    //console.log(width, screen.width);
    video = createCapture(VIDEO);
    video.hide();
    //classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RsL2DsC26/model.json", modeloaded);
    classifier = ml5.imageClassifier("MobileNet", modeloaded);
}

function draw()
{
   image(video, 0, 0, 300, 300);
   classifier.classify(video, getresult);
}
function modeloaded()
{
    console.log(ml5.version,"model is loaded");
}
function getresult(error, result)
{
   if(error)
   {
       console.error(error);
   }
   else
   {
       console.log(result);
       document.getElementById("object_name").innerHTML = result[0].label;
       document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(2)*100 + "%"
   }
}