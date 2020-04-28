const socket = new WebSocket('ws://localhost:1337');

function sendCommand(camera, command, messageHandler) {
	if (typeof messageHandler === typeof undefined) {
		socket.onmessage = (message) => {};
	} else {
		socket.onmessage = (message) => {
			messageHandler(message);
			socket.onmessage = undefined;
		};
	}


	let packet = "8" + camera + command + "ff";

	socket.send(packet);
}