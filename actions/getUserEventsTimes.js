module.exports = function getUserEventsTimes (userInput) {
    const eventsTimes = [];

    for (item in userInput){
        
        const dateArray = userInput[item].split('-');

        const hour = parseInt(dateArray[0]);
        const day = parseInt(dateArray[1]);
        const month = parseInt(dateArray[2]-1);
        const year = parseInt(dateArray[3]);

        const inputDate = new Date(year, month, day, hour);

        const inputDateInSec = Math.floor(inputDate.getTime() / 1000);

        const eventTime = {
            number: parseInt(item) + 1,
            seconds: inputDateInSec
        }

        eventsTimes.push(eventTime);
    }

    return eventsTimes;
}

