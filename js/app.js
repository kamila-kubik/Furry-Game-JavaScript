var Game = require("./game.js");

var start = document.querySelector(".start");
start.addEventListener("click", function(e) {
    var game1 = new Game();
    document.addEventListener('keydown', function (event) {
        game1.turnFurry(event);
    });

    game1.showFurry();
    game1.showCoin();
    game1.startGame();
    game1.stopGame(59);


});



var button = document.querySelector('button');
button.addEventListener("click", function(){
    window.location.reload(false);
});




