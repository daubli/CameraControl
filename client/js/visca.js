const panSpeed = "\x05";
const tiltSpeed = "\x05";

const visca = {
    focusNear: () => {
        return "\x01\x04\x08\x3b\xFF";
    },
    focusFar: () => {
        return "\x01\x04\x08\x2b\xFF";
    },
    focusStop: () => {
        return "\x01\x04\x08\x00\xFF";
    },
    movementStop: () => {
        return "\x01\x06\x01\x03\x03\x03\x03\xFF";
    },
    up: () => {
        return "\x01\x06\x01" + panSpeed + tiltSpeed +"\x03\x01\xFF";
    },
    down: () => {
        return "\x01\x06\x01" + panSpeed + tiltSpeed +"\x03\x02\xFF";
    },
    left: () => {
        return "\x01\x06\x01" + panSpeed + tiltSpeed +"\x01\x03\xFF";
    },
    right: () => {
        return "\x01\x06\x01" + panSpeed + tiltSpeed +"\x02\x03\xFF";
    },
    direct: (preset) => {
        let packet = "\x01\x06\x20";
        let p = "\\x0" + (preset.p).toString(16);
        packet += eval('"' + p + '"');
        let q = "\\x0" + (preset.q).toString(16);
        packet += eval('"' + q + '"');
        let r = "\\x0" + (preset.r).toString(16);
        packet += eval('"' + r + '"');
        let s = "\\x0" + (preset.s).toString(16);
        packet += eval('"' + s + '"');
        let t = "\\x0" + (preset.t).toString(16);
        packet += eval('"' + t + '"');
        let u = "\\x0" + (preset.u).toString(16);
        packet += eval('"' + u + '"');
        let v = "\\x0" + (preset.v).toString(16);
        packet += eval('"' + v + '"');
        let w = "\\x0" + (preset.w).toString(16);
        packet += eval('"' + w + '"');
        let x = "\\x0" + (preset.x).toString(16);
        packet += eval('"' + x + '"');
        let y = "\\x0" + (preset.y).toString(16);
        packet += eval('"' + y + '"');
        let z = "\\x0" + (preset.z).toString(16);
        packet += eval('"' + z + '"');
        let g = "\\x0" + (preset.g).toString(16);
        packet += eval('"' + g + '"');
        let h = "\\x0" + (preset.h).toString(16);
        packet += eval('"' + h + '"');
        let i = "\\x0" + (preset.i).toString(16);
        packet += eval('"' + i + '"');
        let j = "\\x0" + (preset.j).toString(16);
        packet += eval('"' + j + '"');
        let k = "\\x0" + (preset.k).toString(16);
        packet += eval('"' + k + '"') + "\xff";
        return packet;
    },
    zoomIn: () => {
        return "\x01\x04\x07\x2b\xFF";
    },
    zoomOut: () => {
        return "\x01\x04\x07\x3b\xFF";
    },
    zoomStop: () => {
        return "\x01\x04\x07\x00\xFF";
    }
};

const visca_inq = {
    askZoom: () => {
        return "\x09\x04\x47\xFF";
    },
    askFocusPos: () => {
        return "\x09\x04\x48\xFF";
    },
    askFocusMode: () => {
        return "\x09\x04\x38\xFF"
    },
    askPanTiltPos: () => {
        return "\x09\x06\x12\xFF";
    }
};