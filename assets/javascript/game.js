$(document).ready(function () {

    var correctTotal = 0;
    var wrongTotal = 0;
    var incomplete = 0;
    var intervalId;
    var end = false;
    var countDownTimer = 30;
    var numQuestions = -1;
    console.log(countDownTimer + "declare number of secs");
    var triviaQuest = [{
        question: "What is the scientific name for the trunk of an elephant?",
        A: "Snufflelupagus",
        B: "Probosis",
        C: "Luggage",
        D: "Snoutus",
        correct: ["B", "Probosis"],
        questImage: "./assets/images/elephant.jpg",
    }, {
        question: "Which ape gets its name from the Maly word meaning",
        A: "Gorilla",
        B: "Chimpanzee",
        C: "Orangutan",
        D: "Howler",
        correct: ["C", "Orangutan"],
        questImage: "./assets/images/Orangutan.jpg",
    }, {
        question: "How is th domestic CAVY better known?",
        A: "Guinea Pig",
        B: "Mouse",
        C: "Beaver",
        D: "Rat",
        correct: ["A", "Guinea Pig"],
        questImage: "./assets/images/Guineapig.jpg",
    }, {
        question: "What are the male honey bees called that are the only members of the colony allowed to to mate with the queen?",
        A: "Worker",
        B: "King",
        C: "Hornet",
        D: "Drone",
        correct: ["D", "Drone"],
        questImage: "./assets/images/Bee.jpg",
    }, {
        question: "What kind of animal is a karakul?",
        A: "Baboon",
        B: "Sheep",
        C: "Lizard",
        D: "Horse",
        correct: ["B", "Sheep"],
        questImage: "./assets/images/sheep.jpg",
    }, {
        question: "'Murder' is a collective noun for a group of of which bird?",
        A: "Crow",
        B: "Robin",
        C: "Cardinal",
        D: "Red Faced Warbler",
        correct: ["A", "Crow"],
        questImage: "./assets/images/crows.jpg",
    }, {
        question: "What is a Cabbage White?",
        A: "Moth",
        B: "Finch",
        C: "Butterfly",
        D: "Snake",
        correct: ["C", "Butterfly"],
        questImage: "./assets/images/butterfly.jpg",
    }, {
        question: "How many arms do most starfish have?",
        A: "Six",
        B: "Seven",
        C: "Five",
        D: "Eight",
        correct: ["A", "Six"],
        questImage: "./assets/images/starfish.jpg",
    }, {
        question: "From which animal is mohair obtained?",
        A: "LLama",
        B: "Horse",
        C: "Sheep",
        D: "Goat",
        correct: ["D", "Goat"],
        questImage: "./assets/images/Goat.jpg",
    }, {
        question: "What kind of animal is a Flemish giant",
        A: "Lion",
        B: "Rabbit",
        C: "Beaver",
        D: "Cheetah",
        correct: ["B", "Rabbit"],
        questImage: "./assets/images/rabbit.jpg",
    }]


    //Start Game
    $("#startBtn").on("click", showQuestions);

    $(".answer").on("click", pickAnswer);

    $("#nextBtn").on("click", showQuestions);

    $("#resetBtn").on("click", reset);

    function pickAnswer() {

        if ($(this).val() === triviaQuest[numQuestions].correct[0]) {

        //    console.log("win")
            win();
        } else {
        //    console.log("lose")
            lose();
        }


    }

    // Display questions
    function showQuestions() {


        numQuestions++
        countDownTimer = 30;

        if (end === false) {

            $("#startBtn").removeClass("show").addClass("hide");
            $("#questionPage").removeClass("hide").addClass("show");
            $("#questionCard").html(triviaQuest[numQuestions].question);
            $("#answerCard").removeClass("show").addClass("hide");
            $("#timeHeader").html("Time Remaining: " + countDownTimer);
            $("#btnA").html(triviaQuest[numQuestions].A);
            $("#btnB").html(triviaQuest[numQuestions].B);
            $("#btnC").html(triviaQuest[numQuestions].C);
            $("#btnD").html(triviaQuest[numQuestions].D);

            console.log("start timer:execute time from showQuestions function");
            startTimer();

        } else {
            endGame();


        }
    }

    function showAnswer(message) {

        if (numQuestions === (triviaQuest.length - 1)) {
            $("#nextBtn").html("See Results");
            end = true;
        }

        //remove question page
        $("#questionPage").removeClass("show").addClass("hide");

        //Show the Answer page
        $("#answerCard").removeClass("hide").addClass("show");

        //display the answer
        $("#answerText").html(message + " The Answer is: " + triviaQuest[numQuestions].correct[0] + " - " + triviaQuest[numQuestions].correct[1]);

        //display the pic
        $("#animalPic").attr("src", triviaQuest[numQuestions].questImage);

    };

    //start the timer for each question
    function startTimer() {
       
        clearInterval(intervalId);
        intervalId = setInterval(countDown, 1000);

    };

    //countDown secs by 1. If out of time show the answer page
    function countDown() {

        if (countDownTimer === 0) {
            incomplete++;
            lose();

        } else {
            countDownTimer--;
            $("#timeHeader").html("Time Remaining: " + countDownTimer);

        }

    };

    //increase the wrong answer tally and reset timer
    function lose() {

        wrongTotal++;

        clearInterval(intervalId);

        showAnswer("Incorrect!! ");

    }
    //increase correct tally and rest timer
    function win() {

        correctTotal++;

        clearInterval(intervalId);

        showAnswer("Correct!! ");

    }

    //after all questions are answered, display results
    function endGame() {

        $("#questionPage").removeClass("show").addClass("hide");
        $("#answerCard").removeClass("show").addClass("hide");
        $("#totalCard").removeClass("hide").addClass("show");
        $("#correctTotal").html("Correct answers: " + correctTotal);
        $("#wrongTotal").html("Incorrect answers: " + wrongTotal);
        $("#unansweredTotal").html("Unanswered questions: " + incomplete);
    }


    // reset the game to start over
    function reset() {
        correctTotal = 0;
        wrongTotal = 0;
        incomplete = 0;
        intervalId;
        end = false;
        countDownTimer = 30;
        numQuestions = -1;

        $("#totalCard").removeClass("show").addClass("hide");
        $("#startBtn").removeClass("hide").addClass("show");

    }

});


