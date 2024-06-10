// João Victor Santos Ruas

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reservationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio tradicional do formulário

        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Simulação de processamento da reserva
        const message = `Reserva confirmada para ${date} às ${time}.`;
        document.getElementById('message').textContent = message;
    });
});
