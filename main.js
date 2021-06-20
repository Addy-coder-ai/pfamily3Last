
Webcam.set({
    width:400,
    height:400,
    image_format:'png',
    png_quality:90
   });
   
   camera= document.getElementById("input");
   Webcam.attach('#input');
   
   function takeSnapshot() {
      Webcam.snap(function(data_uri)
      {
        document.getElementById("output").innerHTML='<img id="captured_img" src="' +data_uri+'"/>';
      }
      );
   }
   
   console.log('ml5version',ml5.version);
   
   Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vmJptib0-/model.json',modelLoaded);
   function modelLoaded() {
    console.log("model loaded");
  }
  
  function Check() {
    img = document.getElementById("captured_img");
    Classifier.classify(img, gotResult);
  }
  
  function gotResult(error,results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("outputObjName").innerHTML = results[0].label;
      document.getElementById("outputObjAcuy").innerHTML = results[0].confidence.toFixed(4);
    }
  }