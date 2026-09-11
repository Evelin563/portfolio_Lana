class Parquimetro {
  constructor(valor) {
    this.valor = valor;
  }

  calcular() {
    if (this.valor < 1) {
      return {
        valido: false,
        mensagem: "Valor insuficiente. Insira pelo menos R$ 1,00.",
        tempo: 0,
        troco: 0
      };
    }

    if (this.valor >= 3) {
      return {
        valido: true,
        mensagem: "Tempo máximo permitido atingido.",
        tempo: 120,
        troco: this.valor - 3
      };
    }

    if (this.valor >= 1.75) {
      return {
        valido: true,
        mensagem: "Pagamento aceito.",
        tempo: 60,
        troco: this.valor - 1.75
      };
    }

    return {
      valido: true,
      mensagem: "Pagamento aceito.",
      tempo: 30,
      troco: this.valor - 1
    };
  }
}

function calcularEstacionamento() {
  const campoValor = document.getElementById("valor");
  const resultado = document.getElementById("resultado");

  const valor = Number(campoValor.value);

  if (campoValor.value === "" || valor < 0) {
    resultado.innerHTML = `
      <p class="erro">Digite um valor válido.</p>
    `;
    return;
  }

  const parquimetro = new Parquimetro(valor);
  const dados = parquimetro.calcular();

  if (!dados.valido) {
    resultado.innerHTML = `
      <p class="erro">${dados.mensagem}</p>
    `;
    return;
  }

  resultado.innerHTML = `
    <p class="sucesso">${dados.mensagem}</p>
    <p><strong>Tempo:</strong> ${dados.tempo} minutos</p>
    <p><strong>Troco:</strong> R$ ${dados.troco.toFixed(2).replace(".", ",")}</p>
  `;
}