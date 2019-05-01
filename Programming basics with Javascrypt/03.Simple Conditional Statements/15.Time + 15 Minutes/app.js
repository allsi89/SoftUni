function timePlus15Minutes([hours, minutes]) {
    hours = Number(hours);
    minutes = Number(minutes + 15);

    if (minutes > 59) {
        hours++;
        minutes = minutes - 60;
    }
    if (hours > 23) {
        hours = 0;
        
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }

}
timePlus15Minutes([12, 49]);