// Guarda qual pergunta está ativa (começa na posição 0 do array)
let card = 0;

// Pega todas as perguntas do HTML
/*
    document.getElementById -> pega apenas UM elemento
    document.querySelectorAll -> TODOS os elementos de uma e retorna uma lista (tipo array)
*/
const cards = document.querySelectorAll('.card');

// Função para ativar a próxima pergunta
function activateQuestion() {


    /*
        question[Card] -> acessa a pergunta atual dentro da lista

        classList.add("active") -> adiciona a classe "active"
        Essa classe faz a pergunta aparecer na tela (via CSS)
    */
    cards[card].classList.add("active");
}

// Função chamada quando se clica em uma resposta
function answer(isCerto) {

    // se a resposta estiver correta
    if (isCerto) {
    /*
        classList.remove("active") -> remove a classe
        Isso faz a pergunta atual sumir da tela
    */
   cards[card].classList.remove("active");

    /*
        Avança para a proxima pergunta
        Card + 1 -> vai para a proxima posição do array
    */
    card = card + 1;

    // Ativa (mostra) a proxima pergunta
    activateQuestion();

    } else {

        // se estiver errada
        console.log("Errrroouuuuuuu");
        
    }
}


// Seleciona todos os botões de resposta
const buttons = document.querySelectorAll(".errado");

/*
    percorre todos os botões
    buttons.length -> quantidade de botões
*/ 
for (let i = 0; i < buttons.length; i++) {
    /*
        addEventListener -. adiciona um evento ao botão
        "click" -> quando clicar
    */
   buttons[i].addEventListener("click", () => {
        /*
            classList.cotains("Certo") -> verifica se o botão tem a classe "Certo"

            se tiver -> retorna true (resposta correta)
            se não tiver -> retorna false (resposta errada)
        */
            const isCerto = buttons[i].classList.contains("certo");

            // Chama a função principal passando true ou false
            answer(isCerto);
   })
}