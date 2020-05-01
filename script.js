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
var timer2 = document.querySelector(".time-interval2");
var timerStart = 75

var doneContainer = document.querySelector(".done-container");
var finalScore = document.querySelector(".final-score");
var submitBtn = document.querySelector(".subtmitbutton");

var highscoresContainer = document.querySelector(".highscores-container")

var goBack = document.querySelector(".go-back")
var clear = document.querySelector(".clear")

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

var lastQuestionsindex = quizQuestions.length-1
var questionsIndex = 0

function showQuiz() {
    timer.classList.add("hide");
    var q = quizQuestions[questionsIndex]
    questions.textContent = q.question
    questionsBtn1.textContent = q.choice1
    questionsBtn2.textContent = q.choice2
    questionsBtn3.textContent = q.choice3
    questionsBtn4.textContent = q.choice4
}

questionsBtn1.addEventListener("click", checkAnswer)
questionsBtn2.addEventListener("click", checkAnswer)
questionsBtn3.addEventListener("click", checkAnswer)
questionsBtn4.addEventListener("click", checkAnswer)


function checkAnswer(answer) {
    if(answer.target.textContent === quizQuestions[questionsIndex].correct) {
        correctAnswer();
    } else {
        wrongAnswer();
        timerStart -= 10
    }
    
    if (questionsIndex < lastQuestionsindex) {
        questionsIndex++
        showQuiz();
    }else {
        doneContainer.classList.remove("hide");
        questionContainer.classList.add("hide");
    }
}

function correctAnswer() {
    var element = document.createElement("p")
    element.textContent = "Correct!"
    allButtons.appendChild(element)
}   
    
function wrongAnswer() {
    var element = document.createElement("p")
    element.textContent = "Wrong!"
    allButtons.appendChild(element)
}

function setTimer() {
    var timerInterval = setInterval(function () {
        timerStart--
        timer2.textContent = "Time: " + timerStart;
        
        if (timerStart === 0) {
            clearInterval(timerInterval);
            doneContainer.classList.remove("hide");
            questionContainer.classList.add("hide"); 
        }
    }, 1000);
} 

submitBtn.addEventListener("click", showScores);

function showScores() {
    preventDefault();
    doneContainer.classList.add("hide");
    highscoresContainer.classList.remove("hide");
}



    

// questionsBtn3.addEventListener("click", clickButtons);

// function clickButtons() {
//     if (quizQuestions[0].choice3 === quizQuestions[0].correct)
//     var element = document.createElement("p")
//     element.textContent = "You are correct!"
//     element.style.textAlign =  "center"
//     allButtons.appendChild(element)

