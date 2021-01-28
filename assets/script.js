

var timeLeft = document.getElementById("timerValue");
var beginQuiz = document.querySelector("#beginButton");
var questionOption1 = document.querySelector(".answerOption1");
var questionOption2 = document.querySelector(".answerOption2");
var questionOption3 = document.querySelector(".answerOption3");
var questionOption4 = document.querySelector(".answerOption4");
var questionPrompt = document.querySelector(".questionPrompt");
var submitButton = document.querySelector(".submitButton");
var ansBtn = document.querySelector(".ans-button");

var secondsLeft = 200;

//Iterates through the array
var indexCounter = 0;

//for storing the option selected by the user
var answerStore;

var correct = 0;

var wrong = 0;

var availableQuestions = [
  {
  question: "Which value type evaluates to either true or false?",
  options: ["Boolean", "Integer", "String", "null"],
  correctAnswer: "Boolean",
}, {
  question: "What web application service is used most commonly to share code?",
  options: ["YouTube", "BootcampSpot", "Spotify", "Github"],
  correctAnswer: "Github",
}, {
  question: "What command line command is used to copy a repo?",
  options: ["git push", "git clone", "git collect", "git slide"],
  correctAnswer: "Github",
}, {
  question: "What is the quick key on Mac for cutting?",
  options: ["cmd + x", "cmd + d", "cmd + x", "cmd + b"],
  correctAnswer: "Github",
}]

function startQuiz() {
  beginQuiz.addEventListener("click", function() {
  timerset();
  beginQuiz.style.visibility = "hidden"
  displayQuestion1();
  console.log(displayQuestion1);
});
}


// places question options dynamically in HTML
function displayQuestion1() {

  questionOption1.textContent = availableQuestions[indexCounter].options[0];
  questionOption2.textContent = availableQuestions[indexCounter].options[1];
  questionOption3.textContent = availableQuestions[indexCounter].options[2];
  questionOption4.textContent = availableQuestions[indexCounter].options[3];
  questionPrompt.textContent = availableQuestions[indexCounter].question;
  
  questionOption1.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 16;
    displayQuestion2();
  })
  questionOption2.addEventListener("click", function(){
    correct++;
    indexCounter++;
    displayQuestion2();
  })
  questionOption3.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 16;
    displayQuestion2();
  })
  questionOption4.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 16;
    displayQuestion2();
  })

// submitButton.addEventListener("click", function(){
//   if (answerStore === true){
//   indexCounter++;
//   } else {
//   indexCounter++;
//   secondsLeft = secondsLeft - 16;
//   }

// })
}

function displayQuestion2() {

  questionOption1.textContent = availableQuestions[indexCounter].options[0];
  questionOption2.textContent = availableQuestions[indexCounter].options[1];
  questionOption3.textContent = availableQuestions[indexCounter].options[2];
  questionOption4.textContent = availableQuestions[indexCounter].options[3];
  questionPrompt.textContent = availableQuestions[indexCounter].question;

  questionOption1.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 16;
    displayQuestion3();
  })
  questionOption2.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 16;
    displayQuestion3();
  })
  questionOption3.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 16;
    displayQuestion3();
  })
  questionOption4.addEventListener("click", function(){
    correct++;
    indexCounter++;
    displayQuestion3();
  })
  
// submitButton.addEventListener("click", function(){
//   if (answerStore === true){
//   indexCounter++;
//   } else {
//   indexCounter++;
//   secondsLeft = secondsLeft - 16;
//   }

// })
}
function displayQuestion3() {

  questionOption1.textContent = availableQuestions[indexCounter].options[0];
  questionOption2.textContent = availableQuestions[indexCounter].options[1];
  questionOption3.textContent = availableQuestions[indexCounter].options[2];
  questionOption4.textContent = availableQuestions[indexCounter].options[3];
  questionPrompt.textContent = availableQuestions[indexCounter].question;

  questionOption1.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 16;
    displayQuestion4();
  })
  questionOption2.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 16;
    displayQuestion4();
  })
  questionOption3.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 16;
    displayQuestion4();
  })
  questionOption4.addEventListener("click", function(){
    correct++;
    indexCounter++;
    displayQuestion4();
  })
  
// submitButton.addEventListener("click", function(){
//   if (answerStore === true){
//   indexCounter++;
//   } else {
//   indexCounter++;
//   secondsLeft = secondsLeft - 16;
//   }

// })
}
function displayQuestion4() {

  questionOption1.textContent = availableQuestions[indexCounter].options[0];
  questionOption2.textContent = availableQuestions[indexCounter].options[1];
  questionOption3.textContent = availableQuestions[indexCounter].options[2];
  questionOption4.textContent = availableQuestions[indexCounter].options[3];
  questionPrompt.textContent = availableQuestions[indexCounter].question;

  questionOption1.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 16;
    gameOver();
  })
  questionOption2.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 16;
    gameOver();
  })
  questionOption3.addEventListener("click", function(){
    wrong++;
    indexCounter++;
    secondsLeft = secondsLeft - 16;
    gameOver();
  })
  questionOption4.addEventListener("click", function(){
    correct++;
    indexCounter++;
    gameOver();
  })
  
// submitButton.addEventListener("click", function(){
//   if (answerStore === true){
//   indexCounter++;
//   } else {
//   indexCounter++;
//   secondsLeft = secondsLeft - 16;
//   }

// })
}

//Function evaluating correctness
function correctEval () {
  if (answerStore === correctAnswer) {
    indexCounter++;
    changeQuestion();
  } else {
    
  }

}

function timerset() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.innerHTML = secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          gameOver();
        }
        return 0;
      }, 1000);
}

//Change h1 styling and hide other page elements or display image; also display score and give user option to input initials
function gameOver() {
    timeLeft.innerHTML = "0";
    questionPrompt.textContent = "";
    ansBtn.textContent = "";
}




//Code begins here
startQuiz();
