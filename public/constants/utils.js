import { playerState } from "../states/playerState.js"


export function check(name, entered, tiles ){
    for (let i = 0; i < name.length; i++) {
        if(name[i]===entered[i]){  
            tiles[i].frameX=0
            tiles[i].frameY=2
            playerState.score++
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

export function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        console.log(array)
    }
}

export function shuffle(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
}
 
 