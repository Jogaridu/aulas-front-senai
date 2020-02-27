"use strict";
//ARRAY
const alunoA = ["Ana Clara", "5", "8", "7", "DS2M"];

// Errado
// const nome = aluno[0];
// const nota1 = aluno[1]? aluno[1] : 0;
// const nota1 = aluno[2]? aluno[2] : 0;
// const nota1 = aluno[3]? aluno[3] : 0;

// Certo

const [nomeA, n1, n2, n3] = aluno;


// OBJECT
const aluno = {nome:"Ana Clara", nota1:"5", nota2:"8", nota3:"7", turma:"DS2M"};

const {turma, nota3} = aluno;

// REST
const [cliente, ...valores] = alunoA;

const maior = Math.max(valores);

console.log(maior);

const soma = (...numeros) => numeros.reduce((acc, num) => acc + num);
console.log(soma(100, 55));

