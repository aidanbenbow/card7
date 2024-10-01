

export class BackgroundAnimation{
    constructor(image,frames,animation, startframe=0){
        this.image = image
        this.animation = animation
        this.frames = new Map(frames)
           this.animationFrame = startframe
           this.animationTimer = 0
           this.framedelay = animation[this.animationFrame][1]
          
    }

    draw(context,x,y){
        if(this.animationFrame<4){
            const [frameKey] =this.animation[this.animationFrame]
       
            const [dx,dy,dw,dh] = this.frames.get(frameKey)
          
            context.drawImage(this.image,dx,dy,dw,dh, x,y, dw,dh)
        }
        
    }
    update(time){
        if(time.previous>this.animationTimer+this.framedelay){
           
this.animationTimer = time.previous
if(this.framedelay>0) this.animationFrame++
            if(this.animationFrame>this.animation.length-1)this.animationFrame=0
        }
    }

    updateOnce(time){
        if(time.previous<this.animationTimer+this.framedelay) return
        this.animationFrame++
this.animationTimer = time.previous

        }
    
   
}