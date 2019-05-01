function solve(number) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day;

    if (number >= 1 && number <= 7) {
        switch (number) {
            case 1:
                day = days[0];
                break;
            case 2:
                day = days[1];
                break;
            case 3:
                day = days[2];
                break;
            case 4:
                day = days[3];
                break;
            case 5:
                day = days[4];
                break;
            case 6:
                day = days[5];
                break;
            case 7:
                day = days[6];
                break;
        }
        console.log(day);
    }
    else {
        console.log("Invalid day!");
    }
}
solve(0);