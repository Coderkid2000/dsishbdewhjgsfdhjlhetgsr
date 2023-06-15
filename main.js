function startClassification(){
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Wc-9a5XUF/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}