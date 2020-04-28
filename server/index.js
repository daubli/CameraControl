"use strict";
process.title = 'node-serial-ws';

// Websocket
const webSocketsServerPort = 1337;
const webSocketServer = require('websocket').server;
const http = require('http');
const server = http.createServer((request, response) => {});
const clients = [];

server.listen(webSocketsServerPort, function() {
    console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});

const wsServer = new webSocketServer({
    httpServer: server
});

wsServer.on('request', function(request) {
    console.log((new Date()) + ' Connection from origin ' + request.origin + '.');
    const connection = request.accept(null, request.origin);
    console.log((new Date()) + ' Connection accepted.');

    let index = clients.push(connection) - 1;

    connection.on('message', function(message) {
        let parsed = (message.utf8Data.match(/[\s\S]{1,2}/g) || []).map(item => parseInt(item, 16));
        onReceive(Buffer.from(parsed, 'binary'));
    });

    connection.on('close', function(connection) {
      console.log((new Date()) + " Peer " + connection.remoteAddress + " disconnected.");
      clients.splice(index, 1);
    });
});

function onSerial(msgBuffer)
{
  console.log(msgBuffer);
  for (var i=0; i < clients.length; i++)
    clients[i].sendUTF(msgBuffer.toString('hex'));
}

function onReceive(msg) {
  console.log(msg);
  serialPort.write(msg, function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });
}

// Serial port
const SerialPort = require('serialport');
const conf = require('./conf');

var serialPort = new SerialPort(conf.portName, {
    baudRate: 9600,
    databits: 8,
    parity: 'none',
    stopbits: 1
});

serialPort.on("open", function () {
  console.log('open serial communication');
    serialPort.on('data', function(data) {
      onSerial(Buffer.from(data, 'binary'));
  });  
}); 