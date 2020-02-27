"use strict";
const frutas = ["Maça", "Mamão", "Laranja", "Pera"];
const clientes = ["Ana Clara", "Maria", "João", "Jorge"]

const card = (arr, title="Lista") => {
    const $card = document.createElement("div");
    $card.classList.add("card");
    const elementos = "<li>" + arr.join('</li><li>') + "</li>";

    $card.innerHTML =  `
        <div class="card-title">${title}</div>
        <div class="card-body">
            <ul>
                ${elementos}
            </ul>
        </div>
    `
    return $card;
}

const $container = document.querySelector(".container");
$container.appendChild(card(frutas, "Frutas"));
$container.appendChild(card(clientes));
