class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = null;    }
    getPlayerCount(){
        database.ref('playerCount').on("value",(data)=>{
            playerCount = data.val()

        })
    }
    updatePlayerCount(countValue){
        database.ref('/').update({playerCount: countValue })
    }
    playerProfile(){
        database.ref('players/player'+ player.index).set({Name: this.name , Distance: this.distance})
    }
    static readPlayerInfo(){
        database.ref('players').on("value" , (data)=>{

            playerInfo = data.val()
        })
    }
    getPlayerRank(){
        database.ref('playerRank').on("value",(data)=>{

    this.rank = data.val();
})
    }
    static updatePlayerRank(rank){

database.ref('/').update({playerRank: rank})

    }
}