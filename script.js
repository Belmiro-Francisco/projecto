function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    //pegar a tag imagem
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if (html.classList.contains('light')) {
        img.setAttribute("src", "./assets/avatar-day.png")
    } else {
        img.setAttribute("src", "./assets/avatar-night.png")
    }

}

