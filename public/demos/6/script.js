let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasMaximas = 10;
let tentativasRestantes = tentativasMaximas;
let jogoAtivo = true;

let inputPalpite = document.getElementById("palpite");
let botaoChutar = document.getElementById("botaoChutar");
let mensagem = document.getElementById("mensagem");
let tentativas = document.getElementById("tentativas");

tentativas.textContent = "Tentativas restantes: " + tentativasRestantes;

botaoChutar.addEventListener("click", chutar);

function chutar() {
  if (!jogoAtivo) {
    return;
  }

  let palpite = Number(inputPalpite.value);

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = "Digite um número válido entre 1 e 100.";
    return;
  }

  tentativasRestantes--;

  if (palpite === numeroSecreto) {
    mensagem.textContent = "Você acertou! O dinossauro rugiu de felicidade!";
    jogoAtivo = false;
    botaoChutar.disabled = true;
  } else if (tentativasRestantes === 0) {
    mensagem.textContent = "Você perdeu! O número secreto era " + numeroSecreto + ".";
    jogoAtivo = false;
    botaoChutar.disabled = true;
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "O número secreto é maior.";
  } else {
    mensagem.textContent = "O número secreto é menor.";
  }

  tentativas.textContent = "Tentativas restantes: " + tentativasRestantes;
  inputPalpite.value = "";
  inputPalpite.focus();
}