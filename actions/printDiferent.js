const emitter = require("./emitters");

module.exports = function printDiferent (num, diferent) {
    if (diferent >= 0) {
        emitter.emit('timerOn', num, diferent);
    } else {
        emitter.emit('timerOff', num);
    }
}