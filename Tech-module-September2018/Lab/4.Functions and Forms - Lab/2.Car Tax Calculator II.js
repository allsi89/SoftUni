function solve(kw, age) {
    let powerPrice = calcPowerPrice(kw);
    let coefficient = coefficientFunc(age);
    let totalPrice = powerPrice * coefficient;
    totalPrice = totalPrice.toFixed(2) + " lv."
    console.log(totalPrice);

    function calcPowerPrice(power) {
        let tax = 0;

        if (power > 110) {
            tax = power * 1.54;
        } else if (power > 74) {
            tax = power * 1.38;
        } else if (power > 55) {
            tax = power * 0.68;
        } else if (power > 37) {
            tax = power * 0.50;
        } else {
            tax = power * 0.43;
        }
        return tax.toFixed(2);
    }
    function coefficientFunc(age) {
        let coefficient = 0;
        
        if (age>14) {
            coefficient = 1.00;
        }else if (age > 5){
            coefficient = 1.50;
        }else {
            coefficient = 2.80;
        }
        return coefficient;
    }
}
solve(90,7);