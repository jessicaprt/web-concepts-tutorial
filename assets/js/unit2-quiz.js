var questionElements = [];
var numQuestions = 10;
var questions;
var chapter = 2;
var quizLink = "unit2-quiz.html"


var allWrongAns = [];

for (var i=0; i<numQuestions; i++) {
    questionElements[i] = document.getElementById("question-" + (i+1));
}

function generateQuiz() {
    questions = [
        
        /** QUESTION 1 **/
        new quiz(
            "Which symbol is used as an assignment operator (e.g., when assigning values to variables)?",
            [
                ['"="', true],
                ['"=="', false],
                ['"==="', false]       
            ], 0),
        
        /** QUESTION 2 **/
        new quiz(
            "what keyword is typed before declaring a variable?", 
            [
                ["this", false],
                ["function", false], 
                ["variable", false], 
                ["var", true] 
            ], 3),
        
        /** QUESTION 3 **/
        new quiz(
            "Which among the following is NOT a relational operator?",
            [
                ["!=", true],
                ["&lt;", false], 
                ["&gt;", false],
                ["&lt;=", true] 
            ], 0),
        
        /** QUESTION 4 **/
        new quiz(
            "in the code below what is a and b called?<br>&nbsp;&nbsp;&nbsp;function(a,b) {..}", 
            [
                ["inputs", false],
                ["parameters", true],
                ["variables", false]
            ], 1),
        
        /** QUESTION 5 **/
        new quiz(
            "(True or False) console.log is used to print to the console",
            [
                ["True", true],
                ["False", false]
            ], 0),
        
        /** QUESTION 6 **/
        new quiz(
            "What are two ways to create a loop?",
            [
                ["While and Stay", false],
                ["Stay and For", false],
                ["For and Loop", false],
                ["While and For", true]
            ], 3),
        
        /** QUESTION 7 **/
        new quiz(
            "Which DOM method gets the HTML element by providing the element's ID?",
            [
                ["getIdByElement", false],
                ["getElement", false],
                ["getElementById", true],
                ["getElementId", false],
            ], 2)        
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