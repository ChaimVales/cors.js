import { createHome } from "./home.js";
import { createNav } from "./nav.js";

 export function loadRoute() {
    const currRote = localStorage.getItem("route");
    console.log(currRote)
    if (currRote === "home") createHome(currRote);
    else if (currRote === "about") createPage("About page");
    else createNav();
}

