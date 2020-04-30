var startBtn = document.querySelector(".start-btn");
var startBtnContainer = document.querySelector(".start-btn-container");
var questionContainer = document.querySelector(".question-container");
var questions = document.querySelector(".questions");
var allButtons = document.querySelector(".all-buttons");
var questionsBtn1 = document.querySelector(".question-btn1");
var questionsBtn2 = document.querySelector(".question-btn2");
var questionsBtn3 = document.querySelector(".question-btn3");
var questionsBtn4 = document.querySelector(".question-btn4");

startBtn.addEventListener("click", startQuiz);

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

function startQuiz() {
    startBtn.classList.add("hide");
    startBtnContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    quizQuestion()
}

function quizQuestion() {
    showQuiz()
}

function showQuiz() {
    questions.innerHTML = quizQuestions[0].question
    questionsBtn1.innerHTML = quizQuestions[0].choice1
    questionsBtn2.innerHTML = quizQuestions[0].choice2
    questionsBtn3.innerHTML = quizQuestions[0].choice3
    questionsBtn4.innerHTML = quizQuestions[0].choice4
    
    quizQuestions[0].addEventListener("click", function() {
        console.log(quizQuestions[0])
    }
)}

//if (quizQuestions[0].correct === ) { 

//}


   