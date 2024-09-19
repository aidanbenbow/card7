

export class Cheese{
    constructor(game,pos,face){
        this.game=game
        this.image = document.querySelector(`#cheese`)
        this.id = null
        this.spriteWidth = 100
        this.spriteHeight = 100
        this.frameX = face[0]
        this.frameY = face[1]
        this.x = pos[0]
        this.y = pos[1]
        this.width = 2*this.game.cw
        this.height = this.width * this.spriteHeight/this.spriteWidth
        this.ratio = this.spriteWidth/this.spriteHeight
      
        this.back = true
        this.matched = false

    }

    draw(context){
        if(this.back){
            context.drawImage(this.image,
                0,
                0,
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