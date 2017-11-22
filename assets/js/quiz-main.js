function checkQuiz() {
    console.log("checking quiz");
    for (var i=0; i < questions.length; i++) {
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

    results.innerHTML += '<a href="' + quizLink + '" class="quiz-button quiz-button-' + chapter + '">Take quiz again!</a><br>';

    results.innerHTML += '<p class="start-result">Result: ' + (questions.length - allWrongAns.length) 
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