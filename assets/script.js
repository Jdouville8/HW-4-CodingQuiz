console.log("test");

var timeLeft = document.getElementById("timerValue");
var beginQuiz = document.querySelector("#beginButton");

var secondsLeft = 5;

function timerset() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.innerHTML = secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          gameOver();
        }
    
      }, 1000);
}

//Change h1 styling and hide other page elements or display image; also display score and give user option to input initials
function gameOver() {
    timeLeft.innerHTML = "0";
}

beginQuiz.addEventListener("click", function() {
    timerset();
})


