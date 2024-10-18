export const canvas = document.querySelector('#canvas1');
export const canvas2 = document.querySelector('#canvas2');
canvas.width = innerWidth;
        canvas.height = innerHeight;
        canvas2.width = innerWidth;
        canvas2.height = innerHeight;
       // console.log(canvas.width,canvas.height)

        export const cw = Math.floor(canvas.width /10)
        export const ch = Math.floor(canvas.height/10)

        export const c1= canvas.getContext('2d')
        export const c2= canvas2.getContext('2d')

        addEventListener('resize', (e)=>{
            
            canvas.width = e.currentTarget.innerWidth;
        canvas.height = e.currentTarget.innerHeight;
        canvas2.width = e.currentTarget.innerWidth;
        canvas2.height = e.currentTarget.innerHeight;
         })
 

export function getMouse(e){
   const mousePos = {
        x: e.offsetX,
        y: e.offsetY, }
        return mousePos
} 

export function getColour(pos){
    const [r,g,b,a] = c2.getImageData(pos.x,pos.y,1,1).data
    const id = r<<16|g<<8|b
         return id
 } 


 export const cheese = [
    [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0]
    ,[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],
]

export const trees = [
    [0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2]
    ,[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],
]

export const animals = [
    [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4]
    ,[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],
]

export const levelnames = [
    'Level 1 - easy peasy',
    'Level 2 - bad animals',
    'Level 3 - the trouble with trees'
]

export const levelinform = [
    'Simply click cards and match the pics',
    'Same again but a bit harder',
    'tricky because the trees are similar'
]




export const stageProps = {
    width: 1920,
    height: 1080,
    top: 540,
    left: 960
}

export const ids = [
    Math.floor(16777216 * Math.random()),Math.floor(16777216 * Math.random()),
    Math.floor(16777216 * Math.random()),Math.floor(16777216 * Math.random()),
    Math.floor(16777216 * Math.random()),Math.floor(16777216 * Math.random()),
]

export const grid = [
    [cw/2,ch],[cw/2+198,ch],[cw/2+396,ch],[cw+600,ch],[cw+800,ch],
    [cw,ch+200],[cw+200,ch+200],[cw+200,ch+200],[cw+300,ch+200],[cw+400,ch+200],
]

export const pairs = [
    [0,2],[1,3],[4,5],
    [6,8],[7,9],[10,11],
    
]

export const faces = [
    [1,0,0],[1,0,0],[2,0,1],
    [2,0,1],[3,0,2],[3,0,2],
    [4,1,3],[4,1,3],[5,1,4],
    [5,1,4],[4,0,5],[4,0,5],
]



export function getContext(){
    const c = canvas.getContext('2d');
        c.imageSmoothingEnabled = false;

        return c
}

export const cardName = [
   
    ['h','e','a','r','t'],
   ['c','i','r','c','l','e'],
   ['o','v','a','l'],
   ['s','t','a','r'],
   ['c','h','i','c','k','e','n'],
   ['s','n','a','k','e'],
   ['b','i','r','d'],
   ['r','a','b','b','i','t'],
   ['s','n','a','i','l'],
   ['w','a','s','p'],  
]


export const keys = new Map([
    [' ', [0,0]],
    ['a', [1,0]],
['b', [2,0]],
['c', [3,0]],
['d', [4,0]],
    ['e', [5,0]],
['f', [6,0]],
['g', [7,0]],
['h', [8,0]],
['i', [9,0]],
['j', [1,1]],
    ['k', [2,1]],
['l', [3,1]],
['m', [4,1]],
['n', [5,1]],
    ['o', [6,1]],
['p', [7,1]],
['q', [8,1]],
['r', [9,1]],
['s', [1,2]],
['t', [2,2]],
['u', [3,2]],
    ['v', [4,2]],
['w', [5,2]],
['x', [6,2]],
['y', [7,2]],
['z', [8,2]],
['cross', [0,1]],
['tick', [0,2]],
])

export const nums = new Map( 
    [ ['time-0', [0,384,40,57]],
     ['time-1', [40,384,40,57]],
     ['time-2', [80,384,40,57]],
    ['time-3', [120,384,40,57]],
    ['time-4', [160,384,40,57]],
    ['time-5', [200,384,40,57]],
    ['time-6', [240,384,40,57]],
     ['time-7', [280,384,40,57]],
    ['time-8', [320,384,40,57]],
    ['time-9', [360,384,40,57]],

    ['score-0', [0,384,40,57]],
     ['score-1', [40,384,40,57]],
     ['score-2', [80,384,40,57]],
    ['score-3', [120,384,40,57]],
    ['score-4', [160,384,40,57]],
    ['score-5', [200,384,40,57]],
    ['score-6', [240,384,40,57]],
     ['score-7', [280,384,40,57]],
    ['score-8', [320,384,40,57]],
    ['score-9', [360,384,40,57]],
    ]
 )
