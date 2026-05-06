const div = document.getElementById("div");
const btn = document.getElementById("btn");

// criar novos elementos e fazê-los aparecer no HTML 

btn.addEventListener("click", () => {
    const novo = document.createElement("p");
novo.textContent = "Texto criado com sucesaso";

// depois de criado o elemento, precisamos dizer aonde ele irá ser posiconado

div.appendChild(novo)
})