export async function createRightAside() {
    // root.innerHTML = "";
    const aside = document.createElement("aside");
    aside.classList.add("pageRight")

    aside.textContent = "aside"

    page.appendChild(aside)
    root.appendChild(page)
}