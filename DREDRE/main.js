document.addEventListener("DOMContentLoaded", function () {
    const campoSenha = document.getElementById("campo-senha");
    const botaoMenos = document.querySelector(".parametro-senha__botao:first-of-type");
    const botaoMais = document.querySelector(".parametro-senha__botao:last-of-type");
    const textoNumeroCaracteres = document.querySelector(".parametro-senha__texto");
    const checkMaiusculo = document.querySelector("input[name='maiusculo']");
    const checkMinusculo = document.querySelector("input[name='minusculo']");
    const checkNumero = document.querySelector("input[name='numero']");
    const checkSimbolo = document.querySelector("input[name='simbolo']");

    let numeroCaracteres = 12;

    botaoMenos.addEventListener("click", () => {
        if (numeroCaracteres > 4) {
            numeroCaracteres--;
            textoNumeroCaracteres.textContent = numeroCaracteres;
            gerarSenha();
        }
    });

    botaoMais.addEventListener("click", () => {
        if (numeroCaracteres < 30) {
            numeroCaracteres++;
            textoNumeroCaracteres.textContent = numeroCaracteres;
            gerarSenha();
        }
    });

    const caracteres = {
        maiusculo: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        minusculo: "abcdefghijklmnopqrstuvwxyz",
        numero: "0123456789",
        simbolo: "!@#$%^&*()_-+=<>?/{}[]"
    };

    function gerarSenha() {
        let conjuntoCaracteres = "";
        let senha = "";

        if (checkMaiusculo.checked) conjuntoCaracteres += caracteres.maiusculo;
        if (checkMinusculo.checked) conjuntoCaracteres += caracteres.minusculo;
        if (checkNumero.checked) conjuntoCaracteres += caracteres.numero;
        if (checkSimbolo.checked) conjuntoCaracteres += caracteres.simbolo;

        if (conjuntoCaracteres.length === 0) {
            campoSenha.value = "Selecione pelo menos um!";
            return;
        }

        for (let i = 0; i < numeroCaracteres; i++) {
            senha += conjuntoCaracteres[Math.floor(Math.random() * conjuntoCaracteres.length)];
        }

        campoSenha.value = senha;
    }

    [checkMaiusculo, checkMinusculo, checkNumero, checkSimbolo].forEach(check => {
        check.addEventListener("change", gerarSenha);
    });

    gerarSenha();
});
