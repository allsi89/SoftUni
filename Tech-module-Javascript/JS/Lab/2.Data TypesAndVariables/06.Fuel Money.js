function solve(distance,passangers,price) {

    let neededFuel = (distance/100)*7;
    neededFuel+=passangers*.100;
    let money = neededFuel*price;

    console.log(`Needed money for that trip is ${money}lv.`);
}
solve(260,9,2.49);