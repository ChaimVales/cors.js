export async function createLeftAside() {
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