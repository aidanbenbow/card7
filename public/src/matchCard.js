import { Card } from '../entities/card.js'
import { canvas, canvas2, ch, cw, faces,  gameState,  getContext, grid, ids, pairs } from '../constants/constant.js'
import { GameOverlay } from '../overlays/gameOverlay.js'
import { Cheese } from '../entities/cheese.js'
import { getData, shuffleArray } from '../constants/utils.js'
import { Grid } from '../entities/grid.js'


export class Game{
    constructor(){

        getData().then(res=>{
            console.log(res)
            return res
        }).then(data=>{
            console.log(data[0])
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

        this.c = getContext()
        this.c2 = canvas2.getContext('2d')
        
        this.width= this.c.canvas.width
        this.height= this.c.canvas.height 
        this.gamestart = false
        
this.cw=this.width/10
this.ch=this.height/10

        this.overlay = new GameOverlay(this)

        this.cols = 3
        this.rows = 4
        this.noCards = 12
        this.order = 0
    
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
           
          },{once:true})

        canvas.addEventListener('pointerdown', (e)=>{
            const mousePos = {
                x: e.offsetX,
                y: e.offsetY, }
                
        const [r,g,b,a] = this.c2.getImageData(mousePos.x,mousePos.y,1,1).data
            
            const id = r<<16|g<<8|b
            console.log(id )
if(id===0) return
if(this.cardsToCheck.includes(id)) return
if(this.matchedcards.includes(id)) return

                this.cardsToCheck.push(id)
                
                 let crd = this.grid.board.find((elem)=>elem.id === id)
                 
              if(id) crd.back = false
             
if(this.cardsToCheck.length===2 
   ){
    console.log(this.cardsToCheck)
    this.match(this.cardsToCheck[0],this.cardsToCheck[1])
                this.cardsToCheck = []
 }        
        })

        savebtn.addEventListener('click', ()=>{
            let name = player.value
            let score = this.overlay.time
            
                      let data = {
                       name ,
                        score
                      }  
            
                      const options = {
                        method: 'POST',
                        headers:{
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                      }
            
                      fetch('/api', options)
              this.reset()
                      },{once:true})

                      this.drawHit()

    }
    match(id, id2 ){ 
        console.log(id,id2)
        if(id===(id2-10) || id-10===(id2)){  
            console.log('mat')
            this.matched( id,id2)
           
        } else{
            setTimeout(()=>{
                console.log(id,id2)
                this.noMatch(id,id2)
            },1000)
        }
}
matched(id,id2){
    gameState.score++

    let crd1 = this.grid.board.find((elem)=>elem.id === id)
    let crd2 = this.grid.board.find((elem)=>elem.id === id2)
           
             this.matchedcards.push(id)
             this.matchedcards.push(id2)
             console.log(this.matchedcards)
}

noMatch(id,id2){
    let crd1 = this.grid.board.find((elem)=>elem.id === id)
    let crd2 = this.grid.board.find((elem)=>elem.id === id2)
             crd1.back = true
             crd2.back = true
            
}

    applyhitRegion(id){
        
        const red = (id & 0xFF0000)>>16
        const green = (id & 0x00FF00)>>8
        const blue = (id & 0x0000FF)
        
        this.c2.fillStyle = `rgb(${red},${green},${blue})`
        this.c2.stokeStyle = `rgb(${red},${green},${blue})`
    }
    hitRegion(n){
        this.applyhitRegion(ids[n])
        this.cardsShuffled.filter(elem=>{
          if( elem.or = n) {
            elem.id = ids[n]
            this.c2.fillRect(elem.x,elem.y,elem.width,elem.height,)
          }
        })
       // this.cardsShuffled[c[0]].id = ids[n]
       // this.c2.fillRect(this.cardsShuffled[c[0]].x,this.cardsShuffled[c[0]].y,this.cardsShuffled[c[0]].width,this.cardsShuffled[c[0]].height,)

        this.applyhitRegion(ids[n]+10)
        this.cardsShuffled.filter(elem=>{
          if( elem.or = n+1) {
           
            elem.id = ids[n]+10
            this.c2.fillRect(elem.x,elem.y,elem.width,elem.height,)
          }
            
        })

        // this.cardsShuffled[c[1]].id = ids[n]+10
        // this.c2.fillRect(this.cardsShuffled[c[1]].x,this.cardsShuffled[c[1]].y,this.cardsShuffled[c[1]].width,this.cardsShuffled[c[1]].height,)
       
       
    }
    drawHit(){
        for (let i = 0; i < 6; i++) {
            this.hitRegion(i)
        }
        
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

if(this.matchedcards.length===12) this.gameover()

}

    start(){
        requestAnimationFrame(this.animate.bind(this)) 

      

        // for (let i = 0; i < this.cards.length; i++) {
        //     if( this.rows>1){
        //     this.rows--
        //     this.cardsShuffled[i].x= this.cw*0.2 + i*this.cardsShuffled[i].width
        //     }else if( this.rows<=1 && this.rows>-2 ){
                
        //         this.rows--
        //         this.cardsShuffled[i].x=  this.cardsShuffled[i-3].x
        //         this.cardsShuffled[i].y= this.ch + this.cardsShuffled[i].height
        //     } else if(this.rows<=-2 && this.rows>-5){
               
        //        this.rows--
        //         this.cardsShuffled[i].x=  this.cardsShuffled[i-6].x
        //         this.cardsShuffled[i].y= this.ch + this.cardsShuffled[i].height *2
        //     } else if(this.rows<=-5 ){
        //         this.cardsShuffled[i].x=  this.cardsShuffled[i-9].x
        //         this.cardsShuffled[i].y= this.ch + this.cardsShuffled[i].height *3
        //     }
           
        // }
        
}
gameover(context){
    this.gamestart=false
    finishoverlay.style.display='block'
    playername.value = `${player.value}`
    playerscore.value = `${this.overlay.time}`
}

reset(){
    console.log('rs')
}

}