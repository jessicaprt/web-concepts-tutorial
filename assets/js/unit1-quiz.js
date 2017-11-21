var questionElements = [];
var numQuestions = 10;
var questions;


var allWrongAns = [];

for (var i=0; i<numQuestions; i++) {
    questionElements[i] = document.getElementById("question-" + (i+1));
//    console.log("question-" + i);
//    console.log(questionElements);
}

function generateQuiz() {
    /** QUESTION 1 **/
    var question1 = "Question 1: To display a numbered or any ordered list on a web page, which HTML element tag is used?";
    var choices1 = [
        ["&lt;ul&gt;", false],
        ["&lt;nl&gt;", false],
        ["&lt;ol&gt;", true],
        ["&lt;il&gt;", false]        
    ];
    
    /** QUESTION 2 **/ 
    var question2 = "Question2: (True or False) for conflicting styles on stylesheets, the latter implementation is ignored. It always uses the first implementation";
    var choices2 = [
        ["True", false],
        ["False", true] 
    ];
    
    /** QUESTION 3 **/
    var question3 = "Question3: What attribute follows the element 'a' to specify and embedded link?<br><em>&lta .. &gt;</em>";
    var choices3 = [
        ["src", false],
        ["embed", false], 
        ["link", false],
        ["href", true] 
    ];
    
    /** QUESTION 4 **/
    var question4 = "Question4: (True or False) There are three ways to associate a stylesheet in an HTML file: inline, embedded and linking external stylesheets";
    var choices4 = [
        ["True", true],
        ["False", false]
    ];
    
    questions = [
        new quiz(question1, choices1, 2),
        new quiz(question2, choices2, 1),
        new quiz(question3, choices3, 3),
        new quiz(question4, choices4, 0)
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

function checkQuiz() {
    console.log("checking quiz");
    for (var i=0; i < questions.length; i++) {
        
//        console.log("qlength: " + questions.length);
        console.log("checking: q-" + i);
        var radioOptions = document.getElementsByName("q-" + (i));
        var chosenButton = getOption(radioOptions);
        
        if (chosenButton != -1) {
            if (questions[i].choices[chosenButton][1] != true) {
                allWrongAns.push([questions[i], chosenButton]);
                console.log("Question " + (i+1) + " is wrong");
            } else {
                console.log("Question " + (i+1) + " is right");
            }

        } else {
            console.log("cannot read radio button: " + i);
            alert("please complete quiz!");
            return;
        } 
    }
    var quizElement = document.getElementById("quiz");
    quizElement.innerHTML = "";

    var results = document.getElementById("result");
    results.innerHTML = "";

    results.innerHTML += '<a href="unit1-quiz.html"> Start Another Quiz</a><br>';

    results.innerHTML += '<p>Results: ' + (questions.length - allWrongAns.length) 
                          + '/' + questions.length 
                          + '</p>';
    showResults(results);
}

function getOption(radioOptions) {
    console.log("getting options");
    var numOptions = radioOptions.length;
    for (var i=0; i < numOptions; i++) {
        if(radioOptions[i].checked) {
           return i;
        } 
    }
    return -1;
}

function showResults(resultsElement) {
    if (allWrongAns.length == 0) {
        resultsElement.innerHTML += '<br>';
        resultsElement.innerHTML += '<p>Perfect Score!<p>';
        console.log("wrong length: " + allWrongAns.length);
    } else {
        for (var i=0; i<allWrongAns.length; i++) {
            var currentQuestion = allWrongAns[i][0];
            var currentChoiceIdx = allWrongAns[i][1];
            
            resultsElement.innerHTML += '<br>';
            resultsElement.innerHTML += currentQuestion.question;
            resultsElement.innerHTML += '<p><strong>Your answer</strong> : ' + 
                                        currentQuestion.choices[currentChoiceIdx][0] + 
                                        '</p>';
            resultsElement.innerHTML += '<p><strong>Correct answer</strong> : ' +
                                        currentQuestion.choices[currentQuestion.rightAnsIdx][0] +
                                        '</p>';
        }
    }   
}

generateQuiz();