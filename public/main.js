
import { num } from "./constants/screen.js"
import { Game } from "./src/matchCard.js"


window.addEventListener('load',()=>{
     new Game().start()
     console.log(num)
})