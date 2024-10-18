import { canvas, canvas2, ch, cw } from "../constants/constant.js";


export const gameState = {
    time: 0,
    rows: 4,
    cols: 3,
    level:[[2,3],[4,3],[4,4],[4,5],[4,6],[6,5]],
    noCards: 6,
    cards: [0,2,1],
    
    width: cw,
    height: ch,
    c1: canvas.getContext('2d'),
    c2: canvas2.getContext('2d')
 }