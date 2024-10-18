import { Card } from '../entities/card.js'
import { canvas, canvas2, ch, cw, faces, getContext, grid, ids, levelinform, levelnames, pairs } from '../constants/constant.js'
import { GameOverlay } from '../overlays/gameOverlay.js'
import { Cheese } from '../entities/cheese.js'
import { getData, shuffleArray } from '../constants/utils.js'
import { Grid } from '../entities/grid.js'
import { Sound } from '../entities/sound.js'
import { gameState } from '../states/gameState.js'
import { playerState } from '../states/playerState.js'
import { Levels } from '../constants/screen.js'
import { Ads } from '../constants/ads.js'
import { StartOverlay } from '../overlays/startOverlay.js'
import { LevelOverlay } from '../overlays/levelOne.js'
import { MatchGame } from '../engine/matchGame.js'


export class Game{
    constructor(){
this.audio = new Sound()
this.lev = 0
this.level = new Levels(this.lev)
this.ads = [new Ads(),new Ads(),new Ads()]
startoverlay.append(this.ads[0].href)
leveloverlay.append(this.ads[1].href)

//this.misses = 0
    this.bonuses = false
    this.score = playerState.score

        this.c = gameState.c1
        this.c2 = gameState.c2
        
        this.gamestart = false
  
        this.startoverlay = new StartOverlay()
        this.overlay = new GameOverlay(this)

        this.bg = document.querySelector(`#scene1`)

        this.frameTime ={
            previous: 0,
            secondsPast: 0
        }

        
       
        // this.cardsToCheck = []
        // this.matchedcards = []
       
        this.entities = []
        this.levelName = new LevelOverlay()
  
        stbtn.addEventListener('click', ()=>{  
           this.levelName.createLevel()
           startoverlay.style.display='none'
           setTimeout(()=>{
            this.matchgame = new MatchGame(this)
            this.gamestart =true
            levname.style.display='none'
           },500)      
          },{once:true})

        levelbtn.addEventListener('click',()=>{
            this.lev++ 
            levname.style.display='block'
            levname.innerHTML = levelnames[this.lev]
           levelinform.innerHTML = levelinform[this.lev]
            setTimeout(()=>{
                this.matchgame = new MatchGame(this)
                this.gamestart =true
                levname.style.display='none'
               },1500) 
               leveloverlay.style.display='none'
                       
            this.level =  new Levels(this.lev)
  this.overlay.time = gameState.time
            this.bonuses=false
        })

        savebtn.addEventListener('click', ()=>{
            let name = player.value
            let score = playerState.score
            let com = comments.value
            
                      let data = {
                       name ,
                        score, 
                        com  
                      }  
            
                      const options = {
                        method: 'POST',
                        headers:{
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                      }
            
                      fetch('/api', options)
                      document.location.reload()
                      },{once:true})

                      finishoverlay.append(this.ads[2].href)
    }
    animate(time){
        this.c.clearRect(0,0,innerWidth,innerHeight)
        requestAnimationFrame(this.animate.bind(this))

        this.frameTime = {
         secondsPast: (time- this.frameTime.previous)/1000,
         previous: time
        }
        
this.level.draw(this.c, this.c2)
this.level.update(this.frameTime,this.c)

//if(!this.gamestart) this.startoverlay.draw(this.c)
this.overlay.draw(this.c)
if(this.gamestart){
    this.overlay.update(this.frameTime)
    this.matchgame.update()
    if(this.matchgame.won) this.nextLevel()
} 

for (const entity in this.entities) {
    entity.draw(this.c)
    entity.update(this.frameTime)
}

if(this.overlay.time===100) this.gameover()


}
    start(){
        requestAnimationFrame(this.animate.bind(this)) 
}
gameover(context){
    this.penalty = Math.floor(playerState.misses/5) 
    if(!this.bonuses)  playerState.score-=this.penalty
    this.gamestart=false
    finishoverlay.style.display='block'
    playername.value = `${player.value}`
    playerscore.value = `${playerState.score}`
    penaltymisses.value = `${playerState.misses}`
    this.bonuses=true
}
nextLevel(){
    this.gamestart=false   
    leveloverlay.style.display='block'
    
    this.bonus = Math.floor(this.overlay.time/20)
   if(!this.bonuses) playerState.score -=this.bonus
    
    levelscore.value = `${playerState.score}`
    levelmisses.value = `${playerState.misses}`
    timeremaining.value = `${this.bonus}`
    this.bonuses=true 
}
}