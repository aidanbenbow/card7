import { stageProps } from "../constants/constant.js";
import { BackgroundAnimation } from "./background.js";

export class StartGame{
    constructor(){
       
        this.bg = document.querySelector('#scene');
        this.timer = 0
        this.width = 397
        this.height = 70
        this.clickToStart = new BackgroundAnimation(
            document.querySelector('#scene'),
           [ ['start-0', [1920,0,397,70]],
            ['start-1', [1920,70,397,70]],],
            [['start-0',460], ['start-1',460]],
        ) 
    }
    draw(context){
        this.clickToStart.draw(context,stageProps.left-this.width/2,stageProps.top-this.height/2 )
  
    }
    update(time){
      this.clickToStart.update(time)
    }
}