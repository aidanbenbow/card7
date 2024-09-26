import { ch, cw, nums} from "../constants/constant.js";
import { gameState } from "../states/gameState.js";
import { playerState } from "../states/playerState.js";

export class GameOverlay{
    constructor(game){
       this.game = game
        this.image = document.querySelector('#letters');
        this.time = gameState.time
        this.timeTimer = 0
       
    }
    drawFrame(context, frameKey,x,y,direction=[1,1]){
        const [dx,dy,dw,dh] = nums.get(frameKey)

        context.scale(direction[0],direction[1])
        context.drawImage(this.image,dx,dy,dw,dh, x*direction[0],y*direction[1], dw,dh)
        context.setTransform(1,0,0,1,0,0)
  
    }

    drawScore(context, score, x){
        const strValue = String(score)
        const buffer = ((4*20)-strValue.length*20)
        
        for (let i = 0; i < strValue.length; i++) {
            this.drawFrame(context, `score-${strValue[i]}`, x+buffer+i*20, gameState.height*0.2)
            
        }
    }

    drawTime(context){
        const timeString = String(gameState.time).padStart(2, '00')
        this.drawFrame(context,`time-${timeString.charAt(0)}`, 4.5*gameState.width,0.2*gameState.height )
        this.drawFrame(context,`time-${timeString.charAt(1)}`, 4.5*gameState.width+30,0.2*gameState.height )
    }

    drawScores(context){
        this.drawScore(context, playerState.score, 1.0*gameState.width)
        this.drawScore(context, playerState.misses, 2.0*gameState.width)
    }

    drawScoreLabel(context, x){
        context.save()
        context.font = "30px Arial";
            context.color = "white"
            context.fillText(`${player.value}`, x, 1.1*gameState.height)    
              context.restore()
    }

    draw(context){
        this.drawTime(context)
        this.drawScoreLabel(context, 0.5*gameState.width)
        this.drawScores(context)
    }

    updateTime(time){ 
        
        if(time.previous>this.timeTimer+1000){
         if(gameState.time>0)   gameState.time-=1
            this.timeTimer=time.previous
        }
      }

    update(time){
        
     this.updateTime(time)
    }

}