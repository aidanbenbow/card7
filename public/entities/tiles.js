export class Tiles{
    constructor(pos){
        this.image = document.querySelector(`#letters`)
      this.pos =pos
        this.width = 109
        this.height = 109
        this.frameX = 0
        this.frameY = 0
    
    }
    draw(context){
        context.drawImage(this.image,
            this.width*this.frameX,
            this.height*this.frameY,
            this.width,this.height, 
            this.pos[0],this.pos[1] , 
            this.width,this.height) 
    }

    update(time){

    }

}