import {createLeftAside} from './leftaside.js';


const API_KEY = "45bb34b600a34d9eaed2c272c056893b"
const root = document.getElementById("root");
const page = document.createElement("div");
page.classList.add("page")
// const time = new Date()

function createNav() {
    const nav = document.createElement("nav");

    const home = document.createElement("a");
    home.href = "/home";
    home.textContent = "Home";
    home.classList.add("link")
    home.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem("route", "home");

        loadRoute();
        console.log("CCCCC");
    })

    const about = document.createElement("a");
    about.href = "/about";
    about.textContent = "About";
    about.classList.add("link")


    const CreateStory = document.createElement("a");
    CreateStory.href = "/CreateStory";
    CreateStory.textContent = "Create Story";
    CreateStory.classList.add("link")

    nav.appendChild(home);
    nav.appendChild(CreateStory);
    nav.appendChild(about);
    root.appendChild(nav);
}


async function createLeftAside() {
    // root.innerHTML = "";
    const aside = document.createElement("aside");
    aside.classList.add("pageLeft")

    // root.innerHTML = "";
    // const container = document.createElement("main");

    const res = await fetch(`https://newsapi.org/v2/everything?q=Apple&apiKey=${API_KEY}`)
    const data = await res.json();
    // console.log(data);
    if (data.status === "ok") {

        console.log("a")
        data.articles.forEach(element => {
            const section = document.createElement("section");

            // const title = document.createElement("h1")
            const timeDisplay = document.createElement("p");
            timeDisplay.classList.add("leftTimeDisplay")
            const title = document.createElement("p")
            title.classList.add("LeftTitle")
            const urlToImage = document.createElement("img")
            urlToImage.classList.add("LeftUrlToImage")
            const time = new Date()
            console.log(time)
            timeDisplay.textContent = time.toString();
            // console.log(element.title)
            // title.textContent = element.title;
            title.textContent = element.title;
            // urlToImage.textContent = element.urlToImage;
            urlToImage.src = element.urlToImage
            section.appendChild(timeDisplay);
            section.appendChild(urlToImage);
            section.appendChild(title)
            aside.appendChild(section);
            page.appendChild(aside);
        });

        // createNav()
        // createLeftAside()
        // page.appendChild(container)
        // createRightAside()
        // root.appendChild(page)

        // aside.textContent = "aside"

        page.appendChild(aside)
        root.appendChild(page)
    }
}

async function createRightAside() {
    // root.innerHTML = "";
    const aside = document.createElement("aside");
    aside.classList.add("pageRight")

    aside.textContent = "aside"

    page.appendChild(aside)
    root.appendChild(page)
}



// createLeftAside()
// createRightAside()


async function createHome() {
    root.innerHTML = "";
    const container = document.createElement("main");

    const res = await fetch(`https://newsapi.org/v2/everything?q=Apple&apiKey=${API_KEY}`)
    const data = await res.json();
    console.log(data);
    if (data.status === "ok") {

        console.log("a")
        data.articles.forEach(element => {
            const section = document.createElement("section");
            const title = document.createElement("h1")
            const author = document.createElement("p")
            const urlToImage = document.createElement("img")
            console.log(element.title)
            title.textContent = element.title;
            author.textContent = element.author;
            // urlToImage.textContent = element.urlToImage;
            urlToImage.src = element.urlToImage
            section.appendChild(urlToImage);
            section.appendChild(author)
            section.appendChild(title);
            container.appendChild(section);
        });

        createNav()
        createLeftAside()
        page.appendChild(container)
        createRightAside()
        root.appendChild(page)
    }

    // title.textContent;
}
function loadRoute() {
    const currRote = localStorage.getItem("route");
    if (currRote === "home") createHome();
    else if (currRote === "about") createPage("About page");
    else createNav();
}
createNav()