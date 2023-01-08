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

var question = {
    one: 'What term refers to a true or false value?',
    two: 'What can be stored in Arrays?',
    three: 'What is the right answer?',
    four: 'What is the DOM?',
}

var firstAnswer = {
    one: 'Array',
    two: 'Strings and Numbers',
    three: 'This one!',
    four: 'Document Object Model',
}

var secondAnswer = {
    one: 'String',
    two: 'other arrays',
    three: 'Nope',
    four: 'I dont know, you tell me.',
}

var thirdAnswer = {
    one: 'Boolean',
    two: 'booleans',
    three: 'Not this one.',
    four: "Dominic Toretto's nickname",
}

var fourthAnswer = {
    one: 'Function',
    two: 'All of the Above',
    three: 'Look again',
    four: 'A spicy sauce from the Dominican Republic',
}

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

function gameOver () {
    timer.textContent = "Game Over!";
}
// are not working properly
// function firstQuestion() {
//     question.textContent = question, one;
//     answerOne.textContent = firstAnswer, one;
//     answerTwo.textContent = (secondAnswer ['one']);
//     answerThree.textContent = (thirdAnswer ['one']);
//     answerFour.textContent = (firstAnswer ['one']);

// }

// function secondQuestion() {
//     question.textContent = question[1];
//     answerOne.textContent = answerOne[1];
//     answerTwo.textContent = answerTwo[1];
//     answerThree.textContent = answerThree[1];
//     answerFour.textContent = answerFour[1];

// }

// function thirdQuestion() {
//     question.textContent = question[2];
//     answerOne.textContent = answerOne[2];
//     answerTwo.textContent = answerTwo[2];
//     answerThree.textContent = answerThree[2];
//     answerFour.textContent = answerFour[2];

// }

// function fourthQuestion() {
//     question.textContent = question[3];
//     answerOne.textContent = answerOne[3];
//     answerTwo.textContent = answerTwo[3];
//     answerThree.textContent = answerThree[3];
//     answerFour.textContent = answerFour[3];

// }

startGame.addEventListener('click', Event => {
    countDown();
    // firstQuestion();
    // secondQuestion();
    // thirdQuestion();
    // fourthQuestion();
});