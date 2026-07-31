// script.js

// Mensagem do botão
function mensagem() {
    const texto = document.getElementById("texto");

    const frases = [
        "🍔 Estou pronto! Estou pronto!",
        "🪼 Vamos pescar águas-vivas!",
        "🍍 Bem-vindo à Fenda do Biquíni!",
        "⭐ Patrick está te esperando!",
        "🦀 Hora de fazer um Hambúrguer de Siri!"
    ];

    const aleatoria = Math.floor(Math.random() * frases.length);
    texto.textContent = frases[aleatoria];
}

// Relógio
function atualizarHora() {
    const hora = new Date();
    const opcoes = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    const relogio = document.getElementById("relogio");

    if (relogio) {
        relogio.textContent = "🕒 " + hora.toLocaleTimeString("pt-BR", opcoes);
    }
}

setInterval(atualizarHora, 1000);
atualizarHora();

// Título piscando
const titulos = [
    "🍍 Bob Esponja",
    "🪼 Fenda do Biquíni",
    "🍔 Siri Cascudo"
];

let indice = 0;

setInterval(() => {
    document.title = titulos[indice];
    indice = (indice + 1) % titulos.length;
}, 2000);

// Animação ao carregar
window.addEventListener("load", () => {
    document.querySelector(".card").style.opacity = "0";
    document.querySelector(".card").style.transform = "translateY(30px)";

    setTimeout(() => {
        document.querySelector(".card").style.transition = "0.8s";
        document.querySelector(".card").style.opacity = "1";
        document.querySelector(".card").style.transform = "translateY(0)";
    }, 200);
});
