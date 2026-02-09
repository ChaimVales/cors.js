import { loadRoute } from "./loadRoute.js";

    


  export function createFooter() {
    const footer = document.createElement("footer");

    const a = document.createElement("a");
    a.href = "/a";
    a.textContent = "תנאי שימוש ";
    a.classList.add("link")
    a.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem("route", "a");

        loadRoute();
     
    })

    const b = document.createElement("a");
    b.href = "/b";
    b.textContent = "הצהרת נגישות";
    b.classList.add("link")


    const c = document.createElement("a");
    c.href = "/c";
    c.textContent = "יצירת קשר";
    c.classList.add("link")

    footer.appendChild(a);
    footer.appendChild(c);
    footer.appendChild(b);
    root.appendChild(footer);
}