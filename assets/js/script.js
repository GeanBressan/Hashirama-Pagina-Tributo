let picture = document.querySelectorAll(".gallery-picture")
let galleryShow = document.querySelector(".gallery-show")

// Abrir imagem
picture.forEach((value) => {
    value.addEventListener("click", (event) => {
        let img = event.target
        img = img.getAttribute("src")
        galleryShow.innerHTML += "<img src='" + img + "'>"
        galleryShow.classList.toggle("ds-none")
    })
})

// Fechar imagem
galleryShow.addEventListener("click", (event) => {
    if(event.target.classList[0] === "gallery-show" || event.target.classList[0] === "close-gallery-show"){
        event.currentTarget.classList.toggle("ds-none")
        event.currentTarget.innerHTML = "<button class='close-gallery-show'>X</button>"
    }
})