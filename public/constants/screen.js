import { gameState } from "../states/gameState.js";
import { canvas } from "./constant.js";
import { optimizedDivisors } from "./utils.js";

export class Levels{
    constructor(){
        this.noCards = gameState.noCards
        this.level = gameState.level
        this.totcards = this.noCards+this.level
this.set = Math.floor((Math.random()+0.2)* 2)
this.cardSet = [[0,1],[2,3],[4,5]]
this.cardFaces = this.cardSet[this.set]

        this.sw = canvas.width
this.sh = canvas.height
this.cols = null
this.rows = null
this.cardWidth = null
this.cardHeight = null
this.grid = []
this.num = optimizedDivisors(this.totcards)
this.rowsCols()
this.gridMake()


    }rowsCols(){
        if(this.sw>this.sh){
            this.rows = this.num[(this.num.length/2)-1]
            this.cols= this.num[(this.num.length/2)]
        
        } else{
            this.cols = this.num[(this.num.length/2)-1]
            this.rows  = this.num[(this.num.length/2)]
        }
        
        this.cardWidth = this.sw/(this.cols+1)
        this.cardHeight = this.sh/(this.rows+1)
    }
    gridMake(){
        for (let i = 0; i < this.cols; i++) {
            for (let y = 0; y < this.rows; y++) {
                this.grid.push([i,y])
            }
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

