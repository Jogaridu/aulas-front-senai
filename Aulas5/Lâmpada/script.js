let contador = true;
let pisca = 0;
let lampadaQuebrada = false;

const piscaPisca = function () {
    
    if (contador == false) {
        $lampada.src = "img/ligada.jpg";

    } else {
        $lampada.src = "img/desligada.jpg";
    }
    contador = contador? false:true; 
}

const pararPiscar = () => {
    for (let i = 0; i <= pisca; i++) {
        clearInterval(i);
    }
}

$lampada = document.getElementById("lampada");

$lampada.addEventListener('mouseover', (lampadaQuebrada) => $lampada.src = "img/ligada.jpg");

$lampada.addEventListener('mouseout', (lampadaQuebrada) => $lampada.src = "img/desligada.jpg");

$lampada.addEventListener('click', () => {

    if (pisca >= 5) {
        pararPiscar();
        $lampada.src = "img/quebrada.jpg";
    
    } else {
        pisca = setInterval(piscaPisca, 500);

    }
});

document.getElementById("interruptor").addEventListener('click', pararPiscar);
