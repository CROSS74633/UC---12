let input = document.getElementById("inputNome");
let texto = document.getElementById("nome");

const img = document.getElementById('imagem')
const btn = document.getElementById('btn')

input.addEventListener("input", (event) => {
    // textContent altera apenas texto
    // title.textContent = ´Nome: ´ + event.target.value
    // innerHTML altera texto e permite usar tags, estilos, etc

    console.log("text:", event.target.value);
    texto.textContent = `Nome ${event.target.value}`
});



const BALL_URL = './images/ball.png'
const POKEBOLA_URL = './images/pokeball.png'


btn.addEventListener('click', () => {
    img.setAttribute('src', './images/pokeball.png')
    img.setAttribute('alt', 'charizard')
})