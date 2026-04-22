const imagensCards = {
    Charmander: ["Charmander.jpeg", "Charmeleon.jpeg", "Charizard.jpeg"],
    Squirtle: ["Squirtle.jpeg", "Wartortle.jpeg", "Blastoise.jpeg"],
    Bulbassauro: ["Bulbasaur.jpeg", "Ivysaur.jpeg", "Venusaur.jpeg"],
};

function trocarImagem(id) {
    const img = document.getElementById(id);
    const imagens = imagensCards[id];

    let index = imagens.findIndex(src => img.src.includes(src));
    let proximoIndex = (indexAtual + 1) % imagens.length;

    img.src = imagens[proximoIndex];
}