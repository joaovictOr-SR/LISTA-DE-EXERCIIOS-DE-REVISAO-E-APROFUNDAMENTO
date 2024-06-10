// João Victor Santos Ruas

function atualizarRelogio() {
    const agora = new Date();

    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    const horaFormatada = `${horas}:${minutos}:${segundos}`;

    document.getElementById('relogio').textContent = horaFormatada;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Inicializa o relógio imediatamente
atualizarRelogio();
