const socket = new WebSocket('ws://localhost:1337');
const socket2 = new WebSocket('ws://localhost:1338');

let lastPacket1 = null;
let lastPacket2 = null;

function sendCommand(camera, command, messageHandler) {
	if (camera === 1 && command !== lastPacket1) {
		lastPacket1 = sendCommandOverSocket(socket, command, messageHandler);
	} else if (camera === 2 && command !== lastPacket2) {
		lastPacket2 = sendCommandOverSocket(socket2, command, messageHandler);
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
	return packet;
};