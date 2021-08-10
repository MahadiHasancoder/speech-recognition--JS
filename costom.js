let microphonebtn = document.querySelector('.microphonebtn');
let speekbtn = document.querySelector('.speekbtn');
let speekBody = document.querySelector('.speekBody');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;
const recognition = new SpeechRecognition;

microphonebtn.addEventListener("click", function(e){
    recognition.start();
    recognition.onresult = function(event){
        const current = event.resultIndex; 
         transcript = event.results[current][0].transcript;
        speekBody.textContent = transcript;

        speekbtn.addEventListener("click", function(){
            robotSpeek(transcript);
        })
    }
})
function robotSpeek(spmess){
    const speek = new SpeechSynthesisUtterance();
    speek.text = spmess;
    speek.volume = 0.5;
    speek.raet = 1;
    speek.pitch = 1;
    window.speechSynthesis.speak(speek);
}




console.log(transcript);
