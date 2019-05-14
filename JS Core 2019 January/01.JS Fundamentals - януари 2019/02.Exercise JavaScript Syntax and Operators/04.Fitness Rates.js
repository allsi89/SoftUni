function solve(day, service, time) {
    time = +time;
    let firstHalfOFDay = time >= 8.00 && time <= 15.00;
    let secondHalfOfDay = time > 15.00 && time <= 22.00;
    let workDay = day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday'
        || day === 'Friday';
    let weekend = day === 'Saturday' || day === 'Sunday';
    let price;

    if (workDay && firstHalfOFDay) {
        switch (service) {
            case 'Fitness':
                price = 5.00;
                break;
            case 'Sauna':
                price = 4.00;
                break;
            case 'Instructor':
                price = 10.00;
                break;
        }
    } else if (workDay && secondHalfOfDay) {
        switch (service) {
            case 'Fitness':
                price = 7.50;
                break;
            case 'Sauna':
                price = 6.50;
                break;
            case 'Instructor':
                price = 12.50;
                break;
        }
    } else if (weekend) {
        switch (service) {
            case 'Fitness':
                price = 8.00;
                break;
            case 'Sauna':
                price = 7.00;
                break;
            case 'Instructor':
                price = 15.00;
                break;
        }
    }
    console.log(price);
}

solve('Sunday', 'Fitness', 22.00);