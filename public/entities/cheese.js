import { gameState } from "../states/gameState.js"


export class Cheese{
    constructor(pos,face, id){
        
        this.image = document.querySelector(`#cards`)
        this.id = id
        
        this.spriteWidth = 100
        this.spriteHeight = 100
        this.frameX = face[0]
        this.frameY = face[1]
        this.x = 10
        this.y = 50
        
        this.width = gameState.width * 1.25
        this.height = this.width * this.spriteHeight/this.spriteWidth
        this.ratio = this.spriteWidth/this.spriteHeight
      this.gridPos = [pos[0],pos[1]]

        this.back = true
        this.matched = false

    }drawIDS(context){
        this.applyhitRegion()
        
        context.fillRect( this.x+ this.width*this.gridPos[0],this.y+ this.height*this.gridPos[1],this.width,this.height,)
        }
        
            applyhitRegion(){
                
                const red = (this.id & 0xFF0000)>>16
                const green = (this.id & 0x00FF00)>>8
                const blue = (this.id & 0x0000FF)
              
                gameState.c2.fillStyle = `rgb(${red},${green},${blue})`
                gameState.c2.stokeStyle = `rgb(${red},${green},${blue})`
            }

    draw(context){
        
        if(this.back){
            context.drawImage(this.image,
                800,
                0,
                this.spriteWidth,this.spriteHeight, 
                this.x+ this.width*this.gridPos[0],
                this.y+ this.height*this.gridPos[1], 
                this.width ,
                this.height ) 
        } else{
            context.drawImage(this.image,
                this.spriteWidth*this.frameX,
                this.spriteHeight*this.frameY,
                this.spriteWidth,this.spriteHeight, 
                this.x+ this.width*this.gridPos[0],
                this.y+ this.height*this.gridPos[1], 
                this.width ,
                this.height )  
        }   
        
            }
        
            update(time){
        
            }

}