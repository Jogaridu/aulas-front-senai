"use strict";

const notas = [2, 8, 5, 0, 8];

// let notasAtualizadas = [];

// const limite = notas.length;

// for (let i = 0; i<limite; i++) {
//     notasAtualizadas.push(notas[i] * 10);
// }

/*
    MAP - Retorna um novo array do mesmo tamanho modificado ou não
    Argumento do callback:
        1° Elemento do array
        2° Indice
        3° Array

    Exemplo:
    const notasAtualizadas = notas.map((elemento) => elemento * 10);

    FILTER - Retorna um novo array filtrando pela condição
    Argumento do callback:
        1° Elemento do array
        2° Indice
        3° Array

    Exemplo:
    const notasAcimaMedia = notas.filter(nota => nota >= 5);

    REDUCE - Retorna um único valor
    Argumento do callback:
        1° Acumulador
        2 Elemento do array
        3° Indice
        4° Array

    Valor inicial
*/

const notasAtualizadas = notas.map((elemento) => elemento * 10);
const notasAcimaMedia = notas.filter(nota => nota >= 5);
const notasTotal = notas.reduce( (acc, nota) => acc + nota );

const notasPares100 = notas.filter( nota => nota % 2 == 0).map(nota => nota + 100);

const exibirDados = (el, arr, titulo="Sem titulo") => {
    el.innerHTML += `
    <div class="card text-white bg-secondary mb-3" style="max-width: 10vw";>
        <div class="card-header">
            ${titulo}
        </div>
        <div class="card-body">
            <p>${arr[0].nome}</p>
            <p>${arr[0].idade}</p>
            <p>${arr[0].cidade}</p>
        </div>
    </div>
    `;

}



const $resultados = document.getElementById("resultado");

// exibirDados ($resultados, notas);
// exibirDados ($resultados, notasPares100, "Notas Pares e somando 100");


// JSON

const exibirDadosCliente = (el, clientes) => {
    el.innerHTML += `
    <div class="card text-white bg-secondary mb-3" style="max-width: 10vw;">
        <div class="card-header">
            ${clientes.nome}
        </div>
        <div class="card-body">
            <p>${clientes.nome}</p>
            <p>${clientes.idade}</p>
            <p>${clientes.cidade}</p>
        </div>
    </div>
    `;

}
const clientes = [
    {nome: "Jorge", idade: 19, cidade: "São Roque"},
    {nome: "Ana", idade: 4, cidade: "Jandira"},
    {nome: "Pedro", idade: 31, cidade: "Osasco"},
    {nome: "Maria", idade: 15, cidade: "Itapevi"}
]

const nome = prompt("Digite seu nome");
const idade = prompt("Digite sua idade");
const cidade = prompt("Digite sua cidade");

clientes.push({"nome":nome, "idade":idade, "cidade":cidade});
clientes.forEach((cliente) => exibirDadosCliente($resultados, cliente));
