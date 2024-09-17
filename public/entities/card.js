import { cw, stageProps } from "../constants/constant.js"

export class Card{
    constructor(game,pos,face){
        this.game=game
        this.image = document.querySelector(`#cards`)
        this.id = null
        this.spriteWidth = 274
        this.spriteHeight = 368
        this.frameX = face[0]
        this.frameY = face[1]
        this.x = pos[0]
        this.y = pos[1]
        this.width = 2*this.game.cw
        this.height = this.width * this.spriteHeight/this.spriteWidth
        this.ratio = this.spriteWidth/this.spriteHeight

        this.back = true

    }
    resize(){
        this.width = this.spriteWidth * this.game.ratioWidth
        this.height = this.spriteHeight * this.ratio * this.game.ratioHeight
        console.log(this.game.ratioHeight,this.height, this.spriteHeight)
    }
    draw(context){
if(this.back){
    context.drawImage(this.image,
        0,
        2*this.spriteHeight,
        this.spriteWidth,this.spriteHeight, 
        this.x,this.y, 
        this.width,this.height) 
} else{
    context.drawImage(this.image,
        this.spriteWidth*this.frameX,
        this.spriteHeight*this.frameY,
        this.spriteWidth,this.spriteHeight, 
        this.x,this.y, 
        this.width,this.height) 
}

        
    }

    update(time){

    }

}