var database;
var position;

var gameState = 0,playerCount = 0;

var game, player, form;
var playerInfo
var car1, car2, car3, car4, allCar;
var car1Img, car2Img, car3Img, car4Img, trackImg;

function preload(){
car1Img = loadImage("images/car1.png")
car2Img = loadImage("images/car2.png")
car3Img = loadImage("images/car3.png")
car4Img = loadImage("images/car4.png")
trackImg = loadImage("images/track.jpg")




}


function setup(){
   createCanvas(displayWidth,displayHeight);
   database = firebase.database()
   game = new Game()
   game.getGameState()
   game.start()
   
}

function draw(){
  if(playerCount === 4 && gameState === 0){
      gameState = 1
      game.updateGameState(1)

  }
  if(gameState ==1){
      clear()
      game.play()
  }

  if (gameState == 2){
      game.end()
  }
}


function readData(data){
position = data.val()
ball.x = position.X
ball.y = position.Y
}

function updateData(x,y){
    database.ref('Ball/Position').update({X:position.X + x , Y:position.Y + y})
}