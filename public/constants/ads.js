import { gameState } from "../states/gameState.js";

export class Ads{
    constructor(){
        this.set = Math.floor((Math.random()+0.2)* 4)
        this.refs = [
            'https://youtu.be/im-TlX3qZbs?si=HWHa7NW40Op2Mhcz',
            'https://youtu.be/k3Li8DqTR68?si=USn7xdW8r4jrC_rd',
            'https://youtu.be/fYNfCm8Ukpg?si=OGuILwru8mOfqALw',
            'https://italiancheeseaholic.com/italian-hard-cheese',
           'https://italiancheeseaholic.com/parmigiano-reggiano-the-real-parmesan'
        ]
        this.img =  new Image();
        this.img.src = `./audio/thumb${this.set}.png`
        this.img.style.class = 'ad'
        this.img.style.width = '350px'
        this.img.style.height = '150px'
        

        this.href = document.createElement('a')
        this.href.href = `${this.refs[this.set]}`
        this.href.target = "_blank"
        this.href.append(this.img)
       
    }
}
