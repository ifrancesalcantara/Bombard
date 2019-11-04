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
    var gameOverWinScreen;
    var coins = 0;

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
            <!-- <div class="shop-div">
                <span class="number-of-total-coins">${coins}</span>
                <img class="spinning-total-coins" src="img/croppedCoin.gif">
                <button class="btn-shop">Shop</button> -->
            </div>
            <h1 class="level-select-title">Select a Level</h1>
            <div class="level-display">
                <span class="btn-start-level-one"><img></span>
                <button class="btn-start-level-two"><img></button>
                <button class="btn-start-level-three"><img></button>
                <button class="btn-start-level-four"><img></button>
            </div>
        </main>
        `)

        document.body.appendChild(levelSelect);

        var levelOneStartButton = levelSelect.querySelector(".btn-start-level-one")
        levelOneStartButton.addEventListener("click", startLevel1)
        var levelOneStartButton = levelSelect.querySelector(".btn-start-level-two")
        levelOneStartButton.addEventListener("click", startLevel2)
    }


    function removeLevelSelect (){
        levelSelect.remove()
    }

    function startLevel1() {

        removeLevelSelect();

        game = new Level1();
        game.gameScreen = createGameScreen();
        game.start()
        game.passOverGameOverCallback(gameOver)
        game.passOverAddCoinCallback(addCoin)
    }

    function startLevel2() {

        removeLevelSelect();

        game = new Level2();
        game.gameScreen = createGameScreen();
        game.start()
        game.passOverGameOverCallback(gameOver)
        game.passOverVameOverWinCallback(gameOverWin)
        game.passOverAddCoinCallback(addCoin)
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
            if(!game.isPvP){
                gameScreen = buildDOM(`
                    <main class="one-player-game-container">
                        <div class="one-player-lives-and-coins">
                            <div class="coins-div">
                                <p class="number-of-coins">0</p>
                                <img src="/img/croppedCoin.gif" class="level-coins-icon">
                            </div>
                            <div>
                                <p class="number-of-lives">0</p>
                                <img src="https://media.giphy.com/media/fH6sWTw73YS9tjqPSF/giphy.gif" class="lives-icon">
                            </div>
                        </div>
                        <canvas class="background-canvas"></canvas>
                    </main>
                `);
            } else if(game.isPvP){
                gameScreen = buildDOM(`
                    <main class="two-players-game-container">
                        <div class="player-one-lives">
                            <div>
                                <p class="player-one-number-of-lives">0</p>
                                <img src="https://media.giphy.com/media/fH6sWTw73YS9tjqPSF/giphy.gif" class="lives-icon">
                            </div>
                        </div>
                        <div class="player-two-lives">
                        <div>
                            <p class="player-two-number-of-lives">0</p>
                            <img src="https://media.giphy.com/media/fH6sWTw73YS9tjqPSF/giphy.gif" class="lives-icon">
                        </div>
                    </div>
                        <canvas class="background-canvas"></canvas>
                    </main>
                `);
            }
        document.body.appendChild(gameScreen)
        return gameScreen
    }

    function removeGameScreen(){
        game.inGame = false;
        gameScreen.remove()
    }

    function gameOver(winner) {
        removeGameScreen();
        createGameOverScreen(winner);
    }

    function gameOverWin() {
        removeGameScreen();
        createGameOverWinScreen();
    }

    function createGameOverScreen(winner) {
        gameOverScreen = buildDOM(`
        <main class="game-over-wrapper">
            <h1 class="game-over-title"><span class="name-for-PvP">YOU</span><br>LOSE<span class="add-s-for-PvP"></span>!</h1>
            <button class="restart-button">Play Again</button>
        </main>
    `);
    document.body.appendChild(gameOverScreen)
    var restartButton = gameOverScreen.querySelector(".restart-button")
    restartButton.addEventListener("click", ()=>{
        removeGameOverScreen();
        createSplashScreen()})
        if(winner && game.isPvP) {
            var winnersName = gameOverScreen.querySelector(".name-for-PvP");
            winnersName.innerHTML = winner.toUpperCase()
            var sAfterWIN = gameOverScreen.querySelector(".add-s-for-PvP");
            sAfterWIN.innerHTML = "S"
        }
    return gameOverScreen
    }

    function createGameOverWinScreen() {
        gameOverWinScreen = buildDOM(`
        <main class="game-over-wrapper">
            <h1 class="game-over-title"><span class="name-for-PvP">YOU</span><br>WIN<span class="add-s-for-PvP"></span>!</h1>
            <button class="restart-button">Play Again</button>
        </main>
    `);
    if(!game.isOver){

        document.body.appendChild(gameOverWinScreen)
    }
    var restartButton = gameOverWinScreen.querySelector(".restart-button")
    restartButton.addEventListener("click", ()=>{
        removeGameOverWinScreen();
        createSplashScreen()})
    return gameOverScreen
    }

    function removeGameOverScreen() {
        gameOverScreen.remove()
    }
    function removeGameOverWinScreen(){
        gameOverWinScreen.remove()
    }

    function addCoin() {
        coins++
    }





    createSplashScreen();


    
}




window.addEventListener("load", main())