
import {createNav}   from './nav.js';
import { createFooter } from "./footer.js"
import {createLeftAside}   from './leftaside.js';
import {createRightAside}   from './rightaside.js';
const API_KEY = "45bb34b600a34d9eaed2c272c056893b"

const page = document.createElement("div");
page.classList.add("page")

export  async function createHome(currRote) {
    root.innerHTML = "";
    const container = document.createElement("main");
    let data = localStorage.getItem("news")
    console.log(data)
    if(data === null){
        // console.log("nalllllllllllllll")
    const res = await fetch(`https://newsapi.org/v2/everything?q=Apple&apiKey=${API_KEY}`)
    data = await res.json();
    console.log(data)
    localStorage.getItem("news",data);
    // console.log(data);}
    }

    if (data.status === "ok") {
        console.log("a")
        data.articles.forEach(element => {
            const section = document.createElement("section");
            const title = document.createElement("h1")
            const author = document.createElement("p")
            const urlToImage = document.createElement("img")
            console.log(element)
            title.textContent = element.title;
            author.textContent = element.author;
            // console.log(author.textContent)
            // urlToImage.textContent = element.urlToImage;
            urlToImage.src = element.urlToImage
            section.appendChild(urlToImage);
            section.appendChild(author)
            section.appendChild(title);
            container.appendChild(section);

               section.addEventListener("click", (e) => {
                    e.preventDefault();
                    // localStorage.setItem("route", "home");
            console.log(element.content)
            console.log(e.content)
            createContent()
                    // loadRoute();
                 
                })

            // console.log(section)
        });

        createNav()
        createFooter()
        createLeftAside()
  
        createRightAside(currRote)
        page.appendChild(container)
        root.appendChild(page)
    }

    // title.textContent;
}

// export default {
//     createHome
// }
