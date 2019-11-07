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
            <img class="bombard-title" src="./img/title/A song of BOMBARD.png">
            <div class="player-number-select">
                <button class="btn-start-one-player">One Player<img></button>
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
                <img class="spinning-total-coins" src="./img/croppedCoin.gif">
                <button class="btn-shop">Shop</button> -->
            </div>
            <h1 class="level-select-title">Select a Level</h1>
            <div class="level-display">
                <button class="btn-start-level-one"><img></button>
                <button class="btn-start-level-two"><img></button>
                <button class="btn-start-level-three"><img></button>
                <button class="btn-start-level-four"><img></button>
            </div>
        </main>
        `)

        document.body.appendChild(levelSelect);

        var levelOneStartButton = levelSelect.querySelector(".btn-start-level-one")
        levelOneStartButton.addEventListener("click", startLevel1)
        var levelTwoStartButton = levelSelect.querySelector(".btn-start-level-two")
        levelTwoStartButton.addEventListener("click", startLevel2)
        var levelThreeStartButton = levelSelect.querySelector(".btn-start-level-three")
        levelThreeStartButton.addEventListener("click", startLevel3)
        var levelThreeStartButton = levelSelect.querySelector(".btn-start-level-four")
        levelThreeStartButton.addEventListener("click", startLevel4)
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
        game.passOverVameOverWinCallback(gameOverWin)
        game.passOverAddCoinCallback(addCoin)

        var music = document.querySelector(".lvl1-music");
        music.play();
    }

    function startLevel2() {

        removeLevelSelect();

        game = new Level2();
        game.gameScreen = createGameScreen();
        game.start()
        game.passOverGameOverCallback(gameOver)
        game.passOverVameOverWinCallback(gameOverWin)
    }

    function startLevel3() {

        removeLevelSelect();

        game = new Level3();
        game.gameScreen = createGameScreen();
        game.start()
        game.passOverGameOverCallback(gameOver)
        game.passOverVameOverWinCallback(gameOverWin)
    }

    function startLevel4() {

        removeLevelSelect();

        game = new Level4();
        game.gameScreen = createGameScreen();
        game.start()
        game.passOverGameOverCallback(gameOver)
        game.passOverVameOverWinCallback(gameOverWin)

        var music = document.querySelector(".lvl4-music");
        music.play();
    }

    function startTwoPlayerLevel() {
        removeSplashScreen();

        game = new TwoPlayerLevel();
        game.gameScreen = createGameScreen();
        game.start()
        game.passOverGameOverCallback(gameOver)
        game.passOverDrawCallback(draw)
    }




    function createGameScreen() {
        game.inGame = true;
            if(!game.isPvP){
                gameScreen = buildDOM(`
                    <main class="one-player-game-container">
                        <div class="one-player-lives-and-coins">
                            <!-- <div class="coins-div">
                                <p class="number-of-coins">0</p>
                                <img src="./img/croppedCoin.gif" class="level-coins-icon">
                            </div> -->
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

    function draw() {
        removeGameScreen();
        createGameDrawScreen();
    }

    function createGameOverScreen(winner) {
        if(!game.isPvP){
            gameOverScreen = buildDOM(`
                <main class="game-over-lose-wrapper">
                    <h1 class="game-over-title">YOU LOSE...</h1>
                    <img class="dead-lute" src="https://media.giphy.com/media/63LXoINI3JXUkMACV4/giphy.gif">
                    <button class="restart-button">Try Again</button>
                </main>
            `);
            document.body.appendChild(gameOverScreen)
            
            setTimeout(()=>{
                var endSong = document.querySelector(".end-song");
                endSong.play()
            }, 600)
            var restartButton = gameOverScreen.querySelector(".restart-button")
            restartButton.addEventListener("click", ()=>{
                removeGameOverScreen();
                createSplashScreen();
                var endSong = document.querySelector(".end-song");
                endSong.pause();
            })

            return gameOverScreen
        } else {
            
            gameOverScreen = buildDOM(`
                <main class="game-over-lose-wrapper">
                    <h1 class="game-over-title"><span class="name-for-PvP"></span><br>WINS🤘!</h1>
                    <img class="finn-luter" src="./img/ezgif.com-crop.gif">
                    <button class="restart-button">Play Again</button>
                </main>
            `);

            document.body.appendChild(gameOverScreen)


            var winnersName = gameOverScreen.querySelector(".name-for-PvP");
            winnersName.innerHTML = winner.toUpperCase()

            var restartButton = gameOverScreen.querySelector(".restart-button")
            restartButton.addEventListener("click", ()=>{
                    removeGameOverScreen();
                    createSplashScreen();
            })

            return gameOverScreen
        }
    }

    function createGameOverWinScreen() {
        gameOverWinScreen = buildDOM(`
        <main class="game-over-wrapper">
            <h1 class="game-over-win-title">YOU WIN🤘!</h1>
            <img class="lute-solo" src="https://media.giphy.com/media/xT5LMPTgqchZZ7QlrO/giphy.gif">
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

    function createGameDrawScreen() {
        gameOverWinScreen = buildDOM(`
        <main class="game-over-wrapper">
            <h1 class="game-over-win-title">It's a TIE!</h1>
            <img class="lute-solo" src="https://media.giphy.com/media/xT5LMPTgqchZZ7QlrO/giphy.gif">
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