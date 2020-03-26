"use stritc";

const verificarCep = () => {
    return document.getElementById("cep").reportValidity();
}

const encontrarCep = async (cep) => {

    if (verificarCep()) {
        const url = `https://api.postmon.com.br/v1/cep/${cep}`
        

        // 1° Primeiro usamos a API FETCH e passa como parâmetro uma URL
        // 2° Segundo usa o método then(callback) para mostrar o resultado da URL
        // 3° Terceiro transforma a resposta (res) em um JSON
        // 4° Quarto usa o método then() novamente para pegar os dados do JSON

        // Método sem o async e o await
        // fetch(url).then( (res) => res.json().then((dados) => preencherFormulario(dados)),
        //                  () => window.alert("CEP Inválido"));

        

        // Método com o async e o await
        try {
            const pegarEndereco = await fetch(url);
            const endereco = await pegarEndereco.json();
            
            document.getElementById("endereco").value = "Pesquisando CEP..."

            preencherFormulario(endereco);

        } catch {
            alert("cep invalido");
        }
          
    }
    
}

const preencherFormulario = (endereco) => {
    
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.cidade;
    document.getElementById("estado").value = endereco.estado;
    
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
