import { Cheese } from "./cheese.js"

export class Grid{
    constructor(game){
this.game = game
this.cols = 3
        this.rows = 4
        this.noCards = 12
        this.order = 0
        this.cards = []
        this.x = 1
        this.maxX = 7
        this.y = 0
        this.maxY = 1
        this.board = []
        this.matrix = [
            [0,0],[1,0],[2,0],
            [0,1],[1,1],[2,1],
            [0,2],[1,2],[2,2],
            [0,3],[1,3],[2,3],
        ]
        this.id1 = null
        this.id2 = null

        for (let i = 0; i < this.maxX; i++) {
           this.id1= Math.floor(16777216 * Math.random())
            this.cards.push(new Cheese(this.game,[10,50],[this.x,0], this.order,true, this.id1))
            this.cards.push(new Cheese(this.game,[10,50],[this.x,0], this.order,false, this.id1+10))
            this.cards.push(new Cheese(this.game,[10,50],[this.x,1], this.order+1,true,this.id1+20))
            this.cards.push(new Cheese(this.game,[10,50],[this.x,1], this.order+1,false,this.id1+30))
            this.x++
            this.order+=2
        }

        this.grid()
        
    }
grid(){
    
    
for (let i = 0; i < this.noCards/2; i++) {
    let rn = Math.floor(Math.random() * this.cards.length/2)
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
         
     }})
    
}

    
}
draw(context, context2){
    for (const card of this.board) {
        card.draw(context)
        
       card.drawIDS(context2,card.gridPos[0],card.gridPos[1])
    }
}

}