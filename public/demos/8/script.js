const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");
const botaoLimpar = document.getElementById("limpar");

const campos = {
  nome: document.getElementById("nome"),
  email: document.getElementById("email"),
  telefone: document.getElementById("telefone"),
  cep: document.getElementById("cep"),
  rua: document.getElementById("rua"),
  bairro: document.getElementById("bairro"),
  numero: document.getElementById("numero"),
  cidade: document.getElementById("cidade"),
  estado: document.getElementById("estado")
};

function mostrarMensagem(texto, tipo = "normal") {
  mensagem.textContent = texto;

  if (tipo === "erro") {
    mensagem.style.color = "#e8a2a2";
  } else if (tipo === "sucesso") {
    mensagem.style.color = "#cbd79e";
  } else {
    mensagem.style.color = "#d8dfb9";
  }
}

function formatarCep() {
  let valor = campos.cep.value.replace(/\D/g, "");

  if (valor.length > 5) {
    valor = valor.substring(0, 5) + "-" + valor.substring(5, 8);
  }

  campos.cep.value = valor;
}

async function buscarEndereco() {
  const cepLimpo = campos.cep.value.replace(/\D/g, "");

  if (cepLimpo.length !== 8) {
    return;
  }

  try {
    mostrarMensagem("Localizando endereço pelo CEP...");

    const resposta = await fetch(
      `https://viacep.com.br/ws/${cepLimpo}/json/`
    );

    if (!resposta.ok) {
      throw new Error("Erro na busca");
    }

    const dados = await resposta.json();

    if (dados.erro) {
      limparEndereco();
      mostrarMensagem("CEP não encontrado.", "erro");
      return;
    }

    campos.rua.value = dados.logradouro || "";
    campos.bairro.value = dados.bairro || "";
    campos.cidade.value = dados.localidade || "";
    campos.estado.value = dados.uf || "";

    salvarDados();

    mostrarMensagem(
      "Endereço encontrado: cidade, rua e bairro preenchidos automaticamente.",
      "sucesso"
    );

    campos.numero.focus();
  } catch (erro) {
    mostrarMensagem("Não foi possível buscar este CEP.", "erro");
  }
}

function pegarDadosFormulario() {
  return {
    nome: campos.nome.value,
    email: campos.email.value,
    telefone: campos.telefone.value,
    cep: campos.cep.value,
    rua: campos.rua.value,
    bairro: campos.bairro.value,
    numero: campos.numero.value,
    cidade: campos.cidade.value,
    estado: campos.estado.value
  };
}

function salvarDados() {
  const dados = pegarDadosFormulario();

  localStorage.setItem("cadastroRecruta", JSON.stringify(dados));
}

function restaurarDados() {
  const dadosSalvos = localStorage.getItem("cadastroRecruta");

  if (!dadosSalvos) {
    return;
  }

  const dados = JSON.parse(dadosSalvos);

  campos.nome.value = dados.nome || "";
  campos.email.value = dados.email || "";
  campos.telefone.value = dados.telefone || "";
  campos.cep.value = dados.cep || "";
  campos.rua.value = dados.rua || "";
  campos.bairro.value = dados.bairro || "";
  campos.numero.value = dados.numero || "";
  campos.cidade.value = dados.cidade || "";
  campos.estado.value = dados.estado || "";

  mostrarMensagem("Dados recuperados do armazenamento local.", "sucesso");
}

function limparEndereco() {
  campos.rua.value = "";
  campos.bairro.value = "";
  campos.cidade.value = "";
  campos.estado.value = "";
}

function limparFormulario() {
  localStorage.removeItem("cadastroRecruta");

  Object.values(campos).forEach((campo) => {
    campo.value = "";
  });

  mostrarMensagem("Informações apagadas.");
}

campos.cep.addEventListener("input", () => {
  formatarCep();
  salvarDados();

  const cepLimpo = campos.cep.value.replace(/\D/g, "");

  if (cepLimpo.length === 8) {
    buscarEndereco();
  }
});

Object.values(campos).forEach((campo) => {
  campo.addEventListener("input", salvarDados);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  salvarDados();
  mostrarMensagem("Cadastro salvo com sucesso.", "sucesso");
});

botaoLimpar.addEventListener("click", limparFormulario);

restaurarDados();