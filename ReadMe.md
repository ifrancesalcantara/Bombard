BOMBARD



DESCRIPTION

    In this game, the player moves  within the empty spaces, placing bombs to make his way through the map to the goal in the opposite corner.

MVP (DOM - CANVAS)
    CANVAS, In Bombard, the player moves over tiles, which may also be populated by destroyable walls, unmovable blocks and bombs.


BACKLOG

    Player2
    Score
    Cards
    Card stack
    Card stack shuffle
    Level Screen
    Levels


DATA STRUCTURE

    main.js
        createSplashScreen(){
        }
        removeSplashScreen(){
        }
        startGame(){
        }
        createGameScreen(){
        }
        removeGameScreen(){
        }
        gameOver(){
        }
        createGameOverScreen(){
        }
        removeGameOverScreen(){
        }
        restart(){
        }

    game.js
        Game(){
        }
        Game.prototype.start(){
        }
        Game.prototype.handleKeydown(){
        }
        Game.prototype.startLoop(){
        }
        Game.prototype.setGameOver(){
        }

    bombard.js
        draw(){
        }
        move(){
        }
        handleScreenCollision(){
        }
        handleBrickwallCollision(){
        }
        handleBlockwallCollision(){
        }
        placeBomb(){
        }
        receiveDamage(){
        }
        arriveToGoal(){
        }

    noteBomb.js
        draw(){
        }
        explode(){
        }

        brickWall.js
        breakDown(){
        }

    blockwall.js


TASKS

Main - createGameOverScreen
Game - setGameOver
Game - brickwall, blockwall and bomb collision
brickwall - remove if first hit by bomb effect area
Bomb - explode
Bomb - create effect area
Bomb - effect area modified according to space
Bomb - effect area damages player
Bombard - arriveToGoal
Background - resize 
