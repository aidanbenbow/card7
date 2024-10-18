import { SmokePuff } from "../animations/smokePuff.js"
import {  bk, gmCH, gmCW } from "../constants/screen.js"
import { gameState } from "../states/gameState.js"


export class Cheese{
    constructor(dim,face, id){
        
        this.image = document.querySelector(`#cards`)
        this.id = id
        this.scale = 1
        
        this.spriteWidth = 100
        this.spriteHeight = 100
        this.frameX = face[0]
        this.frameY = face[1]
        
        this.width = dim[0]
        this.height = dim[1]

        this.x = this.width/2
        this.y = this.height/2
        
      this.gridPos = [0,0]

        this.back = true
        this.clicked = false

        this.smoke = new SmokePuff([this.x+ this.width*this.gridPos[0],
        this.y+ this.height*this.gridPos[1]])
     
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
                100*bk,
                this.spriteWidth,this.spriteHeight, 
                this.x+ this.width*this.gridPos[0],
                this.y+ this.height*this.gridPos[1], 
                this.width  ,
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
       // if(this.clicked) this.smoke.draw(context)
            }
        
            update(time,context){
                if(this.clicked){   
                    this.scale=1.05  
                    this.smoke.update(time)
                } else {
                    this.scale=1  
                }
                
                    
            }

}