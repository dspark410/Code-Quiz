var startBtn = document.querySelector(".start-btn");
var startBtnContainer = document.querySelector(".start-btn-container");

var questionContainer = document.querySelector(".question-container");
var questions = document.querySelector(".questions");

var allButtons = document.querySelector(".all-buttons");
var questionsBtn1 = document.querySelector(".question-btn1");
var questionsBtn2 = document.querySelector(".question-btn2");
var questionsBtn3 = document.querySelector(".question-btn3");
var questionsBtn4 = document.querySelector(".question-btn4");

var timer = document.querySelector(".time-interval");
var timerStart = 75;

var doneContainer = document.querySelector(".done-container");
var finalScore = document.querySelector(".final-score");
var submitBtn = document.querySelector("#submitbutton");

var viewHighScores = document.querySelector(".viewhighscores");
var highscoresContainer = document.querySelector(".highscores-container");

var enterInitials = document.querySelector(".enter-initials");
var highScoresList = document.querySelector(".highscores-list");

var goBack = document.querySelector(".go-back");
var clear = document.querySelector(".clear");

var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include: ",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        correct: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ___.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parentheses",
        choice4: "square brackets",
        correct: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        correct: "all of the above"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parentheses",
        correct: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        correct: "console.log"
    }
]

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startBtn.classList.add("hide");
    startBtnContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    setTimer();
    showQuiz();
}

function showQuiz() {
    var q = quizQuestions[questionsIndex]
    questions.textContent = q.question
    questionsBtn1.textContent = q.choice1
    questionsBtn2.textContent = q.choice2
    questionsBtn3.textContent = q.choice3
    questionsBtn4.textContent = q.choice4
};

var lastQuestionsindex = quizQuestions.length-1;
var questionsIndex = 0;

questionsBtn1.addEventListener("click", checkAnswer);
questionsBtn2.addEventListener("click", checkAnswer);
questionsBtn3.addEventListener("click", checkAnswer);
questionsBtn4.addEventListener("click", checkAnswer);


function checkAnswer(answer) {
    if(answer.target.textContent === quizQuestions[questionsIndex].correct) {
        correctAnswer();
    } else {
        //Delay in time subtraction rendering on the screen.
        timerStart -= 10
        wrongAnswer();     
    }
    
    if (questionsIndex < lastQuestionsindex) {
        questionsIndex++
        showQuiz();
    } else {
        finalScore.textContent = "Your final score is: " + timerStart + ".";
        doneContainer.classList.remove("hide");
        questionContainer.classList.add("hide");
        questionsIndex = 0;  
    }
}

    function correctAnswer() {
        var element = document.createElement("p");
        element.textContent = "Correct!";
        element.classList.add("alert");
        document.body.appendChild(element);
        setTimeout(function() {
        document.body.removeChild(element);
        
        }, 700);
    }

    function wrongAnswer() {
        var element = document.createElement("p");
        element.textContent = "Wrong!";
        element.classList.add("alert");
        document.body.appendChild(element);
        setTimeout(function() {
        document.body.removeChild(element);
        
        }, 700);
    }

function setTimer() {
    var timerInterval = setInterval(function() {
        if (doneContainer.classList.value === "done-container") {
            //Delay in time rendering on the screen.
            clearInterval(timerInterval);
            timer.textContent = "Time: " + timerStart;
            return;
        }
    
        timerStart--
        timer.textContent = "Time: " + timerStart;
        
        if (timerStart === 0) {
            clearInterval(timerInterval);
            doneContainer.classList.remove("hide");
            questionContainer.classList.add("hide"); 
            finalScore.textContent = "Your final score is: " + timerStart + "."
        } 
    }, 1000);
    
} 
var scores = [];

if (getIt()){
    scores = JSON.parse(getIt())
}

submitBtn.addEventListener("click", submitScore);

function submitScore(event) {

    event.preventDefault();


    if (!/[^a-zA-Z]/.test(enterInitials.value) && enterInitials.value.length === 2) {

        var player = {
            name: enterInitials.value,
            score: timerStart
        }

        scores.push(player);
        highScoresList.innerHTML = ""
        for (let i = 0; i < scores.length; i++) {
            var li = document.createElement("li");
            var inputValue = scores[i].name
            li.textContent = inputValue.toUpperCase() + " - " + scores[i].score;
            highScoresList.appendChild(li);
        }
        
        doneContainer.classList.add("hide");
        highscoresContainer.classList.remove("hide");
        viewHighScores.classList.add("hide");

        } else {
        alert("Please enter your initials");
        enterInitials.value = "";
        }
    
    enterInitials.value = ""
    localStorage.setItem("scores", JSON.stringify(scores));
}

goBack.addEventListener("click", goBackQuiz);

function goBackQuiz() {
    startBtnContainer.classList.remove("hide");
    highscoresContainer.classList.add("hide");
    startBtn.classList.remove("hide");
    viewHighScores.classList.remove("hide");
    timer.classList.remove("hide");
    timerStart = 75;
    timer.textContent = "Time: " + timerStart;
}

clear.addEventListener("click", clearScores);

function clearScores() { 
    while (highScoresList.firstChild) {
      highScoresList.removeChild(highScoresList.firstChild);
      localStorage.clear("scores");
      scores = []

    }
    
 }

 viewHighScores.addEventListener("click", linkHighScore);

 function linkHighScore() {

    doneContainer.classList.add("hide");
    questionContainer.classList.add("hide");
    startBtnContainer.classList.add("hide");
    timer.classList.add("hide");
    viewHighScores.classList.add("hide");
    
    highscoresContainer.classList.remove("hide");
    
 }

function getIt() {
     return localStorage.getItem("scores");
 }
