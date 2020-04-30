var startBtn = document.querySelector(".start-btn");
var startBtnContainer = document.querySelector(".start-btn-container");
var questionContainer = document.querySelector(".question-container");
var questions = document.querySelector(".questions");
var allButtons = document.querySelector(".all-buttons");

startBtn.addEventListener("click", startQuiz);


function startQuiz() {
    startBtn.classList.add("hide");
    startBtnContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    // quizQuestion()
}

// function quizQuestion() {
//     showQuestion()
// }

function showQuestion() {

    questions.innerHTML = quizQuestions[0].question
}

showQuestion()

var quizQuestions = [
    {
        "question": "Commonly used data types DO NOT include: ",
        "answer": "alerts"
    },
    {
        "question": "The condition in an if / else statement is enclosed within ___.",
        "answer": "parentheses"
    },
    {
        "question": "Arrays in JavaScript can be used to store ___.",
        "answer": "all of the above"
    },
    {
        "question": "String values must be enclosed within ___ when being assigned to variables.",
        "answer": "quotes"
    },
    {
        "question": "A very useful tool used during development and debugging for printing content to the debugger is: ",
        "answer": "console.log"
    }
]   