class Form{
    constructor(){
        this.input = createInput()
        this.button = createButton('Join')
        this.reset = createButton('reset')
    }
    display(){
       
        this.input.position(displayWidth/2,130)

       
        this.button.position(displayWidth/2,160)
        this.reset.position(50,50)
        this.button.mousePressed(()=>{
        this.button.hide()
        this.input.hide()
            
            playerCount++
            player.index = playerCount;
            player.name = this.input.value()
            

          
            player.updatePlayerCount(playerCount)
            player.playerProfile()
        
        })

        this.reset.mousePressed(() => {

        game.updateGameState(0)
        player.updatePlayerCount(0)
        database.ref('players').remove()

        })
    }
}