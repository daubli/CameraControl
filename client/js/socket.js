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


	let cameraSegment = "\\x" + (0x80 | camera).toString(16);
	let packet = eval('"' + cameraSegment + '"') + command;

	socket.send(packet);
}