
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





        // createNav()
        // createFooter()
        // createLeftAside()
  
        createRightAside(currRote)
        page.appendChild(container)
        root.appendChild(page)
    

    // title.textContent;
}

// export default {
//     createHome
// }