$(document).ready(function () {

var correctTotal =0;
var wrongTotal = 0;
var intervalId;
var clockRunning = false;
var countDownTimer = 30;
var numQuestions= -1;
console.log(countDownTimer + "declare number of secs");
var triviaQuest = [{ 
      question: "What is the scientific name for the trunk of an elephant?",
      A: "Snufflelupagus",
      B: "Probosis",
      C: "Luggage",
      D: "Snoutus",
      correct: "B",
      questImage: "./assets/images/elephant.jpg",
},{
      question: "Which ape gets its name from the Maly word meaning",
      A: "Gorilla",
      B: "Chimpanzee",  
      C: "Orangutan",
      D: "Howler",
      correct: "C",
      questImage: "./assets/images/Orangutan.jpg",
},{
    question: "How is th domestic CAVY better known?",
    A: "Guinea Pig",
    B: "Mouse",
    C: "Beaver",
    D: "Rat",
    correct: "A",
    questImage: "./assets/images/Guineapig.jpg",
},{
    question: "What are the male honey bees called that are the only members of the colony allowed to to mate with the queen?",
    A: "Worker",
    B: "King",
    C: "Hornet",
    D: "Drone",
    correct: "D",
    questImage: "./assets/images/Bee.jpg",
},{    
    question: "What kind of animal is a karakul?",
    A: "Baboon",
    B: "Sheep",
    C: "Lizard",
    D: "Horse",
    correct: "B",
    questImage: "./assets/images/sheep.jpg",
},{
    question: "'Murder' is a collective noun for a group of of which bird?",
    A: "Crow",
    B: "Robin",
    C: "Cardinal",
    D: "Red Faced Warbler",
    correct: "A",
    questImage: "./assets/images/crow.jpg",
},{
    question: "What is a Cabbage White?",
    A: "Moth",
    B: "Finch",
    C: "Butterfly",
    D: "Snake",
    correct: "C",
    questImage: "./assets/images/butterfly.jpg",
},{
    question: "How many arms do most starfish have?",
    A: "Six",
    B: "Seven",
    C: "Five",
    D: "Eight",
    correct: "A",
    questImage: "./assets/images/starfish.jpg",
},{ 
    question: "From which animal is mohair obtained?",
    A: "LLama",
    B: "Horse",
    C: "Sheep",
    D: "Goat",
    correct: "D",
    questImage: "./assets/images/Goat.jpg",
},{
    question: "What kind of animal is a Flemish giant",
    A: "Lion",
    B: "Rabbit",
    C: "Beaver",
    D: "Cheetah",
    correct: "B",
    questImage: "./assets/images/rabbit.jpg",
 }]


//Start Game
$("#startBtn").on("click",showQuestions);

$(".answer").on("click",pickAnswer);


function pickAnswer() {
    console.log($(this).val())
    console.log(triviaQuest[numQuestions].correct)
    if ($(this).val() === triviaQuest[numQuestions].correct){

        console.log("win")
        win();
    } else {
        console.log("lose")
        lose();
    }


    }


function showQuestions() {
    
    numQuestions++
    countDownTimer = 30;
    
    
         $("#startBtn").removeClass("show").addClass("hide");
        $("#questionPage").removeClass("hide").addClass("show");
        $("#questionCard").html(triviaQuest[numQuestions].question);
        $("#answerCard").removeClass("show").addClass("hide");       
        $("#btnA").html(triviaQuest[numQuestions].A);
        $("#btnB").html(triviaQuest[numQuestions].B);
        $("#btnC").html(triviaQuest[numQuestions].C);
        $("#btnD").html(triviaQuest[numQuestions].D);

      console.log("start timer");
      startTimer();
   // }
}

function showAnswer (message) {
    //remove question page
    $("#questionPage").removeClass("show").addClass("hide");
    
    //Show the Answer page
    $("#answerCard").removeClass("hide").addClass("show");
    
    //display the answer
    $("#answerText").html(message + " The Answer is: " + triviaQuest[numQuestions].correct);

    //display the pic
    $("#animalPic").attr("src",triviaQuest[numQuestions].questImage);

    // if (numQuestions===triviaQuest.length){
        //show totals page

    // } else {
    $("#nextBtn").on("click",showQuestions);

    // }
}






//start the timer for each question
function startTimer () {
    clearInterval(intervalId);
    console.log(countDownTimer + "just started timer");
    intervalId = setInterval(countDown,1000);
 
};

//countDown reduced by 1. if out of time show the answer page
function countDown () {
   console.log(countDownTimer + "this is how many seconds on the timer to start");

    if (countDownTimer === 0) {
        //increase wrong answer tally
       lose();
     
    }else {
        countDownTimer--;
        console.log(countDownTimer + "this is about to be reduced")
        $("#timeHeader").html("Time Remaining: " + countDownTimer);
        
    }

};

function lose () {

    wrongTotal++;
      
    //reset timer
    clearInterval(intervalId);
    showAnswer("Incorrect");
}

function win () {

    correctTotal++;
    clearInterval(intervalId);
    showAnswer("Correct");

}

});

// var timeLeft = 30;
// var elem = document.getElementById('some_div');

// var timerId = setInterval(countdown, 1000);

// function countdown() {
//   if (timeLeft == 0) {
//     clearTimeout(timerId);
//     doSomething();
//   } else {
//     elem.innerHTML = timeLeft + ' seconds remaining';
//     timeLeft--;
//   }
// }
