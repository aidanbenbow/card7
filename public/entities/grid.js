import { gmCols, gmGrid, gmRows } from "../constants/screen.js"
import { gameState } from "../states/gameState.js"
import { playerState } from "../states/playerState.js"
import { Cheese } from "./cheese.js"

export class Grid{
    constructor(game){
this.game = game
this.cols = this.game.level.cols
        this.rows = this.game.level.rows
        
        this.noCards = this.cols * this.rows
        
        this.cards = []
        this.cardsSelected = []
       
        this.maxX = 7
        this.order=0
        this.board = []
        this.matrix = this.game.level.grid
        this.f1= this.game.level.cardFaces[0]
        this.f2= this.game.level.cardFaces[1]
        this.faces = [
            [0,this.f1],[1,this.f1],[2,this.f1],[3,this.f1],[4,this.f1],[5,this.f1],[6,this.f1],[7,this.f1]
            ,[0,this.f2],[1,this.f2],[2,this.f2],[3,this.f2],[4,this.f2],[5,this.f2],[6,this.f2],[7,this.f2]
        ]
        this.id1 = null

        this.num = []

        while (this.cardsSelected.length<=(this.game.level.totcards-1)) {
            let rn2 = Math.floor(Math.random() * this.matrix.length)
          
            if(this.cardsSelected.indexOf(rn2)==-1){
                this.cardsSelected.push(rn2)
            }
    
        }

     
        
        for (let i = 0; i < this.noCards; i+=2) {
            this.id1= Math.floor(16777216 * Math.random())
            let rnF = Math.floor(Math.random() * (this.faces.length-1)/2)
            let rn = this.cardsSelected[i]
            let rn3 = this.cardsSelected[i+1]
            
                this.cards.push(new Cheese(this.game,this.matrix[rn],this.faces[rnF],  this.id1))
                this.cards.push(new Cheese(this.game,this.matrix[rn3],this.faces[rnF],  this.id1+10))
          
            let inde3 = this.faces.indexOf(this.faces[rnF])
            this.faces.splice(inde3,1)
            
        }
     
    }

draw(context, context2){
    for (const card of this.cards) {
        card.draw(context)
        
       card.drawIDS(context2)
    }
}

}