var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
//CRREATED VAR FOR 4 CARS- THEY WILL BE SPRITES
//CARS- WILL BE ARRAY STORING INFO ABOUT 4 CARS- IE X AND Y POSTION OF CAR
//CAR COMES INTO PICTURE, ONLY AFTER WAIT STATE ENDS
var cars, car1, car2, car3, car4;


function setup(){
  //CHANGES MADE IN THE CANVAS SIZE
  //DISPLAYWDTH N DISPLAYHEIGHT- CAPTURES THE SCREEN SIZE OF YOUR SYSTEM
  //ACCORDINGLY MAKE CHANGES IN FORM CLASS WHERE YOU HAVE DISPLAYED THE TITLE, GREETING ETC
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
