"use stritc";

const verificarCep = () => {
    return document.getElementById("cep").reportValidity();
}

const encontrarCep = (cep) => {

    if (verificarCep()) {
        const url = `https://viacep.com.br/ws/${cep}/json/`

        // 1° Primeiro usamos a API FETCH e passa como parâmetro uma URL
        // 2° Segundo usa o método then(callback) para mostrar o resultado da URL
        // 3° Terceiro transforma a resposta (res) em um JSON
        // 4° Quarto usa o método then() novamente para pegar os dados do JSON

        fetch(url).then( (res) => res.json().then((dados) => preencherFormulario(dados)),
                         () => window.alert("CEP Inválido"));

        document.getElementById("endereco").value = "Pesquisando CEP..."
    }
    
}

const preencherFormulario = (endereco) => {
    if (endereco.erro) {
        alert("passo3")
        document.getElementById("endereco").value = "";
        document.getElementById("bairro").value = "";
        document.getElementById("cidade").value = "";
        document.getElementById("estado").value = "";

    } else {
        document.getElementById("endereco").value = endereco.logradouro;
        document.getElementById("bairro").value = endereco.bairro;
        document.getElementById("cidade").value = endereco.localidade;
        document.getElementById("estado").value = endereco.uf;
    }
}

const maskCep = ($el) => {
    let aux = $el.value;
    aux = aux.replace(/[^0-9]/g, "");
    aux = aux.replace(/(.{5})(.)/, '$1-$2');
    $el.value = aux;
}

const $cep = document.getElementById("cep");
$cep.addEventListener("blur", () => encontrarCep($cep.value));
$cep.addEventListener("keyup",(e) => maskCep (e.target))
