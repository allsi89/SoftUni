function solve(steps, footprintInMeters, studentSpeed) {
    let totalDistanceInKm = (+steps * +footprintInMeters) / 1000;
    let minsForRest = Math.floor(totalDistanceInKm / 0.5);
    let timeInSeconds = Math.ceil((totalDistanceInKm / studentSpeed) * 60 * 60) + (minsForRest * 60);
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor(timeInSeconds / 60);
    timeInSeconds -= minutes * 60;

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (timeInSeconds < 10) {
        timeInSeconds = '0' + timeInSeconds;
    }

    let totalTime = `${hours}:${minutes}:${timeInSeconds}`;
    console.log(totalTime);
}

solve(10000, 0.70, 5.5);