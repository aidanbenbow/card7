import { gameState } from "../states/gameState.js";

export class Ads{
    constructor(){
        this.set = Math.floor((Math.random()+0.2)* 2)
        this.refs = [
            'https://youtu.be/im-TlX3qZbs?si=HWHa7NW40Op2Mhcz',
            'https://youtu.be/k3Li8DqTR68?si=USn7xdW8r4jrC_rd',
            'https://youtu.be/fYNfCm8Ukpg?si=OGuILwru8mOfqALw'
        ]
        this.img =  new Image();
        this.img.src = `./audio/thumb${this.set}.png`
        this.img.style.class = 'ad'
        this.img.style.width = '350px'
        this.img.style.height = '150px'
        console.log(this.img.style)

        this.href = document.createElement('a')
        this.href.href = `${this.refs[this.set]}`
        this.href.target = "_blank"
        this.href.append(this.img)
       
 this.html = `<a href='https://youtu.be/im-TlX3qZbs?si=HWHa7NW40Op2Mhcz' target="_blank" id="ytVid">
 <img src='./audio/thmb.png' alt="vid" class="ad" id="ytTh" ></img>
</a> `
    }
}

export const vs =[
    'https://youtu.be/im-TlX3qZbs?si=HWHa7NW40Op2Mhcz',
    './audio/thmb.png'
]