import { ch, cw, gameState, nums} from "../constants/constant.js";

export class GameOverlay{
    constructor(game){
       this.game = game
        this.image = document.querySelector('#letters');
        this.time = 10
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
            this.drawFrame(context, `score-${strValue[i]}`, x+buffer+i*20, this.game.ch*0.5)
            
        }
    }

    drawScores(context){
        this.drawScore(context, gameState.score, 4*this.game.cw)
    }

}