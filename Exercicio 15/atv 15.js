// João Victor Santos Ruas

function contarPalavras() {
    var texto = document.getElementById("inputText").value;
    var palavras = texto.trim().split(/\s+/);
    var numeroPalavras = palavras.length;
    // Ajuste para contar corretamente quando o campo está vazio
    if (texto === "") {
        numeroPalavras = 0;
    }
    document.getElementById("contadorPalavras").textContent = numeroPalavras;
}
