"use strict";
const arr = [""];
localStorage.setItem("listaItens", JSON.stringify(arr));

const converteArrayEmString = (arr) => JSON.stringify(arr);
const pegarDadosLocal = () => JSON.parse(localStorage.getItem("listaItens"));
const atualizarBanco = () => localStorage.setItem("listaItens", converteArrayEmString(arrayNomes));


const mostrarInformacoes = () => {

    const $listaNomes = document.getElementById("listaNomes");

    $listaNomes.innerHTML = "";

    const arrayNomes = JSON.parse(localStorage.getItem("listaItens"));

    arrayNomes.forEach(elemento => {
        $listaNomes.innerHTML += `<li>${elemento}</li>`;
    });

}

let arrayNomes = pegarDadosLocal();

const pegarInformacaoValida = () => {
    const nome = prompt("Digite o nome para atualizar:").trim();
    const dadosBancoString = arrayNomes.toString();

    if (dadosBancoString.indexOf(nome) != -1) {

        return nome;

    } else {
        
        alert(`O nome ${nome} não foi encontrado no banco! Ele pode ser cadastrado.`);

        return "no results"
    };
}


const adicionarBanco = (nomeNovo) => {
    
    arrayNomes.push(nomeNovo);
    
    atualizarBanco();
    
    mostrarInformacoes();
}


const limparBanco = () => {
    localStorage.clear();
    arrayNomes = [];
    
    mostrarInformacoes();
}


const renomearNome = () => {
    
    const nomeVelho = pegarInformacaoValida();

    if (nomeVelho !== "no results") {
        const novoNome = prompt(`O ${nomeVelho} foi escolhido. Digite o novo nome para atualizar:`);

        removerNome(nomeVelho);

        adicionarBanco(novoNome);
    }
    
}


const removerNome = (removerNome) => {
    
    arrayNomes = arrayNomes.filter((nomeBanco) => nomeBanco != removerNome);
    
    atualizarBanco();

    mostrarInformacoes();

}


mostrarInformacoes();

const $caixaUsuario = document.querySelector("#textoUsuario");

document.getElementById("adicionar").addEventListener("click", () => adicionarBanco($caixaUsuario.value));
document.getElementById("limpar").addEventListener("click", () => limparBanco());
document.getElementById("atualizar").addEventListener("click", () => renomearNome());
document.getElementById("excluir").addEventListener("click", () => removerNome($caixaUsuario.value));