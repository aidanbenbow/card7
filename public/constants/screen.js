import { gameState } from "../states/gameState.js";
import { canvas } from "./constant.js";
import { optimizedDivisors } from "./utils.js";

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

