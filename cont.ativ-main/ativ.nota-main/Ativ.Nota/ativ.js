const body = document.querySelector(`body`);
body.style.background = "blue";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.overflow = "hidden";


const div2 = document.createElement("div")
div2.style.width = "700px";
div2.style.height ="700px";
div2.style.display = "flex";
div2.style.backgroundColor = "white";
div2.style.alignItems = "center";
div2.style.justifyContent = "center";
div2.style.flexDirection = "column";
body.appendChild(div2);

const textoDiv = document.createElement("h1");
textoDiv.textContent = "ATIVIDADE DE PROGRAMAÇÃO WEB";
textoDiv.style.color = "blue";
div2.appendChild(textoDiv);

const nome = document.createElement("input");
nome.placeholder = "Escreva seu nome: ";
nome.style.display = "flex-end";
nome.style.color = "blue";
nome.style.margin = "30px";
div2.appendChild(nome);

const nota_1 = document.createElement("input");
nota_1.placeholder = "Escreva a primeira nota: ";
nota_1.style.display = "flex-end";
nota_1.style.color = "black";
nota_1.style.margin = "50px";
div2.appendChild(nota_1);

const nota_2 = document.createElement("input");
nota_2.placeholder = "Escreva a segunda nota: ";
nota_2.style.display = "flex-end";
nota_2.style.color = "black";
nota_2.style.margin = "50px";
div2.appendChild(nota_2);

const nota_3 = document.createElement("input");
nota_3.placeholder = "Escreva a terceira nota: ";
nota_3.style.display = "flex-end";
nota_3.style.color = "black";
nota_3.style.margin = "50px";
div2.appendChild(nota_3);

const bt = document.createElement("button");
bt.textContent = "Calcular Média";
bt.style.display = "flex-end";
div2.appendChild(bt);
bt.addEventListener(`click`, function (){
    var media = (parseFloat(nota_1.value) + parseFloat(nota_2.value) + parseFloat(nota_3.value))/3
    


const h = document.createElement(`h1`);
h.textContent = `A média é ${media}`;
h.style.color = `blue`
div2.appendChild(h)

})









