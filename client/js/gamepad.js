const gamepad = new Gamepad();

const gamepadState = {
    activeCamera : 1
};

gamepad.on('connect', e => {
    console.log(`controller ${e.index} connected!`);
});

gamepad.on('press', 'button_1', () => {
    let presetNumber = gamepadState.activeCamera === 1 ? 1 : 6;
    if (presets[presetNumber] !== null) {
        sendCommand(gamepadState.activeCamera, visca.direct(presets[presetNumber]));
    }
});

gamepad.on('press', 'button_2', () => {
    let presetNumber = gamepadState.activeCamera === 1 ? 2 : 7;
    if (presets[presetNumber] !== null) {
        sendCommand(gamepadState.activeCamera, visca.direct(presets[presetNumber]));
    }
});

gamepad.on('press', 'button_3', () => {
    let presetNumber = gamepadState.activeCamera === 1 ? 3 : 8;
    if (presets[presetNumber] !== null) {
        sendCommand(gamepadState.activeCamera, visca.direct(presets[presetNumber]));
    }
});

gamepad.on('press', 'button_4', () => {
    let presetNumber = gamepadState.activeCamera === 1 ? 4 : 9;
    if (presets[presetNumber] !== null) {
        sendCommand(gamepadState.activeCamera, visca.direct(presets[presetNumber]));
    }
});

gamepad.on('press', 'shoulder_top_left ', () => {
    gamepadState.activeCamera = 1;
});

gamepad.on('press', 'shoulder_top_right ', () => {
    gamepadState.activeCamera = 2;
});

gamepad.on('press', 'shoulder_bottom_left ', () => {
    sendCommand(gamepadState.activeCamera, visca.focusFar());
});

gamepad.on('release', 'shoulder_bottom_left ', () => {
    sendCommand(gamepadState.activeCamera, visca.focusStop());
});

gamepad.on('press', 'shoulder_bottom_right ', () => {
    sendCommand(gamepadState.activeCamera, visca.focusNear());
});

gamepad.on('release', 'shoulder_bottom_right ', () => {
    sendCommand(gamepadState.activeCamera, visca.focusStop());
});

gamepad.on('hold', 'stick_axis_left ', (e) => {
    if (Math.abs(e.value[0]) < 1) {
        e.value[0] = 0;
    }
    if (Math.abs(e.value[1]) < 1) {
        e.value[1] = 0;
    }
    if (e.value[1] === -1) {
        sendCommand(gamepadState.activeCamera, visca.up());
    }
    if (e.value[1] === 1) {
        sendCommand(gamepadState.activeCamera, visca.down());
    }
    if (e.value[0] === -1) {
        sendCommand(gamepadState.activeCamera, visca.left());
    }
    if (e.value[0] === 1) {
        sendCommand(gamepadState.activeCamera, visca.right());
    }
});

gamepad.on('hold', 'stick_axis_right', (e) => {
    if (Math.abs(e.value[0]) < 1) {
        e.value[0] = 0;
    }
    if (Math.abs(e.value[1]) < 1) {
        e.value[1] = 0;
    }
    if (e.value[1] === -1) {
        sendCommand(gamepadState.activeCamera, visca.zoomIn());
    }
    if (e.value[1] === 1) {
        sendCommand(gamepadState.activeCamera, visca.zoomOut());
    }
});

gamepad.on('release', 'stick_axis_left ', (e) => {
    sendCommand(gamepadState.activeCamera, visca.movementStop());
});

gamepad.on('release', 'stick_axis_right ', (e) => {
    sendCommand(gamepadState.activeCamera, visca.zoomStop());
});



