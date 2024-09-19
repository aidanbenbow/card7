import { Card } from '../entities/card.js'
import { canvas, canvas2, ch, cw, faces,  gameState,  getContext, grid, ids, pairs } from '../constants/constant.js'
import { GameOverlay } from '../overlays/gameOverlay.js'
import { Cheese } from '../entities/cheese.js'


export class Game{
    constructor(){
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
        this.noCards = 0
    
        this.bg = document.querySelector(`#scene1`)

        this.frameTime ={
            previous: 0,
            secondsPast: 0
        }
        
        this.cards = []
        this.cardsToCheck = []
        this.matchedcards = []

        for (let rows = 0; rows < this.rows; rows++) {
            for (let cols = 0; cols < this.cols; cols++) { 
                this.cards.push(new Cheese(this,[10,50],faces[this.noCards])) 
                this.noCards++
            }
        }

        stbtn.addEventListener('click', ()=>{
           // this.startGame()
           startoverlay.style.display='none'
           this.gamestart =true
           // console.log(this.scores)
          },{once:true})

        canvas.addEventListener('pointerdown', (e)=>{
            const mousePos = {
                x: e.offsetX,
                y: e.offsetY, }

        const [r,g,b,a] = this.c2.getImageData(mousePos.x,mousePos.y,1,1).data
            
            const id = r<<16|g<<8|b

if(id===0) return

                this.cardsToCheck.push(id)
                console.log(this.cardsToCheck)
                 let crd = this.cards.find((elem)=>elem.id === id)
                 console.log(crd)
              if(id) crd.back = false
             
// if(this.cardsToCheck.length===2 
//    ){
    
//     for (let i = 0; i <= this.matchedcards.length; i++) {
//         if(this.matchedcards[i]===this.cardsToCheck[0] ||
//             this.matchedcards[i]===this.cardsToCheck[1]){
//                 console.log(this.matchedcards)
//             } else{
                
//                 this.match(this.cardsToCheck[0],this.cardsToCheck[1])
//                 this.cardsToCheck = []
            
//     } 
//     }
    
// }        
        })

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
    gameState.score++

    let crd1 = this.cards.find((elem)=>elem.id === id)
    let crd2 = this.cards.find((elem)=>elem.id === id2)
           
             this.matchedcards.push(id)
             this.matchedcards.push(id2)
             console.log(this.matchedcards)
}

noMatch(id,id2){
    let crd1 = this.cards.find((elem)=>elem.id === id)
    let crd2 = this.cards.find((elem)=>elem.id === id2)
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
    hitRegion(n, c){
        this.applyhitRegion(ids[n])
        this.cards[c[0]].id = ids[n]
        this.c2.fillRect(this.cards[c[0]].x,this.cards[c[0]].y,this.cards[c[0]].width,this.cards[c[0]].height,)

        this.applyhitRegion(ids[n]+10)
        this.cards[c[1]].id = ids[n]+10
        this.c2.fillRect(this.cards[c[1]].x,this.cards[c[1]].y,this.cards[c[1]].width,this.cards[c[1]].height,)
       
       
    }
    
    animate(time){
        this.c.clearRect(0,0,innerWidth,innerHeight)
        requestAnimationFrame(this.animate.bind(this))

        this.frameTime = {
         secondsPast: (time- this.frameTime.previous)/1000,
         previous: time
        }
        for (const card of this.cards) {
            card.draw(this.c)
        }

        for (let i = 0; i < pairs.length; i++) {
            this.hitRegion(i,pairs[i])         
        }


this.overlay.draw(this.c)
if(this.gamestart) this.overlay.update(this.frameTime)

if(this.matchedcards.length===3) this.gameover()

}

    start(){
        requestAnimationFrame(this.animate.bind(this)) 

        for (let i = 0; i < this.cards.length; i++) {
            if( this.rows>1){
            this.rows--
            this.cards[i].x= this.cw*0.2 + i*this.cards[i].width
            }else if( this.rows<=1 && this.rows>-2 ){
                
                this.rows--
                this.cards[i].x=  this.cards[i-3].x
                this.cards[i].y= this.ch + this.cards[i].height
            } else if(this.rows<=-2 && this.rows>-5){
               
               this.rows--
                this.cards[i].x=  this.cards[i-6].x
                this.cards[i].y= this.ch + this.cards[i].height *2
            } else if(this.rows<=-5 ){
                this.cards[i].x=  this.cards[i-9].x
                this.cards[i].y= this.ch + this.cards[i].height *3
            }
           
        }
        
}
gameover(context){
    finishoverlay.style.display='block'
    playername.value = `${player.value}`
    playerscore.value = `${gameState.score}`
}

}