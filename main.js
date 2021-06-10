Webcam.set({
    width: 350,
    hieght: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">'
    })
}

console.log("ml5.version: ",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j0xmkiYYv/model.json',modelLoded);

function modelLoded()
{
    console.log("Model Loded!");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_1 = "The first prediction is " + prediction_1;
    speak_2 = "The second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_1 + speak_2);
    synth.speak(utterThis);
}
