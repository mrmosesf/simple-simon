/**
 * Created by mosesfranco on 4/28/17.
 */

(function () {
    "use strict";

    // Global variables
    var gameVars = {
        sequence: [],
        round: 0,
        status: "",
        lockout: true

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
        var randomSequence = Math.floor(Math.random() * (4 - 1 + 1) + 1);
        gameVars.sequence.push(randomSequence);

        lightSquares(gameVars.sequence);
    }

    // TODO: Highlights squares, based on a variable that's taken in
    function lightSquares(colors) {
        console.log(colors);
        colors.forEach(function (p1) {
            switch (p1) {
                case 1:
                    console.log(1);
                    $('#one').animate({
                        "background-color": "#ff0000"
                    }, 250).animate({
                        "background-color": "#c30000"
                    });
                    break;
                case 2:
                    console.log(2);
                    $('#two').animate({
                        "background-color": "#0000ff"
                    }, 250).animate({
                        "background-color": "#0000c3"
                    });
                    break;
                case 3:
                    console.log(3);
                    $('#three').animate({
                        "background-color": "#00ff00"
                    }, 250).animate({
                        "background-color": "#00c300"
                    });
                    break;
                case 4:
                    console.log(4);
                    $('#four').animate({
                        "background-color": "#fff000"
                    }, 250).animate({
                        "background-color": "#c3c300"
                    });
                    break;
            }
        })
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