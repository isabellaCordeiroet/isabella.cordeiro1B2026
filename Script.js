
// script.js

document.addEventListener("DOMContentLoaded", () => {
  alert("👽 Bem-vindo ao Blog sobre ETs!");

  const titulo = document.querySelector("h1");

  titulo.addEventListener("click", () => {
    const mensagens = [
      "🛸 Você encontrou um sinal do espaço!",
      "👽 Será que estamos sozinhos no universo?",
      "🌌 O universo é cheio de mistérios!",
      "✨ Continue explorando o blog!"
    ];

    const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    alert(aleatoria);
  });
});
