function trocarCor() {
    var white = document.getElementById('white');
    var black = document.getElementById('black');

    // Verifica qual folha de estilo está ativa e troca para a outra
    if (white.disabled) {
        white.disabled = false;
        black.disabled = true;
    } else {
        white.disabled = true;
        black.disabled = false;
    }
}
