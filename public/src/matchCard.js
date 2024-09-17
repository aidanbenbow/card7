import { Card } from '../entities/card.js'
import { canvas, canvas2, ch, cw, faces,  gameState,  getContext, grid, ids } from '../constants/constant.js'
import { GameOverlay } from '../overlays/gameOverlay.js'


export class Game{
    constructor(){
        this.c = getContext()
        this.c2 = canvas2.getContext('2d')
        this.id =Math.floor(16777216 * Math.random())
        this.id2 =Math.floor(16777216 * Math.random())
        this.id3 =Math.floor(16777216 * Math.random())
        this.width= this.c.canvas.width
        this.height= this.c.canvas.height 
        console.log(this.width,this.height)

this.cw=this.width/10
this.ch=this.height/10

        this.baseWidth = 1920
        this.baseHeight = 1080

        this.ratioWidth = this.width/this.baseWidth
        this.ratioHeight = this.width/this.baseHeight

        this.overlay = new GameOverlay(this)

        this.cols = 2
        this.rows = 2
        this.noCards = 4
       
        
        this.bg = document.querySelector(`#scene1`)

        this.frameTime ={
            previous: 0,
            secondsPast: 0
        }
        
        this.cards = []
        this.cardsToCheck = []

        for (let i = 0; i < this.noCards; i++) {
            if(this.cols>0){
                console.log([2*this.cw+i*2*this.cw+(this.cw*0.5),2*this.ch ])
                this.cards.push(new Card(this,[2*this.cw+i*2*this.cw+(this.cw*0.5),2*this.ch ],faces[i])) 
                this.cols--
            } else{
                console.log([2*this.cw+(i-2)*2*this.cw+(this.cw*0.5),2*this.ch+this.ch+(0.75*this.ch) ])
                this.cards.push(new Card(this,[2*this.cw+(i-2)*2*this.cw+(this.cw*0.5),2*this.ch+this.ch+(0.75*this.ch) ],faces[i])) 
            }
            
            
        }

        
       
        canvas.addEventListener('pointerdown', (e)=>{
            const mousePos = {
                x: e.offsetX,
                y: e.offsetY,
            }

        const [r,g,b,a] = this.c2.getImageData(mousePos.x,mousePos.y,1,1).data
            
            const id = r<<16|g<<8|b

           
                this.cardsToCheck.push(id)
                let crd = this.cards.find((elem)=>elem.id === id)
                
             if(id) crd.back = false
            
if(this.cardsToCheck.length===2){
   
    this.match(this.cardsToCheck[0],this.cardsToCheck[1])
    this.cardsToCheck = []
}
                 
        })

     

    }
resize(w,h){
this.c.canvas.width = w
this.c.canvas.height = h
this.width= this.c.canvas.width
this.height= this.c.canvas.height 
this.ratioWidth = this.width/this.baseWidth
        this.ratioHeight = this.height/this.baseHeight
        console.log(this.width,this.ratioHeight)
        for (let i = 0; i <this.cards.length; i++) {
           this.cards[i].resize()
            
        }
}

    match(id, id2 ){
        
        if(id===(id2-10)){  
            console.log('mat')
            this.matched()
        } else{
            setTimeout(()=>{
                this.noMatch(id,id2)
            },1000)
           
            console.log('nomat')
        }
      
}

matched(){
    gameState.score++
}

noMatch(id,id2){
    let crd1 = this.cards.find((elem)=>elem.id === id)
    let crd2 = this.cards.find((elem)=>elem.id === id2)
             crd1.back = true
             crd2.back = true
             console.log(crd1,crd2)
}

    applyhitRegion(id){
        
        const red = (id & 0xFF0000)>>16
        const green = (id & 0x00FF00)>>8
        const blue = (id & 0x0000FF)
        
        this.c2.fillStyle = `rgb(${red},${green},${blue})`
        this.c2.stokeStyle = `rgb(${red},${green},${blue})`
    }
    hitRegion(n, c1, c2){
        this.applyhitRegion(ids[n])
        this.cards[c1].id = ids[n]
        this.c2.fillRect(this.cards[c1].x,this.cards[c1].y,this.cards[c1].width,this.cards[c1].height,)

        this.applyhitRegion(ids[n]+10)
        this.cards[c2].id = ids[n]+10
        this.c2.fillRect(this.cards[c2].x,this.cards[c2].y,this.cards[c2].width,this.cards[c2].height,)
       
       
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

this.hitRegion(0,0,3)
this.hitRegion(2,1,2)

this.overlay.drawScores(this.c)

}

        
     

    start(){
       
        requestAnimationFrame(this.animate.bind(this)) 
}
}