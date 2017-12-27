var questionElements = [];
var numQuestions = 10;
var questions;
var chapter = 1;
var quizLink = "unit1-quiz.html"


var allWrongAns = [];

for (var i=0; i<numQuestions; i++) {
    questionElements[i] = document.getElementById("question-" + (i+1));
}

function generateQuiz() {
    questions = [
        
        /** QUESTION 1 **/
        new quiz(
            "To display a numbered or any ordered list on a web page, which HTML element tag is used?",
            [
                ["&lt;ul&gt;", false],
                ["&lt;nl&gt;", false],
                ["&lt;ol&gt;", true],
                ["&lt;il&gt;", false]        
            ]),
        
        /** QUESTION 2 **/
        new quiz(
            "(True or False) for conflicting styles on stylesheets, the latter implementation is ignored. It always uses the first implementation", 
            [
                ["True", false],
                ["False", true] 
            ]),
        
        /** QUESTION 3 **/
        new quiz(
            "What attribute follows the element 'a' to specify and embedded link?<br><em>&lta .. &gt;</em>",
            [
                ["src", false],
                ["embed", false], 
                ["link", false],
                ["href", true] 
            ]),
        
        /** QUESTION 4 **/
        new quiz(
            "(True or False) There are three ways to associate a stylesheet in an HTML file: inline, embedded and linking external stylesheets", 
            [
                ["True", true],
                ["False", false]
            ]),
        
        /** QUESTION 5 **/
        new quiz(
            "Which of the following elements are NOT needed to create a table?",
            [
                ["tc", true],
                ["tr", false],
                ["th", false],
                ["td", false],
            ]),
        
        /** QUESTION 6 **/
        new quiz(
            "CSS stands for:",
            [
                ["Creative Style Sheets", false],
                ["Creative Style Scripts", false],
                ["Cascading Style Sheets", true],
                ["Cascading Style Scripts", false]
            ]),
        
        /** QUESTION 7 **/
        new quiz(
            "Which major HTML element defines some of the properties of the webpage including the title, meta information as well as stylesheets and scripts?",
            [
                ["&lt;html&gt;", false],
                ["&lt;head&gt;", true],
                ["&lt;body&gt;", false],
                ["&lt;info&gt;", false],
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