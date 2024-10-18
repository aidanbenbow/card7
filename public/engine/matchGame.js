import { canvas, getColour, getMouse } from "../constants/constant.js"
import { playerState } from "../states/playerState.js"


export class MatchGame{
    constructor(game){
        this.game = game
        this.cardsToCheck = []
        this.matchedcards = []
        canvas.addEventListener('pointerdown', this.checkCard.bind(this))
        this.won = false

    }
gameWon(){
    if(this.matchedcards.length===this.game.level.noCards) 
    this.won = true
    return this.won
}

checkCard(e){
 this.game.audio.flipMusic()
let mouse = getMouse(e)
const color = getColour(mouse)

if(color===0) return
if(this.cardsToCheck.includes(color)) return
if(this.matchedcards.includes(color)) return
this.cardsToCheck.push(color)

let crd = this.game.level.cardgrid.find((elem)=>elem.id === color)           
                
                crd.clicked = true
                
                    crd.back = false
                
}
match(id, id2 ){        
    if(id===(id2-10) || id-10===(id2)){  
        this.matched( id,id2)   
    } else{
        setTimeout(()=>{  
            this.noMatch(id,id2)
        },1000)
    }
}
matched(id,id2){
    playerState.score++
this.game.audio.matchMusic()
    // let crd1 = this.game.level.cardgrid.find((elem)=>elem.id === id)
    // let crd2 = this.game.level.cardgrid.find((elem)=>elem.id === id2)           
             this.matchedcards.push(id)
             this.matchedcards.push(id2)             
}
noMatch(id,id2){
    playerState.misses++   
    let crd1 = this.game.level.cardgrid.find((elem)=>elem.id === id)
    let crd2 = this.game.level.cardgrid.find((elem)=>elem.id === id2)
             crd1.back = true
             crd2.back = true
             crd1.clicked = false
             crd2.clicked = false
             this.game.audio.wrongMusic()
}   
update(){
    if(this.cardsToCheck.length===2 ){
         this.match(this.cardsToCheck[0],this.cardsToCheck[1])
        this.cardsToCheck = []
         }  
         this.gameWon()
        }
}