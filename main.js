"use strict";



function buildDOM(htmlString){
    var div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.children[0];
}

function main(){
    var game;
    var splashScreen;
    var levelSelect;
    var gameScreen
    var gameOverScreen;

    function createSplashScreen() {


        splashScreen = buildDOM(`
        <main class="splash-screen">
            <h1 class="bombard-title">Bombard</h1>
            <div class="player-number-select">
                <button class="btn-start-one-player">One Player <img></button>
                <button class="btn-start-two-players">Two Players <img></button>
            </div>
        </main>
        `)

        document.body.appendChild(splashScreen);

        var onePlayerStartButton = splashScreen.querySelector(".btn-start-one-player")
        var twoPlayersStartButton = splashScreen.querySelector(".btn-start-two-players")
        onePlayerStartButton.addEventListener("click", createLevelSelect)
        twoPlayersStartButton.addEventListener("click", startTwoPlayerLevel)
    }


    function removeSplashScreen() {
        // remove() is the DOM element that removes the Node from the page
        splashScreen.remove();
    };


    function createLevelSelect() {

        removeSplashScreen();

        levelSelect = buildDOM(`
        <main class="level-select-screen">
            <button class="btn-shop">Shop</button>
            <h1 class="level-select-title">Select a Level</h1>
            <div class="level-display">
                <button class="btn-start-level-one">Level One<img></button>
                <button class="btn-start-level-two">Level Two<img></button>
                <button class="btn-start-level-three">Level Three<img></button>
                <button class="btn-start-level-four">Level Four<img></button>
            </div>
        </main>
        `)

        document.body.appendChild(levelSelect);

        var levelOneStartButton = levelSelect.querySelector(".btn-start-level-one")

        levelOneStartButton.addEventListener("click", startLevel1)
    }


    function removeLevelSelect (){
        levelSelect.remove()
    }

    function startLevel1() {

        removeLevelSelect();

        game = new Game();
        game.gameScreen = createGameScreen();
        game.start()
        game.passOverGameOverCallback(gameOver)
    }

    function startTwoPlayerLevel() {
        removeSplashScreen();

        game = new TwoPlayerLevel();
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