export class Sound{
    constructor(){
        
    }
    bgMusic(){
        bgmusic.volume = 0.3
        bgmusic.play()
    }
    flipMusic(){
        if(flip.currentTime>0.5)flip.currentTime=0
        flip.play()
    }
    matchMusic(){
        if(match.currentTime>0.5)match.currentTime=0
        match.play()
    }
    wrongMusic(){
        if(wrong.currentTime>0.5)wrong.currentTime=0
        wrong.play()
    }
}