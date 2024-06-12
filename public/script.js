// João Victor Santos Ruas

document.addEventListener('DOMContentLoaded', function() {
    const ws = new WebSocket('ws://localhost:3000');

    ws.onmessage = function(event) {
        const messageContainer = document.createElement('div');
        if (typeof event.data === 'string') {
            messageContainer.textContent = event.data;
        } else {
            // Se não for uma string, tentar converter para string
            const reader = new FileReader();
            reader.onload = function() {
                messageContainer.textContent = reader.result;
            };
            reader.readAsText(event.data);
        }
        document.getElementById('messages').appendChild(messageContainer);
    };

    const sendButton = document.getElementById('sendButton');
    sendButton.onclick = function() {
        const input = document.getElementById('messageInput');
        const message = input.value;
        ws.send(message); // Enviar mensagem como texto
        input.value = '';
    };
});
