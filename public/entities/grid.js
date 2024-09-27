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
        
       
        // for (let i = 0; i <= this.maxX; i++) {
        //    this.id1= Math.floor(16777216 * Math.random())
        //     this.cards.push(new Cheese([10,50],[i,0], this.order,true, this.id1))
        //     this.cards.push(new Cheese([10,50],[i,0], this.order,false, this.id1+10))
        //     this.cards.push(new Cheese([10,50],[i,1], this.order+1,true,this.id1+20))
        //     this.cards.push(new Cheese([10,50],[i,1], this.order+1,false,this.id1+30))
        //     this.x++
        //     this.order+=2
        // }
        
        
        
    }randomFace(){
        let rn = Math.floor(Math.random() * (this.faces.length-1)/2)

    }

grid(){
for (let i = 0; i < this.noCards/2; i++) {
    let rn = Math.floor(Math.random() * (this.cards.length-1)/2)
    if(!this.cardsSelected.includes(rn)){
    this.cardsSelected.push(rn)
   
    this.cards.filter(elem=>{
        if(elem.or === rn){
 if(elem.a) {
     let rn2 = Math.floor(Math.random() * this.matrix.length)
     elem.gridPos = this.matrix[rn2]
    
     let inde = this.matrix.indexOf(this.matrix[rn2])
 this.matrix.splice(inde,1)
 this.board.push(elem)
 
 }
 else {
     let rn2 = Math.floor(Math.random() * this.matrix.length)
     elem.gridPos = this.matrix[rn2]
    
     let inde = this.matrix.indexOf(this.matrix[rn2])
 this.matrix.splice(inde,1)
 this.board.push(elem)
        }
       
     }})} else{
        this.noCards+=2
     }
    
}


}
draw(context, context2){
    for (const card of this.cards) {
        card.draw(context)
        
       card.drawIDS(context2)
    }
}

}