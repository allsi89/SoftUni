function solve(input){
let moneyForFoodperDay = Number(input[0]);
let moneyForSouveniresperDay = Number(input[1]);
let moneyForHotelperday = Number(input[2]);

let totalMoneyForFuel = 54.39;
let totalMoneyForHotel = moneyForHotelperday * 0.9 + (moneyForHotelperday * 0.85) + (moneyForHotelperday * 0.8);
let totalMoneyForSouvenires = moneyForSouveniresperDay * 3 ;
let totalMoneyForFood = moneyForFoodperDay * 3;
let total = totalMoneyForSouvenires + totalMoneyForHotel + totalMoneyForFood + totalMoneyForFuel
console.log(`Money needed: ${(total).toFixed(2)}`);
}
solve([100, 50, 500]);