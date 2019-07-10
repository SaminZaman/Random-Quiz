//Mark the quiz and provide feedback for how the user did
"use strict";

//Event Listeners
document.getElementById("mark-btn").addEventListener("click",markQuiz);

//Event Functions
function markQuiz() {
    
    let totalScore = 0

    //Input
    let fireQ =  document.getElementById("fireQ").value;
    let sportQ =  document.getElementById("sportQ").value;
        sportQ = sportQ.toLowerCase();
    let spongebobQ =  document.getElementById("spongebobQ").value;
        spongebobQ = spongebobQ.toLowerCase();
    let greenQ =  document.getElementById("greenQ").value;
        greenQ = greenQ.toLowerCase();
    let shakibQ =  document.getElementById("shakibQ").value;
        shakibQ = shakibQ.toLowerCase();

    //Feedback
        //Question 1 (fire)
        if (fireQ ==1666) {
            document.getElementById("fireQ").style.backgroundColor = "rgb(111, 228, 95)";
            document.getElementById("fireFB").innerHTML = "Nice! You got this one right!";
            totalScore = totalScore + 1
        }
            else {
            document.getElementById("fireQ").style.backgroundColor = "rgb(228, 95, 95)";
            document.getElementById("fireFB").innerHTML = "I'm afraid your answer is incorrect. The answer we were looking for is '1666'.";
            }

        //Question 2 (sports leagues)
        if (sportQ == "mtv") {
            document.getElementById("sportQ").style.backgroundColor = "rgb(111, 228, 95)";
            document.getElementById("sportFB").innerHTML = "Nice! You got this one right!";
            totalScore = totalScore + 1
        }
            else {
            document.getElementById("sportQ").style.backgroundColor = "rgb(228, 95, 95)";
            document.getElementById("sportFB").innerHTML = "I'm afraid your answer is incorrect. The answer we were looking for is 'MTV'.";
            }

        //Question 3 (spongebob)
        if (spongebobQ == "spongebob" || spongebobQ == "spongebob squarepants"){
            document.getElementById("spongebobQ").style.backgroundColor = "rgb(111, 228, 95)";
            document.getElementById("spongebobFB").innerHTML = "Nice! You got this one right!";
            totalScore = totalScore + 1
        }
            else {
            document.getElementById("spongebobQ").style.backgroundColor = "rgb(228, 95, 95)";
            document.getElementById("spongebobFB").innerHTML = "I'm afraid your answer is incorrect. The answer we were looking for is 'MTV'.";
            }
        
        //Question 4 (green)
        if (greenQ == "chlorophyll") {
            document.getElementById("greenQ").style.backgroundColor = "rgb(111, 228, 95)";
            document.getElementById("greenFB").innerHTML = "Nice! You got this one right!";
            totalScore = totalScore + 1
        }
            else {
            document.getElementById("greenQ").style.backgroundColor = "rgb(228, 95, 95)";
            document.getElementById("greenFB").innerHTML = "I'm afraid your answer is incorrect. The answer we were looking for is 'chlorophyll'.";
            }

        //Question 5 (shakib)
        if (shakibQ == "bangladesh") {
            document.getElementById("shakibQ").style.backgroundColor = "rgb(111, 228, 95)";
            document.getElementById("shakibFB").innerHTML = "Nice! You got this one right!";
            totalScore = totalScore + 1
        }
            else {
            document.getElementById("shakibQ").style.backgroundColor = "rgb(228, 95, 95)";
            document.getElementById("shakibFB").innerHTML = "I'm afraid your answer is incorrect. The answer we were looking for is 'Bangladesh'.";
            }

    //Final Score
    if (totalScore == 5) {
        document.getElementById("score").innerHTML = "5";
        document.getElementById("percentScore").innerHTML = "100";
        alert("Great work! Your trivia knowledge is exceptional!");
    }
        else if (totalScore == 4){
            document.getElementById("score").innerHTML = "4";
            document.getElementById("percentScore").innerHTML = "80";
            alert("Good job! Your trivia knowledge is great!");
        }
        else if (totalScore == 3){
            document.getElementById("score").innerHTML = "3";
            document.getElementById("percentScore").innerHTML = "60";
            alert("Nice! Your trivia knowledge is alright.");
        }
        else if (totalScore == 2){
            document.getElementById("score").innerHTML = "2";
            document.getElementById("percentScore").innerHTML = "40";
            alert("Its okay, your trivia knowledge is still ok.");
        }

        else if (totalScore == 1){
            document.getElementById("score").innerHTML = "1";
            document.getElementById("percentScore").innerHTML = "20";
            alert("Don't worry about your score, you can always improve your trivia knowledge");
        }

        else if (totalScore == 0) {
            document.getElementById("score").innerHTML = "0";
            document.getElementById("percentScore").innerHTML = "0";
            alert("Oh No! You might want to work on your trivia knowledge");
        } 
}





