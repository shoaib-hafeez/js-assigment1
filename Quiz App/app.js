
var questions = [
  {
    question: "1) What is the capital of France________________",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "2) What is the capital of pakistan_________________",
    options: ["Islamabad", "Karachi", "Kherpoor", "Lahore"],
    answer: "Islamabad",
  },
  {
    question: "3) CSS stand for________________",
    options: ["python", "Java Script", "html", "Cascading Style sheet"],
    answer: "Cascading Style sheet",
  },
  
  {
    question: "4) CSS stand for________________",
    options: ["python", "Java Script", "html", "Cascading Style sheet"],
    answer: "Cascading Style sheet",
  },
  {
    question: "5) What is the capital of pakistan_________________",
    options: ["Islamabad", "Karachi", "Kherpoor", "Lahore"],
    answer: "Islamabad",
  },
];


var displayQuestion = document.getElementById("displayQuestion");
var currentQuestionNumber = document.getElementById("currentQuestionNumber");
var totalQuestionNumber = document.getElementById("totalQuestionNumber");
var options = document.getElementById("options");

var currentQuestion = 0;
var score = 0;

function loadQuestion() {
  var que = questions[currentQuestion];
  displayQuestion.innerHTML = que.question;
  totalQuestionNumber.innerHTML= que.questions.length ;
  currentQuestionNumber.innerHTML= currentQuestion + 1 ;
  
  options.innerHTML = " " ;

  
  for(var i = 0 ; i<que.options.length; i++ ){
    options.innerHTML += `<div> <button onclick="selectAnswer("${que.correctAnswer})","${que.options[i]})","${que.options[i]})"</button>
    </div>`;
  }
}
function nextQuestion(){
    currentQuestion++;
    loadQuestion();
}

function checkAnswer(correctAnswer ,selectedOption)  {
  

  if (correctAnswer === selectedOption) {
    score = score + 1;
}
console.log(score)
nextQuestion();
 
}



loadQuestion();
