//function checkQuiz() {
//    for (var i=0; i < questions.length; i++) {
//        var radioOptions = document.getElementsByName("q-" + (i));
//        var chosenButton = getOption(radioOptions);
//        
//        if (questions[i].choices[chosenButton][1] != true) {
//            allWrongAns.push(questions[i]);
//            console.log("Question " + (i+1) + " is wrong");
//        } else {
//            console.log("Question " + (i+1) + " is right");
//        }
//        
//        var results = document.getElementById("show-result");
//        
//        clearContent();
//        results.innerHTML = "<p>right</p>";
//    }
//}
//
//checkQuiz();