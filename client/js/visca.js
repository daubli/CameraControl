const visca = {
    speed: {
        pan: "0a",
        tilt: "0a"
    },
    focusNear: () => {
        return "01040830";
    },
    focusFar: () => {
        return "01040820";
    },
    focusStop: () => {
        return "01040800";
    },
    movementStop: () => {
        return "01060103030303";
    },
    up: () => {
        return "010601" + visca.speed.pan + visca.speed.tilt + "0301";
    },
    down: () => {
        return "010601" + visca.speed.pan + visca.speed.tilt + "0302";
    },
    left: () => {
        return "010601" + visca.speed.pan + visca.speed.tilt + "0103";
    },
    right: () => {
        return "010601" + visca.speed.pan + visca.speed.tilt + "0203";
    },
    upleft: () => {
        return "0106010" + visca.speed.pan + visca.speed.tilt + "0101";
    },
    upright: () => {
        return "0106010" + visca.speed.pan + visca.speed.tilt + "0201";
    },
    downleft: () => {
        return "0106010" + visca.speed.pan + visca.speed.tilt + "0102";
    },
    downright: () => {
        return "0106010" + visca.speed.pan + visca.speed.tilt + "0202";
    },
    direct: (preset) => {
        let packet = "010620";
        packet += "0" + (preset.p).toString(16);
        packet += "0" + (preset.q).toString(16);
        packet += "0" + (preset.r).toString(16);
        packet += "0" + (preset.s).toString(16);
        packet += "0" + (preset.t).toString(16);
        packet += "0" + (preset.u).toString(16);
        packet += "0" + (preset.v).toString(16);
        packet += "0" + (preset.w).toString(16);
        packet += "0" + (preset.x).toString(16);
        packet += "0" + (preset.y).toString(16);
        packet += "0" + (preset.z).toString(16);
        packet += "0" + (preset.g).toString(16);
        packet += "0" + (preset.h).toString(16);
        packet += "0" + (preset.i).toString(16);
        packet += "0" + (preset.j).toString(16);
        packet += "0" + (preset.k).toString(16);
        return packet;
    },
    zoomIn: () => {
        return "0104072b";
    },
    zoomOut: () => {
        return "0104073b";
    },
    zoomStop: () => {
        return "01040700";
    }
};

const visca_settings = {
    automaticFocus: () => {
        return "01043802";
    },
    manualFocus: () => {
        return "01043803";
    },
    automaticExposure: () => {
        return "01043900";
    },
    manualExposure: () => {
        return "01043903";
    },
    irisDirect: (value) => {
        let packet = "01044b0100";
        value = parseInt(value);
        if (value > 15) {
            packet += "0" + value.toString(16).charAt(0);
            packet += "0" + value.toString(16).charAt(1);
        } else {
            packet += "00";
            packet += "0" + value.toString(16).charAt(0);
        }
        return packet;
    },
    gainDirect: (p, q, r, s) => {
        let packet = "01044c";
        packet += "0" + p.toString(16);
        packet += "0" + q.toString(16);
        packet += "0" + r.toString(16);
        packet += "0" + s.toString(16);
        return packet;
    },
    backlightOn: () => {
        return "01043302";
    },
    backlightO: () => {
        return "01043303";
    },
    gammaAuto: () => {
        return "01045102";
    },
    gammaManual: () => {
        return "01045103";
    },
    gammaDirect: (value) => {
        let packet = "010452000000";
        value = parseInt(value);
        packet += "0" + value.toString(16).charAt(0);
        return packet;
    },
    callLed: (switchOn) => {
        return switchOn ? "01330101" : "01330100";
    }
};

const visca_inq = {
    askZoom: () => {
        return "090447";
    },
    askFocusPos: () => {
        return "090448";
    },
    askFocusMode: () => {
        return "090438"
    },
    askPanTiltPos: () => {
        return "090612";
    }
};