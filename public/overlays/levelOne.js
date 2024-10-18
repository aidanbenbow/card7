import { levelinform, levelnames } from "../constants/constant.js"
import { MatchGame } from "../engine/matchGame.js"


export class LevelOverlay{
    constructor(){

    }
createLevel(){
let levelname = document.createElement('div')
levelname.innerHTML = levelnames[0]
levelname.id = 'levname'
levelname.style.position = 'absolute'
levelname.style.top = '25%'
levelname.style.font = '6rem sans-serif'
levelname.style.left = '25%'
levelname.style.color = 'orange'

levelname.style.backgroundColor= 'rgba(223, 229, 235,0.8)';
levelname.style.padding= '1rem';
levelname.style.margin= '1rem';

let levelinfo = document.createElement('div')
levelinfo.innerHTML = levelinform[0]
levelinfo.id = 'levelinform'

levelinfo.style.top = '25%'
levelinfo.style.font = '2rem sans-serif'
levelinfo.style.left = '25%'
levelinfo.style.color = 'white'

levelname.append(levelinfo)
document.body.prepend(levelname)
}

createLevelTwo(){
    levelname.style.display='block'
    levelname.innerHTML = 'Level 2 - bad animals'
    
    levelname.style.color = 'red'
    let levelinfo = document.createElement('div')
 
    levelinfo.style.top = '25%'
    levelinfo.style.left = '25%'
    levelinfo.innerHTML = 'Same again but a bit harder'
    levelinfo.style.font = '2rem fantasy'
    
    levelinfo.style.color = 'black'
    
    levelname.append(levelinfo)
    document.body.prepend(levelname)

    }

}