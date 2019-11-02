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
        game.passOverGameOverCallback(gameOver)
    }


    function createGameScreen() {
        game.inGame = true;
        gameScreen = buildDOM(`
            <main class="game-container">
                <div class="player-one-lives">
                    <p class="number-of-lives">0</p>
                    <img src="https://media.giphy.com/media/fH6sWTw73YS9tjqPSF/giphy.gif" class="lives-icon">
                </div>
                <canvas class="background-canvas"></canvas>
            </main>
        `);
        document.body.appendChild(gameScreen)
        return gameScreen
    }

    function removeGameScreen(){
        game.inGame = false;
        gameScreen.remove()
    }

    function gameOver() {
        removeGameScreen();
        createGameOverScreen();
    }

    function createGameOverScreen() {
        gameOverScreen = buildDOM(`
        <main class="game-over-wrapper">
            <h1 class="game-over-title">YOU WIN!</h1>
            <button class="restart-button">Play Again</button>
        </main>
    `);
    document.body.appendChild(gameOverScreen)
    var restartButton = gameOverScreen.querySelector(".restart-button")
    restartButton.addEventListener("click", ()=>{
        removeGameOverScreen();
        createSplashScreen()})
    return gameOverScreen
    }


    function removeGameOverScreen() {
        gameOverScreen.remove()
    }







    createSplashScreen();


    
}




window.addEventListener("load", main())