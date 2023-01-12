// add event listener for start button to start the game X
// when start button is hit the first question and a timer appear X
// the timer starts counting down upon start X
// the question is followed by 4 selectable answers X
// when the player selects a correct answer they are given points
// when the player selects a wrong answer the timer loses 10 seconds
// repeate the process for 4 seperate questions X
// add the points from each correct answer
// present the score at the end of the quiz
// if the timer runs out before all questions are answered the game ends
// allow player to enter their initials next to their score
// create a leaderboard with previous high scores
// display leaderboard at end of game
// allow player to play again

var questionEl = {
    one: 'What term refers to a true or false value?',
    two: 'What can be stored in Arrays?',
    three: 'What is the right answer?',
    four: 'What is the DOM?',
};

var firstAnswer = {
    one: 'Array',
    two: 'Strings and Numbers',
    three: 'Look Again',
    four: 'A spicy sauce from the Dominican Republic',
};

var secondAnswer = {
    one: 'String',
    two: 'other arrays',
    three: 'Nope',
    four: 'I dont know, you tell me.',
};

var thirdAnswer = {
    one: 'Function',
    two: 'booleans',
    three: 'Not this one.',
    four: "Dominic Toretto's nickname",
};

var fourthAnswer = {
    one: 'Boolean',
    two: 'All of the Above',
    three: 'This One!',
    four: 'Document Object Model',
};
var body = document.body;
var h2El = document.createElement("h2");
var inputEl = document.createElement("input");
var infoEl = document.createElement("p");
var timer = document.getElementById("timer");

var secondsLeft = 60;
var score = 1;
var timeInterval = null;

function countDown () {
    timeInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timeInterval);
            gameOver();
            secondsLeft = 60;
        }
    }, 1000);
}

function scoreBoard () {
    body.appendChild(h2El);
    body.appendChild(inputEl);
    body.appendChild(infoEl);
    score = secondsLeft * 5;
    h2El.textContent = "Congradulations, you scored " + score + " points on the Coding Quiz";
    infoEl.textContent = "Record your initials and save your score to the Leaderboard";

}

var startGame = document.getElementById("startGame");
var question = document.getElementById("question");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var deeNone = document.getElementsByClassName("d-none");



function gameOver () {
    timer.textContent = "Game Over!";
}




function firstQuestion() {
    question.textContent = questionEl['one'];
    answerOne.textContent = firstAnswer['one'];
    answerTwo.textContent = secondAnswer['one'];
    answerThree.textContent = thirdAnswer['one'];
    answerFour.textContent = fourthAnswer['one'];

    answerOne.addEventListener('click', Event => {
        startGame.textContent = 'WRONG!'
        secondsLeft -= 10;
        secondQuestion();
    })

    answerTwo.addEventListener('click', Event => {
        startGame.textContent = 'WRONG!'
        secondsLeft -= 10;
        secondQuestion();    
    })

    answerThree.addEventListener('click', Event => {
        startGame.textContent = 'WRONG!'
        secondsLeft -= 10;
        secondQuestion();
    })

    answerFour.addEventListener('click', Event => {
        startGame.textContent = 'Correct!'
        secondQuestion();
    })    
};

function secondQuestion() {
    question.textContent = questionEl['two'];
    answerOne.textContent = firstAnswer['two'];
    answerTwo.textContent = secondAnswer['two'];
    answerThree.textContent = thirdAnswer['two'];
    answerFour.textContent = fourthAnswer['two'];

    answerOne.addEventListener('click', Event => {
        startGame.textContent = 'WRONG!'
        thirdQuestion();
    })

    answerTwo.addEventListener('click', Event => {
        startGame.textContent = 'WRONG!'
        thirdQuestion();    
    })

    answerThree.addEventListener('click', Event => {
        startGame.textContent = 'WRONG!'
        thirdQuestion();
    })

    answerFour.addEventListener('click', Event => {
        startGame.textContent = 'Correct!'
        thirdQuestion();
    })       
};

function thirdQuestion() {
    question.textContent = questionEl['three'];
    answerOne.textContent = firstAnswer['three'];
    answerTwo.textContent = secondAnswer['three'];
    answerThree.textContent = thirdAnswer['three'];
    answerFour.textContent = fourthAnswer['three'];

    answerOne.addEventListener('click', Event => {
        startGame.textContent = 'WRONG!'
        fourthQuestion();
    })

    answerTwo.addEventListener('click', Event => {
        startGame.textContent = 'WRONG!'
        fourthQuestion();  
    })

    answerThree.addEventListener('click', Event => {
        startGame.textContent = 'WRONG!'
        fourthQuestion();
    })

    answerFour.addEventListener('click', Event => {
        startGame.textContent = 'Correct!'
        fourthQuestion();
    })   
};

function fourthQuestion() {
    question.textContent = questionEl['four'];
    answerOne.textContent = firstAnswer['four'];
    answerTwo.textContent = secondAnswer['four'];
    answerThree.textContent = thirdAnswer['four'];
    answerFour.textContent = fourthAnswer['four'];

    answerOne.addEventListener('click', Event => {
        startGame.textContent = 'WRONG!'
        clearInterval(timeInterval);
        gameOver();
        scoreBoard();
        })

    answerTwo.addEventListener('click', Event => {
        startGame.textContent = 'WRONG!'
        clearInterval(timeInterval);
        gameOver();
        scoreBoard();
    })

    answerThree.addEventListener('click', Event => {
        startGame.textContent = 'WRONG!'
        clearInterval(timeInterval);
        gameOver();
        scoreBoard();
    })

    answerFour.addEventListener('click', Event => {
        startGame.textContent = 'Correct!'
        clearInterval(timeInterval);
        gameOver();
        scoreBoard();
    })   
};


// function removeID() {
//     remove
// }
startGame.addEventListener('click', Event => {
    countDown();
    firstQuestion();
    for (var i = 0; i < deeNone.length; i++) {
        var el = deeNone[i]
        el.classList.remove("d-none")
    }
});