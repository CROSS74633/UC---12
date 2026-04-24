/*function trocarImagem(pokemon) {
    const card = document.querySelector("." + pokemon);
    const img = card.querySelector("img");

    if (pokemon === "Charmander") {
        if (img.src.includes("Charmander.jpeg")) {
            img.src = "./assets/images/Charmeleon.jpeg";
        } else {
            img.src = "./assets/images/Charmander.jpeg";
        }
    }

    if (pokemon === "Squirtle") {
        if (img.src.includes("Squirtle.jpeg")) {
            img.src = "./assets/images/Wartortle.jpeg";
        } else {
            img.src = "./assets/images/Squirtle.jpeg";
        }
    }

    if (pokemon === "Bulbassauro") {
        if (img.src.includes("Bulbassauro.jpeg")) {
            img.src = "./assets/images/Ivysaur.jpeg";
        } else {
            img.src = "./assets/images/Bulbassauro.jpeg";
        }
    }
}*/




const evolucoes = {
    Charmander: [
        "./assets/images/Charmander.jpeg",
        "./assets/images/Charmeleon.jpeg",
        "./assets/images/Charizard.jpeg"
    ],
    Squirtle: [
        "./assets/images/Squirtle.jpeg",
        "./assets/images/Wartotle.jpeg",
        "./assets/images/Blastoise.jpeg"
    ],
    Bulbassauro: [
        "./assets/images/Bulbassauro.jpeg",
        "./assets/images/Ivysaur.jpeg",
        "./assets/images/Venossauro.jpeg"
    ]
};

function trocarImagem(pokemon) {
    const card = document.querySelector("." + pokemon);
    const img = card.querySelector("img");

    let faseAtual = parseInt(img.dataset.fase) || 0;

    // próxima fase
    faseAtual = (faseAtual + 1) % evolucoes[pokemon].length;

    img.src = evolucoes[pokemon][faseAtual];
    img.dataset.fase = faseAtual;
}






/*const Impecionar2 = document.getElementById("impecionar2");
const img = document.getElementById("img");

Impecionar2.addEventListener('click', () => {
    img.setAttribute('src', './assets/images/Charmeleon.jpeg')
    img.setAttribute('alt', 'charizard')
})*/