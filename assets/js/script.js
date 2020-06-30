
var correctAnswers = 0;
var incorrectAnswers = 0;

const questions = [
    {
        question: "What day of the week is today?",
        answer1: "Monday",
        answer2: "Tuesday",
        answer3: "Wednesday",
        answer4: "Thursday",
        answer5: "Friday",
        answer6: "Saturday",
        answer7: "Sunday",
        correctAnswer: "Monday"
    },
    {
        question: "What day of the week is tomorrow?",
        answer1: "Monday",
        answer2: "Tuesday",
        answer3: "Wednesday",
        answer4: "Thursday",
        answer5: "Friday",
        answer6: "Saturday",
        answer7: "Sunday",
        correctAnswer: "Tuesday"
    },
    {
        question: "What day of the week was yesterday?",
        answer1: "Monday",
        answer2: "Tuesday",
        answer3: "Wednesday",
        answer4: "Thursday",
        answer5: "Friday",
        answer6: "Saturday",
        answer7: "Sunday",
        correctAnswer: "Sunday"
    }
]

var currentQuestionIdx = 0;

function init()
{
    currentQuestionIdx = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;

    document.getElementById("intro").hidden = false;
    document.getElementById("quiz").hidden = true;
    document.getElementById("summary").hidden = true;

    
}


function getQuestion() {
    var q = questions[currentQuestionIdx];

    console.log("Question: " + q.question);

    var question = document.getElementById("question");
    question.innerHTML = q.question;

    var answer1 = document.getElementById("answer1");
    answer1.innerHTML = q.answer1;

    var answer2 = document.getElementById("answer2");
    answer2.innerHTML = q.answer2;

    var answer3 = document.getElementById("answer3");
    answer3.innerHTML = q.answer3;

    var answer4 = document.getElementById("answer4");
    answer4.innerHTML = q.answer4;

    var answer5 = document.getElementById("answer5");
    answer5.innerHTML = q.answer5;

    var answer6 = document.getElementById("answer6");
    answer6.innerHTML = q.answer6;

    var answer7 = document.getElementById("answer7");
    answer7.innerHTML = q.answer7;

}

function startQuiz() {
    document.getElementById("intro").hidden = true;

    getQuestion();

    document.getElementById("quiz").hidden = false;

}

function submitAnswer(answer) {
    var a = document.getElementById(answer);

  //  alert(a.innerText);

    var q = questions[currentQuestionIdx];

    if (q.correctAnswer == a.innerText) {
        alert("Correct");
        //increment correct counter
        correctAnswers++;

    }
    else {
        alert("Incorrect");
        //increment incorrect counter
        incorrectAnswers++;
        //decrement the timer
    }

    getNextQuestion();
}


function getNextQuestion() {
    currentQuestionIdx++;

    if (currentQuestionIdx > questions.length - 1) {
        showSummary()
    }
    else {

        getQuestion();
    }
}

function showSummary() {
    document.getElementById("summary").hidden = false;
    document.getElementById("quiz").hidden = true;
    //prompt for use name / show score
    document.getElementById("totalNumberOfQuestions").innerHTML = questions.length;
    document.getElementById("correctAnswers").innerHTML = correctAnswers;
    document.getElementById("incorrectAnswers").innerHTML = incorrectAnswers;
    //save to local storage

}

function saveScore()
{
    var initials = document.getElementById("initials").value;

    var totalQuestions = questions.length;
        
    var score =  (Math.round(Number(correctAnswers) / Number(totalQuestions) * 100) / 100)  * 100 + '% ' + initials;

    var highScores = window.localStorage.getItem('highScores');
    
    if(highScores || highScores === "")
    {
        
        highScores = highScores + '\n' + score;
    }   
    else
    {
        highScores = "high scores:\n" + score;
    }
     
    window.localStorage.setItem('highScores', highScores);
    
    viewHighScores();
    
    init();
}   

function viewHighScores() {
    var highScores = window.localStorage.getItem('highScores');

    if(highScores || highScores === "")
    {
        
       alert(highScores);
    }   
    else
    {
        alert("There are no high scores");
    }    
}

function clearHighScores() {
   window.localStorage.clear;   
   window.localStorage.removeItem('highScores')
}

