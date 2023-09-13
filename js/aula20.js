//Tarefa 1

const titulo = document.getElementById("titulo");
const texto = document.getElementsByClassName("texto");

console.log(titulo);

console.log(texto);

console.log(texto[0]);

//Tarefa 2

const nota = document.getElementById("nota");

titulo.innerHTML = "Olá, Coder!";
texto[1].style.display = "none";
nota.innerHTML = "Aluno nota 10!";

console.log(titulo);

console.log(nota);

//Tarefa 3

const button = document.getElementById("button");

button.onclick = () => {
    console.log("Nome: Juan Silveira");
}

//Tarefa 4

let tarefas = [];

const input = document.querySelector(".input");
const enviar = document.querySelector(".enviar");
const visualizar = document.querySelector(".visualizar");
const limpar = document.querySelector(".limpar");

enviar.onclick = () => {
    tarefas.push(input.value);
    input.value = "";
}

visualizar.onclick = () => {
    console.log(tarefas);
}

limpar.onclick = () => {
    tarefas = [];
}