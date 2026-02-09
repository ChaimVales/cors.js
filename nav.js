import { loadRoute } from "./loadRoute.js";

    


  export function createNav() {
    const nav = document.createElement("nav");

    const home = document.createElement("a");
    home.href = "/home";
    home.textContent = "Home";
    home.classList.add("link")
    home.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem("route", "home");

        loadRoute();
     
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
