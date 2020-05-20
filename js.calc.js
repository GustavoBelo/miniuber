//2 + 1.4*distância + 0.26*tempo COMENTÁRIO (fórmula)
// funções COMO USAR
function qualMoeda(moeda) {
    return "R$" + moeda
}

function formatoDaMoeda(variavel) {
    return variavel.toFixed(2).replace(".", ',')
}

function calcular() {
    km = inputKm.value
    min = inputTempo.value
    vlride = 2 + 1.4 * km + min * 0.26
    botaoCalcular.innerHTML = "Total: " + qualMoeda(formatoDaMoeda(vlride))
}