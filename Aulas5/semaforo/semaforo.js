const trocaImagem = (imagem) => {
    $imagem.src = imagem;
    clearInterval(para);
}

const automatico = () => {

    para = setInterval(() => {
        $imagem.src = listaCor[contador];
        contador == 2? contador = 0 : contador+=1;
        
    }, 500);

}

let contador = 0;
let para = 0;
listaCor = ["img/vermelho.png", "img/amarelo.png", "img/verde.png"];

$imagem = document.getElementById("img");

document.getElementById("vermelho").addEventListener('click', () => trocaImagem(listaCor[0])); 

document.getElementById("amarelo").addEventListener('click', () => trocaImagem(listaCor[1]));

document.getElementById("verde").addEventListener('click', () => trocaImagem(listaCor[2]));

document.getElementById("automatico").addEventListener('click', automatico);