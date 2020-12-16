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
  /*
  windowwidth or window height takes the entire screen size..like if ur screen is 17 inch..it takes 17 inch..
  displaywidth and display height takes the displaying window size...like if u resize ur chrome tab..this new size is takenfor canvas
  */
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
