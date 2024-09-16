import { stageProps } from "../constants/constant.js"

export class Card{
    constructor(pos,face){
        this.image = document.querySelector(`#cards`)
        this.id = null
        this.width = 274
        this.height = 368
        this.frameX = face[0]
        this.frameY = face[1]
        this.x = pos[0]
        this.y = pos[1]

        this.back = true

    }
    drawBack(context){
      
    }
    draw(context){
if(this.back){
    context.drawImage(this.image,
        0,
        2*this.height,
        this.width,this.height, 
        this.x,this.y, 
        this.width,this.height) 
} else{
    context.drawImage(this.image,
        this.width*this.frameX,
        this.height*this.frameY,
        this.width,this.height, 
        this.x,this.y, 
        this.width,this.height) 
}

        
    }

    update(time){

    }

}