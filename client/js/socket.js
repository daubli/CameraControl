const socket = new WebSocket('ws://localhost:1337');
const socket2 = new WebSocket('ws://localhost:1338');

let lastCommand1 = null;
let lastCommand2 = null;

function sendCommand(camera, command, messageHandler) {
	if (parseInt(camera) === 1 && command !== lastCommand1) {
		lastCommand1 = sendCommandOverSocket(socket, command, messageHandler);
	} else if (parseInt(camera) === 2 && command !== lastCommand2) {
		lastCommand2 = sendCommandOverSocket(socket2, command, messageHandler);
	}
}

const sendCommandOverSocket = (messageSocket, command, messageHandler) => {
	if (typeof messageHandler === typeof undefined) {
		messageSocket.onmessage = (message) => {};
	} else {
		messageSocket.onmessage = (message) => {
			messageHandler(message);
			messageSocket.onmessage = undefined;
		};
	}

	let packet = "81" + command + "ff";
	messageSocket.send(packet);
	return command;
};