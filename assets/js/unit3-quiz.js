var questionElements = [];
var numQuestions = 10;
var questions;
var chapter = 3;
var quizLink = "unit3-quiz.html"


var allWrongAns = [];

for (var i=0; i<numQuestions; i++) {
    questionElements[i] = document.getElementById("question-" + (i+1));
}

function generateQuiz() {
    questions = [
        
        /** QUESTION 1 **/
        new quiz(
            "What does DTD stand for?",
            [
                ['"Document Testing Definition"', false],
                ['"Document Type Definition"', true],
                ['"Definition Type Document"', false],
                ['"Define Type Documentation"', false]          
            ]),
        
        /** QUESTION 2 **/
        new quiz(
            "What does XML stand for?", 
            [
                ["Embedded Markup Language", false],
                ["Elegant Markup Language", false], 
                ["External Markup Language", false], 
                ["Extensible Markup Language", true] 
            ]),
        
        /** QUESTION 3 **/
        new quiz(
            "Which ajax method gets the status of the HTTP request?",
            [
                ["status", true],
                ["getStatus", false], 
                ["getHttpStatus", false],
                ["httpStatus", false] 
            ]),
        
        /** QUESTION 4 **/
        new quiz(
            "Which ajax method creates a listener that listens when the server responds?", 
            [
                ["response", false],
                ["listenToServer", false], 
                ["createLisener", false],
                ["readyStateChange", true] 
            ]),
        
        /** QUESTION 5 **/
        new quiz(
            "What are the two types of schema elements?",
            [
                ["simple and extended", false],
                ["single and complex", false],
                ["simple and complex", true],
                ["single and multiple", false]
            ])     
        ];
    
    for (var i=0; i<questions.length; i++) {
        questionElements[i].innerHTML = questions[i].question;
        
        for (var j=0; j<questions[i].choices.length; j++) {
            var currRadioButton = document.getElementById("q" + (i+1));
            currRadioButton.innerHTML += '<input type="radio" name="q-' + i + '">';
            currRadioButton.innerHTML +=  questions[i].choices[j][0];
            currRadioButton.innerHTML += '</input><br>';
        }
    }
}

generateQuiz();