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
        img_id= "selfie1";
          take_snapshot();
          save();
     }, 5000);
     setTimeout(function()
     {
        img_id= "selfie2";
          take_snapshot();
          save();
     }, 7000);
     setTimeout(function()
     {
        img_id= "selfie3";
          take_snapshot();
          save();
     }, 10000);
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
        if(img_id== "selfie1"){
            document.getElementById("result_img1").innerHTML = '<img id="selfie_image1" src=" '+data_uri+'"/>';
        }
        if(img_id== "selfie2"){
            document.getElementById("result_img2").innerHTML = '<img id="selfie_image2" src=" '+data_uri+'"/>';
        }
        if(img_id== "selfie3"){
            document.getElementById("result_img3").innerHTML = '<img id="selfie_image3" src=" '+data_uri+'"/>';
        }
         
     });
}

function  save()
{
    link =document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
