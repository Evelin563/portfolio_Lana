function calcularIMC() {

    let peso = parseFloat(
        document.getElementById("peso").value
    );

    let altura = parseFloat(
        document.getElementById("altura").value
    );

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {

        document.getElementById("resultado").innerHTML =
            "Digite valores válidos.";

        document.getElementById("classificacao").innerHTML = "";

        return;
    }

    let imc = peso / (altura * altura);

    document.getElementById("resultado").innerHTML =
        "IMC: " + imc.toFixed(2);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    }
    else if (imc < 25) {
        classificacao = "Peso normal";
    }
    else if (imc < 30) {
        classificacao = "Sobrepeso";
    }
    else if (imc < 35) {
        classificacao = "Obesidade Grau I";
    }
    else if (imc < 40) {
        classificacao = "Obesidade Grau II";
    }
    else {
        classificacao = "Obesidade Grau III";
    }

    document.getElementById("classificacao").innerHTML =
        "Classificação: " + classificacao;
}