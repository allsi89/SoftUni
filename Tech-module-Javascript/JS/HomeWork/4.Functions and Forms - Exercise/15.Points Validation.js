function solve(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    let zero1 = 0;
    let zero2 = 0;

    let firstDistance = (getDistance(x1, y1, zero1, zero2));
    let secondDistance = (getDistance(x2, y2, zero1, zero2));
    let thirdDistance = (getDistance(x1, y1, x2, y2));

    firstDistance = firstDistance.toString();
    secondDistance = secondDistance.toString();
    thirdDistance = thirdDistance.toString();

    if (firstDistance.length > 2) {
        console.log(`{${x1}, ${y1}} to {${zero1}, ${zero2}} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${zero1}, ${zero2}} is valid`);
    }
    if (secondDistance.length > 2) {
        console.log(`{${x2}, ${y2}} to {${zero1}, ${zero2}} is invalid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${zero1}, ${zero2}} is valid`);
    }
    if (thirdDistance.length > 2) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }

    function getDistance(x1, y1, x2, y2) {
        let xs = Math.abs(x2 - x1);
        let ys = Math.abs(y1 - y2);
        xs *= xs;
        ys *= ys;
        let distance = Math.sqrt(xs + ys);
        return distance;
    }
}

solve([2, 1, 1, 1]);