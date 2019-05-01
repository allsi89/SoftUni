function solve(arg1, arg2, arg3) {

    let groupSize = Number(arg1);
    let typoOfGroup = arg2;
    let dayOfWeek = arg3;
    let singlePrice = 0;
    let totalPrice = 0;

    if (typoOfGroup === "Students") {

        if (dayOfWeek === "Friday") {
            singlePrice = 8.45;
        } else if (dayOfWeek === "Saturday") {
            singlePrice = 9.80;
        } else if (dayOfWeek === "Sunday") {
            singlePrice = 10.46;
        }
        if (groupSize >= 30) {
            totalPrice = groupSize * singlePrice * 0.85;
        } else {
            totalPrice = groupSize * singlePrice;
        }
    } else if (typoOfGroup === "Business") {

        if (dayOfWeek === "Friday") {
            singlePrice = 10.90;
        } else if (dayOfWeek === "Saturday") {
            singlePrice = 15.60;
        } else if (dayOfWeek === "Sunday") {
            singlePrice = 16;
        } if (groupSize >= 100) {
            totalPrice = (groupSize - 10) * singlePrice;
        } else {
            totalPrice = groupSize * singlePrice;
        }
    } else if (typoOfGroup === "Regular") {

        if (dayOfWeek === "Friday") {
            singlePrice = 15;
        } else if (dayOfWeek === "Saturday") {
            singlePrice = 20;
        } else if (dayOfWeek === "Sunday") {
            singlePrice = 22.50;
        } if (groupSize >= 10 && groupSize <= 20) {
            totalPrice = (groupSize * singlePrice) * 0.95; 
        } else {
            totalPrice = groupSize * singlePrice;
        }
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
solve(40, "Regular", "Saturday");