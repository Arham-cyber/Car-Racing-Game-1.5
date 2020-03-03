var  database, position,gameState,playerCount,game,form,player,allPlayers;

function setup(){
    database = firebase.database()
    createCanvas(500,500);    
}
function draw(){
    background("white");
    if (playerCount===4 ){
        game.update(1)
    }  
    if (gameState===1){
        clear();
        game.play()
        
    }
}