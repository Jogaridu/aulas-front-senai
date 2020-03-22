"use stritc";

const encontrarCep = (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/` 

    // 1° Primeiro usamos a API FETCH e passa como parâmetro uma URL
    // 2° Segundo usa o método then(callback) para mostrar o resultado da URL
    // 3° Terceiro transforma a resposta (res) em um JSON
    // 4° Quarto usa o método then() novamente para pegar os dados do JSON

    fetch(url).then( (res) => res.json().then((dados) => preencherFormulario(dados)),
                     () => window.alert("CEP Inválido"));
}

const preencherFormulario = (endereco) => {
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;

}


const $cep = document.getElementById("cep");
$cep.addEventListener("blur", () => encontrarCep($cep.value));
