import { gameState } from "./constant.js"

export function check(name, entered, tiles ){
    for (let i = 0; i < name.length; i++) {
        if(name[i]===entered[i]){  
            tiles[i].frameX=0
            tiles[i].frameY=2
            gameState.score++
        } else{
            tiles[i].frameX=0
            tiles[i].frameY=1
        }
      }
}

export async function getData(){
    const res = await fetch('api')
    const dat = await res.json()
    return dat
}

 