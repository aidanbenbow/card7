import { Card } from '../entities/card.js'
import { canvas, canvas2, ch, cw, faces, getContext, grid, ids, pairs } from '../constants/constant.js'
import { GameOverlay } from '../overlays/gameOverlay.js'
import { Cheese } from '../entities/cheese.js'
import { getData, shuffleArray } from '../constants/utils.js'
import { Grid } from '../entities/grid.js'
import { Sound } from '../entities/sound.js'
import { gameState } from '../states/gameState.js'
import { playerState } from '../states/playerState.js'


export class Game{
    constructor(){
this.audio = new Sound()
        getData().then(res=>{
            
            return res
        }).then(data=>{
            
            let pl1 = data[0]
            let pl2 = data[1]
            let pl3 = data[2]
           nameone.innerHTML = pl1.name
           scoreone.innerHTML = pl1.score
          
           nametwo.innerHTML = pl2.name
           scoretwo.innerHTML = pl2.score
         
           namethree.innerHTML = pl3.name
           scorethree.innerHTML = pl3.score
           
        })

        this.c = gameState.c1
        this.c2 = gameState.c2
        
        this.gamestart = false
  
        this.overlay = new GameOverlay(this)

        this.bg = document.querySelector(`#scene1`)

        this.frameTime ={
            previous: 0,
            secondsPast: 0
        }
        
        this.cards = []
        this.cardsShuffled = []
        this.cardsToCheck = []
        this.matchedcards = []
        this.pairs = []

     this.grid =  new Grid(this)
  
        stbtn.addEventListener('click', ()=>{
           // this.startGame()
           startoverlay.style.display='none'
           this.gamestart =true
          // this.audio.bgMusic()

           canvas.addEventListener('pointerdown', (e)=>{
            this.audio.flipMusic()
            const mousePos = {
                x: e.offsetX,
                y: e.offsetY, }
               
        const [r,g,b,a] = this.c2.getImageData(mousePos.x,mousePos.y,1,1).data
            
            const id = r<<16|g<<8|b
           
if(id===0) return
if(this.cardsToCheck.includes(id)) return
if(this.matchedcards.includes(id)) return

                this.cardsToCheck.push(id)
                
                 let crd = this.grid.cards.find((elem)=>elem.id === id)
                 
              if(id) crd.back = false
             
if(this.cardsToCheck.length===2 
   ){
   
    this.match(this.cardsToCheck[0],this.cardsToCheck[1])
                this.cardsToCheck = []
 }        
        })
           
          },{once:true})

        levelbtn.addEventListener('click',()=>{
            leveloverlay.style.display='none'
            this.gamestart =true
            this.matchedcards=[]
            gameState.level+=2
            this.grid =  new Grid(this)
            this.overlay.time+=5
            console.log(gameState,this.grid)
          
        })

        savebtn.addEventListener('click', ()=>{
            let name = player.value
            let score = playerState.score
            let misses = playerState.misses
            
                      let data = {
                       name ,
                        score,
                        misses
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

                      

    }
    match(id, id2 ){ 
        
        if(id===(id2-10) || id-10===(id2)){  
            console.log('mat')
            this.matched( id,id2)
           
        } else{
            setTimeout(()=>{
                
                this.noMatch(id,id2)
            },1000)
        }
}
matched(id,id2){
    playerState.score++
this.audio.matchMusic()
    let crd1 = this.grid.cards.find((elem)=>elem.id === id)
    let crd2 = this.grid.cards.find((elem)=>elem.id === id2)
           
             this.matchedcards.push(id)
             this.matchedcards.push(id2)
             
}

noMatch(id,id2){
    playerState.misses++
    
    let crd1 = this.grid.cards.find((elem)=>elem.id === id)
    let crd2 = this.grid.cards.find((elem)=>elem.id === id2)
             crd1.back = true
             crd2.back = true
             this.audio.wrongMusic()
}

    
    animate(time){
        this.c.clearRect(0,0,innerWidth,innerHeight)
        requestAnimationFrame(this.animate.bind(this))

        this.frameTime = {
         secondsPast: (time- this.frameTime.previous)/1000,
         previous: time
        }
        
this.grid.draw(this.c, this.c2)

this.overlay.draw(this.c)
if(this.gamestart) this.overlay.update(this.frameTime)

if(this.overlay.time===0) this.gameover()
if(this.matchedcards.length===gameState.noCards) this.nextLevel()

}

    start(){
        requestAnimationFrame(this.animate.bind(this)) 

}
gameover(context){
    this.gamestart=false
    finishoverlay.style.display='block'
    playername.value = `${player.value}`
    playerscore.value = `${playerState.score}`
    playermisses.value = `${playerState.misses}`
}

nextLevel(){
    this.gamestart=false
    leveloverlay.style.display='block'
    
    levelscore.value = `${playerState.score}`
    levelmisses.value = `${playerState.misses}`
}

}