"use strict";



function buildDOM(htmlString){
    var div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.children[0];
}

function main(){
    var game;
    var splashScreen;
    var gameScreen
    var gameOverScreen;

    function createSplashScreen() {
        splashScreen = buildDOM(`
        <main class="splash-screen">
            <h1 class="bombard-title">Bombard</h1>
            <button class="btn-start">Start</button>
        </main>
        `)

        document.body.appendChild(splashScreen);

        var startButton = splashScreen.querySelector(".btn-start")
        startButton.addEventListener("click", startGame)
    }


    function removeSplashScreen() {
        // remove() is the DOM element that removes the Node from the page
        splashScreen.remove();
    };


    function startGame() {
        removeSplashScreen();

        game = new Game();
        game.gameScreen = createGameScreen();
        game.start()
    }


    function createGameScreen() {
        gameScreen = buildDOM(`
            <main class="game container">
                <div class="player-one-lives">
                    <img class="lives-head-icon">
                    <p class="number-of-lives">0</p>
                </div>
                <div class="background-and-game-wrapper">
                    <canvas class="background-canvas"></canvas>
                    <canvas class="game-canvas"></canvas>
                </div>
            </main>
        `);
        document.body.appendChild(gameScreen)
        return gameScreen
    }









    

    createSplashScreen();




    
}







window.addEventListener("load", main())