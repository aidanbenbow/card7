import { Cheese } from "../entities/cheese.js";
import { gameState } from "../states/gameState.js";
import { animals, canvas, cheese, trees } from "./constant.js";
import { optimizedDivisors } from "./utils.js";

export class Levels{
    constructor(i){
       
        this.totcards = gameState.level[i]
       
        if(canvas.width>canvas.height){
            this.rows = this.totcards[0]
            this.cols= this.totcards[1]
        
        } else{
            this.cols = this.totcards[0]
            this.rows  = this.totcards[1]
        }
        this.noCards = this.cols*this.rows
        
        this.cardWidth = canvas.width/(this.cols+1)
this.cardHeight = canvas.height/(this.rows+1)
this.dim = [ this.cardWidth,this.cardHeight]

this.cardset = [cheese, trees,animals]

this.faces = this.cardset[gameState.cards[i]]

this.select = this.faces.sort(()=>{
    return Math.random() - 0.5
})

this.select.filter((elem)=>{
elem[1]>3
})
console.log(this.select)

        this.cards = []

        for (let i = 0; i < this.noCards/2; i++) {
            this.id1= Math.floor(16777216 * Math.random())
            this.cards.push(new Cheese(this.dim,this.faces[i],  this.id1))
                this.cards.push(new Cheese(this.dim,this.faces[i],  this.id1+10))
          
        }
        
      
        this.cardgrid = this.cards.sort(()=>{
            return Math.random() - 0.5
        })


this.grid = 0


this.gridMake()


    }
    gridMake(){
        for (let i = 0; i < this.cols; i++) {
            for (let y = 0; y < this.rows; y++) {
                let pos = [i,y]
                this.cardgrid[this.grid].gridPos = pos
                this.grid++
            }
         }
    }
    draw(context, context2){
        for (const card of this.cardgrid) {
            card.draw(context)
            
           card.drawIDS(context2)
        }
    }
    update(time, context){
        for (const card of this.cardgrid) {
            card.update(time,context)      
        }
    }
}

let sw = canvas.width
let sh = canvas.height
let cols = null
let rows = null
let cardWidth = null
let cardHeight = null
let grid = []



export const num = optimizedDivisors(gameState.noCards+gameState.level);



if(sw>sh){
    rows = num[(num.length/2)-1]
    cols= num[(num.length/2)]

} else{
    cols = num[(num.length/2)-1]
    rows  = num[(num.length/2)]
}

cardWidth = sw/(cols+1)
cardHeight = sh/(rows+1)



for (let i = 0; i < cols; i++) {
   for (let y = 0; y < rows; y++) {
    grid.push([i,y])
   }
}



export const gmCols = cols 
export const gmRows = rows 
export const gmCW = cardWidth 
export const gmCH = cardHeight 
export const gmGrid = grid 

let rnbks = Math.floor((Math.random()+0.2)*2)
let bks = [0,2,4]

export const bk = bks[rnbks]

