

// import { createElement } from 'react';
import data from './p.json' with { type: 'json' };


const page = document.createElement("div");
page.classList.add("page")

const box = document.createElement("div");
box.classList.add("box2")

const aside = document.createElement("aside");
aside.classList.add("pageRight")

let f 


export  async function createRightAside(currRote) {
    
    
    f = currRote
  


    aside.innerHTML = ""
 
        for(let i = 1;i<4;i++){
            const section = document.createElement("section");
            section.classList.add("rightbox")
            section.classList.add(`rightbox${i}`)
            aside.appendChild(section)
            console.log(section)


            let num = Math.floor(Math.random() * 10) 
            const img = document.createElement("img")
            img.classList.add("rightImg")
            img.src = data[num].url
            
            const button = document.createElement("button")
            button.classList.add("buttonr")
            
            const a = document.createElement("a")
            a.classList.add("a1")
            a.href = data[num].herf
            a.innerText = data[num].title

            button.appendChild(a)
            section.appendChild(img)
            section.appendChild(button)

        }      
        n()
    

    page.appendChild(aside)
    root.appendChild(page)
}


function n(){

    if(f === 'home'){
    
        const myTimeout = setInterval(createRightAside, 2000);
    }
    else{
        clearTimeout(myTimeout);
    }
}
// clearTimeout(myTimeout);





