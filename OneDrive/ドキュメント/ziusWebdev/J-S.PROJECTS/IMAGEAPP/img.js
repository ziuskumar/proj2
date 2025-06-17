const accesskey = "MLOa947xZZwuaW8z-zFASgdAVd_47hwVrdMANjABb6M";

const seachform  = document.getElementById("search-form");
const seachbox  = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchimg() {
    keyword = seachbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML ="";
    }

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target ="_blank";
 
        imagelink.appendChild(image);
        searchResult.appendChild(imagelink);
    })

    showMoreBtn.style.display = "block"

}

seachform.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchimg();
})

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchimg();        
})

// https://api.unsplash.com/search/photos?page=1&query=office&client_id=MLOa947xZZwuaW8z-zFASgdAVd_47hwVrdMANjABb6M