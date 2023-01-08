// add event listener for start button to start the game X
// when start button is hit the first question and a timer appear
// the timer starts counting down upon start X
// the question is followed by 4 selectable answers
// when the player selects a correct answer they are given points
// when the player selects a wrong answer the timer loses 10 seconds
// repeate the process for 4 seperate questions
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
    three: 'This one!',
    four: 'Document Object Model',
};

var secondAnswer = {
    one: 'String',
    two: 'other arrays',
    three: 'Nope',
    four: 'I dont know, you tell me.',
};

var thirdAnswer = {
    one: 'Boolean',
    two: 'booleans',
    three: 'Not this one.',
    four: "Dominic Toretto's nickname",
};

var fourthAnswer = {
    one: 'Function',
    two: 'All of the Above',
    three: 'Look again',
    four: 'A spicy sauce from the Dominican Republic',
};

var timer = document.getElementById("timer");

var secondsLeft = 60;

function countDown () {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timeInterval);
            gameOver();
            secondsLeft = 60;
        }
    }, 1000);
}

var startGame = document.getElementById("startGame");
var question = document.getElementById("question");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");


function gameOver () {
    timer.textContent = "Game Over!";
}
function firstQuestion() {
    question.textContent = questionEl['one'];
    answerOne.textContent = firstAnswer['one'];
    answerTwo.textContent = secondAnswer['one'];
    answerThree.textContent = thirdAnswer['one'];
    answerFour.textContent = fourthAnswer['one'];

};

function secondQuestion() {
    question.textContent = questionEl['two'];
    answerOne.textContent = firstAnswer['two'];
    answerTwo.textContent = secondAnswer['two'];
    answerThree.textContent = thirdAnswer['two'];
    answerFour.textContent = fourthAnswer['two'];
};

function thirdQuestion() {
    question.textContent = questionEl['three'];
    answerOne.textContent = firstAnswer['three'];
    answerTwo.textContent = secondAnswer['three'];
    answerThree.textContent = thirdAnswer['three'];
    answerFour.textContent = fourthAnswer['three'];

};

function fourthQuestion() {
    question.textContent = questionEl['four'];
    answerOne.textContent = firstAnswer['four'];
    answerTwo.textContent = secondAnswer['four'];
    answerThree.textContent = thirdAnswer['four'];
    answerFour.textContent = fourthAnswer['four'];

};

startGame.addEventListener('click', Event => {
    countDown();
    firstQuestion();

});