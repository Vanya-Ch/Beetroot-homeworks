document.addEventListener("DOMContentLoaded", ()=>{
    let playList = [

        {
        
         author: "LED ZEPPELIN",
        
         song:"STAIRWAY TO HEAVEN"
        
        },
        
        {
        
         author: "QUEEN",
        
         song:"BOHEMIAN RHAPSODY"
        
        },
        
        {
        
         author: "LYNYRD SKYNYRD",
        
         song:"FREE BIRD"
        
        },
        
        {
        
         author: "DEEP PURPLE",
        
         song:"SMOKE ON THE WATER"
        
        },
        
        {
        
         author: "JIMI HENDRIX",
        
         song:"ALL ALONG THE WATCHTOWER"
        
        },
        
        {
        
         author: "AC/DC",
        
         song:"BACK IN BLACK"
        
        },
        
        {
        
         author: "QUEEN",
        
         song:"WE WILL ROCK YOU"
        
        },
        
        {
        
         author: "METALLICA",
        
         song:"ENTER SANDMAN"
        
        }
        
        ];
    
        let ol = document.createElement('ol'),
            main = document.getElementById('main');
    
    function addList(a,b,c){
        
            
       b.append(c);
       for(let x of a){
            let item = document.createElement('li')
            item.innerHTML = JSON.stringify(x);
            c.append(item)
       }
    }
    
    addList(playList, main, ol);

    function openNewWindow(){
        let button1 = document.createElement('button');
        button1.textContent = "Open";
        main.append(button1);

        let div = document.createElement('div'),
            button2 = document.createElement('button');
            button2.textContent = "X";
        div.classList.add('center');
        button2.classList.add('close')
        div.style.visibility = "hidden";
        div.textContent = "Close this window"
        main.append(div);
        div.append(button2);
        


        button1.onclick = () => {
            button1.style.visibility = "hidden";
            div.style.visibility = "";
        }
        button2.onclick = () => {
            button1.style.visibility = "";
            div.style.visibility = "hidden";
        }
    }
    

openNewWindow();

    function switchLight(){
        let div = document.createElement('div'),
            colors = ["red","yellow","green"];
        
        div.classList.add('colors');
        div.textContent = "Click on me!"
        
        div.style.backgroundColor = colors[0]
            
        
        
        div.onclick = () =>{
            if(div.style.backgroundColor === colors[0]){
                div.style.backgroundColor = colors[1]
            }else if(div.style.backgroundColor === colors[1]){
                div.style.backgroundColor = colors[2]
            }else{
                div.style.backgroundColor = colors[0]
            }
        }
        
        console.log(div.style)
            
        
        main.append(div)
    }
switchLight();
})