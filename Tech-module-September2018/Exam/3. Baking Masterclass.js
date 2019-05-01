function solve(arr) {
    let budget = +arr[0];
    let students = +arr[1];
    let flourPrice = +arr[2];
    let eggsPrice = +arr[3];
    let apronPrice = +arr[4];
    let freePack = Math.floor(students / 5);

    let total = apronPrice * Math.ceil(students * 1.20) + (eggsPrice * 10 * students) + flourPrice * (students - freePack);


    let diff = total - budget;

    if (total <= budget) {
        console.log(`Items purchased for ${total.toFixed(2)}$.`);
    } else {
        console.log(`${diff.toFixed(2)}$ more needed.`)
    }
}

solve([100,
    25,
    4.0,
    1.0,
    6.0]);