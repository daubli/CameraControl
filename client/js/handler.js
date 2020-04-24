document.addEventListener("DOMContentLoaded", function() {
    registerEventHandler();
});

const registerEventHandler = function () {

    for (let i = 1; i < 3; i++) {
        document.querySelector("#focus-near-"+i).addEventListener("mousedown", () => sendCommand(i, visca.focusNear()));
        document.querySelector("#focus-near-"+i).addEventListener("mouseup", () => sendCommand(i, visca.focusStop()));
        document.querySelector("#focus-far-"+i).addEventListener("mousedown", () => sendCommand(i, visca.focusFar()));
        document.querySelector("#focus-far-"+i).addEventListener("mouseup", () => sendCommand(i, visca.focusStop()));
        document.querySelector("#up-"+i).addEventListener("mousedown", () => sendCommand(i, visca.up()));
        document.querySelector("#up-"+i).addEventListener("mouseup", () => sendCommand(i, visca.movementStop()));
        document.querySelector("#down-"+i).addEventListener("mousedown", () => sendCommand(i, visca.down()));
        document.querySelector("#down-"+i).addEventListener("mouseup", () => sendCommand(i, visca.movementStop()));
        document.querySelector("#left-"+i).addEventListener("mousedown", () => sendCommand(i, visca.left()));
        document.querySelector("#left-"+i).addEventListener("mouseup", () => sendCommand(i, visca.movementStop()));
        document.querySelector("#right-"+i).addEventListener("mousedown", () => sendCommand(i, visca.right()));
        document.querySelector("#right-"+i).addEventListener("mouseup", () => sendCommand(i, visca.movementStop()));
        document.querySelector("#zoom-out-"+i).addEventListener("mousedown", () => sendCommand(i, visca.zoomOut()));
        document.querySelector("#zoom-out-"+i).addEventListener("mouseup", () => sendCommand(i, visca.zoomStop()));
        document.querySelector("#zoom-in-"+i).addEventListener("mousedown", () => sendCommand(i, visca.zoomIn()));
        document.querySelector("#zoom-in-"+i).addEventListener("mouseup", () => sendCommand(i, visca.zoomStop()));

        document.querySelector("#set-preset-1-1").onclick = () => createPreset(1, 1);
        document.querySelector("#set-preset-1-2").onclick = () => createPreset(1, 2);
        document.querySelector("#set-preset-1-3").onclick = () => createPreset(1, 3);
        document.querySelector("#set-preset-1-4").onclick = () => createPreset(1, 4);
        document.querySelector("#set-preset-1-5").onclick = () => createPreset(1, 5);

        document.querySelector("#call-preset-1-1").onclick = () => callPreset(1, 1);
        document.querySelector("#call-preset-1-2").onclick = () => callPreset(1, 2);
        document.querySelector("#call-preset-1-3").onclick = () => callPreset(1, 3);
        document.querySelector("#call-preset-1-4").onclick = () => callPreset(1, 4);
        document.querySelector("#call-preset-1-5").onclick = () => callPreset(1, 5);
    }

    document.querySelector("body").addEventListener("keydown", (event) => {
        switch(event.keyCode) {
            case 87:
                sendCommand(1, visca.up());
                break;
            case 65:
                sendCommand(1, visca.left());
                break;
            case 83:
                sendCommand(1, visca.down());
                break;
            case 68:
                sendCommand(1, visca.right());
                break;
            case 67:
                sendCommand(1, visca.zoomIn());
                break;
            case 88:
                sendCommand(1, visca.zoomOut());
                break;
            case 38:
                sendCommand(2, visca.up());
                break;
            case 37:
                sendCommand(2, visca.left());
                break;
            case 40:
                sendCommand(2, visca.down());
                break;
            case 39:
                sendCommand(2, visca.right());
                break;
            case 187:
                sendCommand(2, visca.zoomIn());
                break;
            case 219:
                sendCommand(2, visca.zoomOut());
                break;
            case 49:
                sendCommand(1, visca.direct(presets[1]));
                break;
            case 50:
                sendCommand(1, visca.direct(presets[2]));
                break;
            case 51:
                sendCommand(1, visca.direct(presets[3]));
                break;
            case 52:
                sendCommand(1, visca.direct(presets[4]));
                break;
            case 53:
                sendCommand(1, visca.direct(presets[5]));
                break;
            case 54:
                sendCommand(2, visca.direct(presets[6]));
                break;
            case 55:
                sendCommand(2, visca.direct(presets[7]));
                break;
            case 56:
                sendCommand(2, visca.direct(presets[8]));
                break;
            case 57:
                sendCommand(2, visca.direct(presets[9]));
                break;
            case 48:
                sendCommand(2, visca.direct(presets[0]));
                break;
        }
    });

    document.querySelector("body").addEventListener("keyup", (event) => {
        switch(event.keyCode) {
            case 87:
            case 65:
            case 83:
            case 68:
                sendCommand(1, visca.movementStop());
                break;
            case 67:
            case 88:
                sendCommand(1, visca.zoomStop());
                break;
            case 38:
            case 37:
            case 40:
            case 39:
                sendCommand(2, visca.movementStop());
                break;
            case 187:
            case 219:
                sendCommand(2, visca.zoomStop());
                break;
        }
    });
};

const createPreset = function(camera, preset) {
    presets[preset] = {
        camera: camera
    };

    let messageHandlerPanTilt = (message) => {
        if (message.data.length === 22) {
            presets[preset].p = message.data.charAt(5);
            presets[preset].q = message.data.charAt(7);
            presets[preset].r = message.data.charAt(9);
            presets[preset].s = message.data.charAt(11);
            presets[preset].t = message.data.charAt(13);
            presets[preset].u = message.data.charAt(15);
            presets[preset].v = message.data.charAt(17);
            presets[preset].w = message.data.charAt(19);
        }
    };

    let messageHandlerFocus = (message) => {
        if (message.data.length === 14) {
            presets[preset].h = message.data.charAt(5);
            presets[preset].i = message.data.charAt(7);
            presets[preset].j = message.data.charAt(9);
            presets[preset].k = message.data.charAt(11);
        }
    };

    let messageHandlerZoom = (m) => {
        if (m.data.length === 14) {
            presets[preset].x = m.data.charAt(5);
            presets[preset].y = m.data.charAt(7);
            presets[preset].z = m.data.charAt(9);
            presets[preset].g = m.data.charAt(11);
        }
    };

    sendCommand(camera, visca_inq.askPanTiltPos(), messageHandlerPanTilt);
    setTimeout(() => sendCommand(camera, visca_inq.askZoom(), messageHandlerZoom), 100);
    setTimeout(() => sendCommand(camera, visca_inq.askFocusPos(), messageHandlerFocus), 200);
};

const callPreset = function(camera, preset) {
    if (typeof presets[preset] !== typeof undefined && presets[preset].camera === camera &&
            typeof preset[preset].p !== typeof undefined &&
            typeof preset[preset].h !== typeof undefined &&
            typeof preset[preset].x !== typeof undefined) {
        sendCommand(1, visca.direct(presets[preset]));
    }
};

let presets = new Array(10);
