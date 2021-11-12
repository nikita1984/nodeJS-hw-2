const Emitter = require("events");

const emitter = new Emitter();

emitter.on('timerOn', function(num, diferent){
    console.log(`До наступления события ${num} осталось: ${diferent} секунд`);
});

emitter.on('timerOff', function(num){
    console.log(`Cобытие ${num} произошло`);
});

module.exports = emitter;