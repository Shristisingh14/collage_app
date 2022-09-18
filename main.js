var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;

     document.getElementById("textbox").innerHTML = Content;
     console.log(Content);
     if(Content =="take my selfie")
     {
         console.log("taking selfie ---");
         speak();
     }
     
}

function speak(){
    var synth = window.speechSynthesis;

     speak_data = "Taking selfie in 5 seconds";

     var utterThis = new SpeechSynthesisUtterance(speak_data);

     synth.speak(utterThis);

     Webcam.attach(camera);

     setTimeout(function()
     {
          take_snapshot();
          save();
     }, 5000);
}

Webcam.set({
    width:360,
    height:260,
    image_format : 'png',
    png_quality : 90
});
camera = document.getElementById("camera"); 

function take_snapshot()
{
     Webcamm.snap(function(data_uri) {
         document.getElementById("image").innerHTML = '<img id="selfie_image" src=" '+data_uri+'"/>';
     });
}

function  save()
{
    link =document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
