
export async function createHome() {
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