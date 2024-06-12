// João Victor Santos Ruas

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', function connection(ws) {
    console.log('Cliente conectado');

    ws.on('message', function incoming(message) {
        console.log('Mensagem recebida:', message);
        // Enviar mensagem recebida para todos os clientes conectados
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

server.listen(3000, function listening() {
    console.log('Servidor está rodando na porta 3000');
});
