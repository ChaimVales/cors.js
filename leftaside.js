
const API_KEY = "45bb34b600a34d9eaed2c272c056893b"

const page = document.createElement("div");
page.classList.add("page")

const box = document.createElement("div");
// box.classList.add("box1")
box.id = ("box1")



const aside = document.createElement("aside");
aside.classList.add("pageLeft")

export async function createLeftAside() {

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

        console.log("bbbbb")
        data.articles.forEach(element => {
            const section = document.createElement("section");
            section.classList.add("news-track")

            const timeDisplay = document.createElement("p");
            timeDisplay.classList.add("leftTimeDisplay")
            const title = document.createElement("p")
            title.classList.add("LeftTitle")
            const urlToImage = document.createElement("img")
            urlToImage.classList.add("LeftUrlToImage")
            const time = new Date()
        
            timeDisplay.textContent = time.toString();
     
            title.textContent = element.title;
          
            urlToImage.src = element.urlToImage
            section.appendChild(timeDisplay);
            section.appendChild(urlToImage);
            section.appendChild(title)
            box.appendChild(section);
            aside.appendChild(box);
            
  
        });
        
        page.appendChild(aside);
    

        page.appendChild(aside)
        root.appendChild(page)
    }
}















