const visca = {
    speed: {
        pan: "\x0f",
        tilt: "\x0f"
    },
    focusNear: () => {
        return "\x01\x04\x08\x3a\xFF";
    },
    focusFar: () => {
        return "\x01\x04\x08\x2a\xFF";
    },
    focusStop: () => {
        return "\x01\x04\x08\x00\xFF";
    },
    movementStop: () => {
        return "\x01\x06\x01\x03\x03\x03\x03\xFF";
    },
    up: () => {
        return "\x01\x06\x01" + visca.speed.pan + visca.speed.tilt + "\x03\x01\xFF";
    },
    down: () => {
        return "\x01\x06\x01" + visca.speed.pan + visca.speed.tilt + "\x03\x02\xFF";
    },
    left: () => {
        return "\x01\x06\x01" + visca.speed.pan + visca.speed.tilt + "\x01\x03\xFF";
    },
    right: () => {
        return "\x01\x06\x01" + visca.speed.pan + visca.speed.tilt + "\x02\x03\xFF";
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

const visca_settings = {
    automaticFocus: () => {
        return "\x01\x04\x38\x02\xFF";
    },
    manualFocus: () => {
        return "\x01\x04\x38\x03\xFF";
    },
    automaticExposure: () => {
        return "\x01\x04\x39\x00\xFF";
    },
    manualExposure: () => {
        return "\x01\x04\x39\x03\xFF";
    },
    irisDirect: (value) => {
        let packet = "\x01\x04\x4b\x01\x00";
        value = parseInt(value);
        if (value > 15) {
            let r = "\\x0" + value.toString(16).charAt(0);
            packet += eval('"' + r + '"');
            let s = "\\x0" + value.toString(16).charAt(1);
            packet += eval('"' + s + '"');
        } else {
            packet += "\x00";
            let s = "\\x0" + value.toString(16).charAt(0);
            packet += eval('"' + s + '"');
        }
        packet += "\xFF";
        return packet;
    },
    gainDirect: (p, q, r, s) => {
        let packet = "\x01\x04\x4c";
        p = "\\x0" + p.toString(16);
        packet += eval('"' + p + '"');
        q = "\\x0" + q.toString(16);
        packet += eval('"' + q + '"');
        r = "\\x0" + r.toString(16);
        packet += eval('"' + r + '"');
        s = "\\x0" + s.toString(16);
        packet += eval('"' + s + '"') + "\xFF";
        return packet;
    },
    backlightOn: () => {
        return "\x01\x04\x33\x02\xFF";
    },
    backlightOff: () => {
        return "\x01\x04\x33\x03\xFF";
    },
    gammaAuto: () => {
        return "\x01\x04\x51\x02\xFF";
    },
    gammaManual: () => {
        return "\x01\x04\x51\x03\xFF";
    },
    gammaDirect: (value) => {
        let packet = "\x01\x04\x52\x00\x00\x00";
        value = parseInt(value);
        let s = "\\x0" + value.toString(16).charAt(0);
        packet += eval('"' + s + '"');
        packet += "\xFF";
        // p = "\\x0" + p.toString(16);
        // packet += eval('"' + p + '"');
        // q = "\\x0" + q.toString(16);
        // packet += eval('"' + q + '"');
        // r = "\\x0" + r.toString(16);
        // packet += eval('"' + r + '"');
        // s = "\\x0" + s.toString(16);
        // packet += eval('"' + s + '"') + "\xFF";
        return packet;
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