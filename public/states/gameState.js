import { canvas, canvas2, ch, cw } from "../constants/constant.js";


export const gameState = {
    time: 15,
    rows: 4,
    cols: 3,
    level:[6,12,24,28,32,36,42,6,12,24,28,32,36,42],
    noCards: 6,
    
    width: cw,
    height: ch,
    c1: canvas.getContext('2d'),
    c2: canvas2.getContext('2d')
 }