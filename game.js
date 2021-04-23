class Game{

    constructor(){
        
    }
    getGameState(){
        database.ref('gameState').on("value",(data)=>{
            gameState = data.val()

        })
    }
    updateGameState(stateValue){
        database.ref('/').update({gameState: stateValue })
    }
    start(){
       if(gameState === 0){
        text ("Car Race",200,200)
        player = new Player()
        player.getPlayerCount()

        form = new Form()
        form.display()
       }
       car1 = createSprite(100,200);
       car1.addImage(car1Img);
       car2 = createSprite(200,200);
       car2.addImage(car2Img);
       car3 = createSprite(300,200);
       car3.addImage(car3Img);
       car4 = createSprite(400,200);
       car4.addImage(car4Img);
       allCar = [car1,car2,car3,car4]

    }

    play(){
      text("game started",100,100)
      Player.readPlayerInfo()
      player.getPlayerRank()
      if(playerInfo != undefined){
        
        image (trackImg,0, -10*displayHeight , displayWidth , 11*displayHeight )

         var x = 200
         var y = 0
         var index = 0;

         for(var i in playerInfo){
         
            index++
        
         text(playerInfo[i].Name,x,100)
         x = x+200
         y=displayHeight-playerInfo[i].Distance;

         allCar[index-1].x = x;
         allCar[index-1].y = y;
         if(index == player.index){
             camera .position.x = displayWidth/2;
             camera .position.y = allCar[index - 1].y;

             fill ("white")
             circle(x,y,100)

        
             
         }
         }
       
      }
       if(keyDown(UP_ARROW)&& player.index != undefined){
   
       player.distance = player.distance+30
       
       player.playerProfile()

       if(player.distance > 7620){

           gameState = 2;
           player.rank = player.rank+1
           Player.updatePlayerRank(player.rank)
       }
       }

    drawSprites()

    }

    end(){
    console.log(player.rank)
    }
}