

export class Cheese{
    constructor(game,pos,face, or, a, id){
        this.game=game
        this.image = document.querySelector(`#cheese`)
        this.id = id
        this.or = or
        this.a=a
        this.spriteWidth = 100
        this.spriteHeight = 100
        this.frameX = face[0]
        this.frameY = face[1]
        this.x = pos[0]
        this.y = pos[1]
        this.width = 2*this.game.cw
        this.height = this.width * this.spriteHeight/this.spriteWidth
        this.ratio = this.spriteWidth/this.spriteHeight
      this.gridPos = [0,0]

        this.back = true
        this.matched = false

    }drawIDS(context,x,y){
        this.applyhitRegion()
        
        context.fillRect( this.x+ this.width*x,this.y+ this.height*y,this.width,this.height,)
        }
        
            applyhitRegion(){
                
                const red = (this.id & 0xFF0000)>>16
                const green = (this.id & 0x00FF00)>>8
                const blue = (this.id & 0x0000FF)
                
                this.game.c2.fillStyle = `rgb(${red},${green},${blue})`
                this.game.c2.stokeStyle = `rgb(${red},${green},${blue})`
            }

    draw(context){
        if(this.back){
            context.drawImage(this.image,
                0,
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