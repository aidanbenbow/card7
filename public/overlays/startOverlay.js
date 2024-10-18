import { ch, cw } from "../constants/constant.js"
import { getData } from "../constants/utils.js"


export class StartOverlay{
    constructor(){
        this.image = scene

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

    }
    draw(context){
        context.drawImage(this.image,0,0,1920,1080, 0,0, cw,ch)
    }
}