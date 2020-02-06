/*
const nome = "Jorge";
const idade = 12;
const curso = true;
const produto = {produto: "mouse", quantidade: "45"};
const somar = () => 3 + 3;

console.log(typeof(nome));
console.log(typeof(idade));
console.log(typeof(curso));
console.log(typeof(produto));
console.log(typeof(somar));

const cidade = "São Roque";
const estado = 'SP';
const pais = `BR ${estado}`;

console.log("Minha cidade é: ", cidade);
console.log("Estado: ", estado, "sou daqui");
console.log(`País: ${pais}`);

    INCREMENTO DE VARIÁVEIS
let nota = 8;
let nota2 = 8;

console.log(nota++);
console.log(++nota2);

nota += 1;
*/
function chama() {
    const $nome = window.document.getElementById("nome").value;
    const $nota1 = window.document.getElementById("nota1").value;
    const $nota2 = window.document.getElementById("nota2").value;
    const $media = window.document.getElementById("media");
    const $situacao = window.document.getElementById("situacao");

    $situacao.style.textAlign = "center";
    $situacao.style.color = "white";

    const nota1 = Number($nota1);
    const nota2 = Number($nota2);

    $media.value = ( nota1 + nota2 ) / 2;

    if ($media.value >= 5 ) {
        $situacao.value = "APROVADO";
        $situacao.style.backgroundColor = "green"

    } else {
        $situacao.value = "REPROVADO";
        $situacao.style.backgroundColor = "red";
        
    }

    
}
