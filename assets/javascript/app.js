$(document).ready(function() {



    let totalQuiz = 15,
        correctAnswer = 0,
        incorrectAnswer = 0,
        noAnswer = 0,
        questionIndex = 0,
        count = 60;


    let questions = [{
        question: "What year was the Marine Corp Started",
        choices: ["1775", "2001", "1890", "1767"],
        answer: 0
    }, {
        question: "What is Mascot of the Marine Corp?",
        choices: ["Devil Dog", "Dragon", "English Bulldog", "Eagle"],
        answer: 2
    }, {
        question: "What rank is a E-4?",
        choices: ["Lance Corporal", "Corporal", "Sergeant", "Staff Sergeant"],
        answer: 1
    }, {
        question: "What is a Termenal Lance Corporal?",
        choices: ["Marine Doesnt Get past E-3 by EAS Date?", "A Lance Corporal that Dies?", "Give the alarm in case of fire or disorder.", "A made up term"],
        answer: 0
    }, {
        question: "Meaning of Semper Fidelis?",
        choices: ["Flexxxxxx", "Stay Mad", "Always Faithful", "Faithful Always"],
        answer: 2
    }, {
        question: "Meaning of the Blood Stripe",
        choices: ["In memory of those who died at the bombing of Beirut", "In memory of those who died in Desert Storm", "In memory of those who died in Iraq", "In memory of those who died at the battle of Chapultapec"],
        answer: 3
    }, {
        question: "What year did the Beirut Bombing happen?",
        choices: ["1992", "1983", "1987", "2001"],
        answer: 1
    }, {
        question: "How many Marine Corp Bases are in the USA?",
        choices: ["6", "3", "5", "11"],
        answer: 1
    }, {
        question: "Mission of the Marine Rifle Squad",
        choices: ["To locate, close with, and destroy the enemy, by fire and maneuver, or repel the enemy assault by fire and close combat.", "Protect no grunt Personal", "Kill Kill Kill", "Follow all Orders No Matter What"],
        answer: 0
    }, {
        question: "Grand Old Man of the Marine Corps",
        choices: ["Lewis B. Chesty Puller", "Dan Daly", "Smedley Butler", "Archibald Henderson"],
        answer: 3
    }, {
        question: "First Commandant of the Marine Corps",
        choices: ["Smedley Butler", "Captain Samuel Nichols", "Archibald Henderson", "Stewart Rhodes"],
        answer: 1
    }, {
        question: "Birthplace of the Marine Corps",
        choices: ["Boston", "New York", "Atlanta", "Tunn Tavern Philadelphia, PA"],
        answer: 3
    }, {
        question: "Birthday of the Marine Corps?",
        choices: ["25 DEC 1901", "11 NOC 1776", "10 NOV 1775", "23 OCT 1891"],
        answer: 2
    }, {
        question: "How many Articles are in the CODE OF CONDUCT",
        choices: ["3", "4", "6", "5"],
        answer: 2
    }, {
        question: "What is the symbol of the United States Marine Corps?",
        choices: ["American Flag", "Globe", "The Eagle, Globe, and Anchor", "The Rope and Eagle"],
        answer: 2
    }];


    function loadQuestion() {

        if (questionIndex < questions.length) {

            $('#questions').html(questions[questionIndex].question);

            $("#0").text(questions[questionIndex].choices[0]);
            $("#1").text(questions[questionIndex].choices[1]);
            $("#2").text(questions[questionIndex].choices[2]);
            $("#3").text(questions[questionIndex].choices[3]);
        } else {
            clearInterval(timer);
            $("#quiz, #timer").hide("slow");
            $("#results").show("slow");
            scoreCount();
        }
    };


    $(".mc").click(function() {
        userGuess = $(this).attr("id");

        if (userGuess == questions[questionIndex].answer) {
            correct = correctAnswer++;
            alert("correct!");
            console.log(correct + " correct");
        } else {
            incorrect = incorrectAnswer++;
            alert("Incorrect!");
            console.log(incorrect + " incorrect");
        }
        questionIndex++;
        loadQuestion();
    });


    function scoreCount() {
        var totalAnswered = correctAnswer + incorrectAnswer;
        console.log(totalAnswered);
        if (totalAnswered !== totalQuiz) {
            blank = totalQuiz - totalAnswered;
        }else{
            blank = 0;
        }

        $('#correct').html(" " + correctAnswer);
        $('#incorrect').html(" " + incorrectAnswer);
        $("#blank").html(" " + blank);
    }


    $("#quiz, #results").hide();



    $("#play").click(function() {
        $("#start").hide("slow");
        $("#quiz").show("slow");
        loadQuestion();



        let startTimer = setInterval(function() {
            count--;
            $("#countdown").html(count);



            if (count === 0) {
                clearInterval(timer);
                $("#quiz, #timer").hide("slow");
                $("#results").show("slow");
                scoreCount();
            }
        }, 1000);
    });


    $("#restart").click(function() {
        location.reload();
    });

});
