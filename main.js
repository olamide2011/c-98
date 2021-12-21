var SpeechRecognition=window.webkitSpeechRecognition;

var Recognition=new SpeechRecognition();

function start() {
    Recognition.start();
    document.getElementById("textbox").innerHTML="";

}
Recognition.onresult=function(event) {
    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
}