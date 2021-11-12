const getUserEventsTimes = require('./getUserEventsTimes');
const getDiferent = require('./getDiferent');
const printDiferent = require('./printDiferent');

module.exports = function outputToTheConsole () {
    const consoleInput = process.argv.slice(2);
    const times = getUserEventsTimes (consoleInput);
    let nowSeconds = Math.floor(Date.now() / 1000);
    for (time of times) {
        const diferent = getDiferent (time.seconds, nowSeconds);
        printDiferent (time.number, diferent);
    }
}


