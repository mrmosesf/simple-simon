/**
 * Created by mosesfranco on 4/28/17.
 */

(function () {
    "use strict";

    // Global variables
    var gameVars = {
        sequence: [],
        round: 0,
        status: ""

    };

    var userEvents = [];


    // Start game trigger
    startGame();

    // TODO: changes part of game UI, and calls the
    function startGame() {
        $('#startGame').click(function () {
            $('#startGame, #currentRound').toggleClass('hidden');
            roundStart();
        });
    }

    // TODO: Start a new round, by updating round counter and game message
    function roundStart() {
        gameVars.status = "Watch";
        $('#gameMessage').html(gameVars.status);

        gameVars.round += 1;
        $('#currentRound').html("Round: " + gameVars.round);

        randomGenerator();
    }


    // TODO: Adds a random number that will be added to the game sequence, not deleting it
    function randomGenerator() {
        var randomSequence = Math.floor(Math.random() * (4 - 1 + 1) +1);
        gameVars.sequence.push(randomSequence);
        lightSquares(gameVars.sequence);
    }

    // TODO: Highlights squares, based on a variable that's taken in
    function lightSquares(colorSequence) {
        console.log(colorSequence);
    }

    // TODO: Checks against user inputted sequence, and already generated numbers
    function gameStweard() {

    }

    // TODO: Adds a number to round counter, and begins UI again, possibly clearing user entered events
    function userSuccess() {

    }

    // TODO: Resets UI to default and setup game to be started again
    function userFail() {

    }

})();