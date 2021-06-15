Webcam.set({
    width : 400,
    height: 400,
    image_format : 'png',
    png_quality : 92,
  });
  
  var camera = document.getElementById("camera");
  
  Webcam.attach('#camera');
  
  function take_snapshot(){
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML ='<img id="capture" src = "' + data_uri + '"/>'
      check();
    });
  };

console.log("ml5version:",ml5.version);
classifier = ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);
function modelLoaded (){
console.log("modelLoaded");
};

function speak(){
var synth = window.speechSynthesis;
speak_data_1 = "the most accurate prediction is" + prediction_accurate;
speak_data_2 = "and the second most accurate prediction is" + prediction-accurate;
var utterThis = new speechSynthesisisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);
};


  
  function check(){
var img = document.getElementById('capture');
classifier.classify(img,gotResult);
  };

function gotResult(error,Results){
if (error){
console.error(error);
}else {
  console.log(Results);
  document.getElementById("result_emotion_name").innerHTML = Results[0].label;
  document.getElementById("result_emotion_name2").innerHTML = Results[1].label;
  prediction_1 = Results[0].label;
  prediction_2 = Results[1].label;
  speak();
  if (Results[0].label == "happy"){
  document.getElementById("update_emoji").innerHTML = "&#128522;";
  };
  if (Results[0].label == "sad"){
    document.getElementById("update_emoji").innerHTML = "$#128532;";
  };
  if (Results[1].label == "happy"){
    document.getElementById("update_emoji2").innerHTML = "&#128522;";
    };
    if (Results[1].label == "sad"){
      document.getElementById("update_emoji2").innerHTML = "$#128532;";
    };
  
}
};