/**
 * Created by Moses Franco on 4/28/17.
 * Codeup
 * Pinnacles
 * JQuery - Simple Simon
 */

(function () {
    "use strict";
    // Global variables
    var gameVars = {
        sequence: [1, 2, 3, 4],
        round: 0,
        status: "",
        lockout: true,
        delay: 150
    };/*gameVars*/

    var userEvents = [];

    // Start game trigger
    startGame();

    // Changes part of game UI, and calls the
    function startGame() {
        $('#startGame').click(function () {
            $('#startGame, #currentRound').toggleClass('hidden');
            roundStart();
        });
    }/*startGame*/

    // Start a new round, by updating round counter and game message
    function roundStart() {
        gameVars.status = "Watch";
        $('#gameMessage').html(gameVars.status);

        gameVars.round += 1;
        $('#currentRound').html("Round: " + gameVars.round);

        randomGenerator();
    }/*roundStart*/

    // Adds a random number that will be added to the game sequence, not deleting it
    function randomGenerator() {
        var randomSequence = Math.floor(Math.random() * (4 - 1 + 1) + 1);
        gameVars.sequence.push(randomSequence);

        lightSquares(gameVars.sequence);
    }/*randomGenerator*/

    // Light up squares in the proper sequence as received from the array
    function lightSquares(colors) {
        // Initialized variable that will later be used during setInterval
        var callFun;
        colors.forEach(function (p1, i) {
            switch (p1) {
                case 1:
                    callFun = redUp;
                    break;
                case 2:
                    callFun = blueUp;
                    break;
                case 3:
                     callFun = greenUp;
                    break;
                case 4:
                     callFun = yellowUp;
                    break;
            }

            // After specified delay, the timeout calls each function, in order from the array, with a stepping delay
            setTimeout(callFun, gameVars.delay * 4 * i);

        });

        gameSteward();

        gameVars.lockout = false;
    }/*lightSquares*/

    // Event listeners that the user can click and will added appropriate number to userEvents array with animation
    // TODO: Checks against user inputted sequence, and already generated numbers
    function gameSteward() {
        $('#one').click(function () {
            userEvents.push(1);
            redUp();
        });

        $('#two').click(function () {
            userEvents.push(2);
            blueUp();
        });

        $('#three').click(function () {
            userEvents.push(3);
            greenUp();
        });

        $('#four').click(function () {
            userEvents.push(4);
            yellowUp();
        });

    }/*gameSteward*/


    // TODO: Adds a number to round counter, and begins UI again, possibly clearing user entered events
    function userSuccess() {

    }

    // TODO: Resets UI to default and setup game to be started again
    function userFail() {

    }

// Separate functions that will light up a square, to be called from any other function too
    function redUp() {
        $('#one').animate({
            "background-color": "#ff0000"
        }, gameVars.delay).animate({
            "background-color": "#c30000"
        });
    }/*redUp*/

    function blueUp() {
        $('#two').animate({
            "background-color": "#0000ff"
        }, gameVars.delay).animate({
            "background-color": "#0000af"
        });
    }/*blueUp*/

    function greenUp() {
        $('#three').animate({
            "background-color": "#00ff00"
        }, gameVars.delay).animate({
            "background-color": "#00c300"
        });
    }/*greenUp*/

    function yellowUp() {
        $('#four').animate({
            "background-color": "#fff000"
        }, gameVars.delay).animate({
            "background-color": "#c3c300"
        });
    }/*yellowUp*/

})();
