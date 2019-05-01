function solve(type, kw, age) {
    switch (type) {
        case "motorcycle":
            totalCalcCycle(kw);
            break;
        case "car":
            let powerPrice = calcPowerPrice(kw);
            let coefficient = coefficientFunc(age);
            let totalPrice = powerPrice * coefficient;
            totalPrice = totalPrice.toFixed(2) + " lv."
            console.log(totalPrice);
            break;

    }

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
        return tax;
    }

    function coefficientFunc(age) {
        let coefficient = 0;

        if (age > 14) {
            coefficient = 1.00;
        } else if (age > 5) {
            coefficient = 1.50;
        } else {
            coefficient = 2.80;
        }
        return coefficient;
    }

    function totalCalcCycle(volume) {
        let taxPrice = 0.00;

        if (volume > 750) {
            taxPrice = 125;
        } else if (volume > 490) {
            taxPrice = 94;
        } else if (volume > 350) {
            taxPrice = 63;
        } else if (volume > 250) {
            taxPrice = 44;
        } else if (volume > 125) {
            taxPrice = 31;
        } else {
            taxPrice = 15;
        }
        taxPrice = taxPrice.toFixed(2);
        console.log(taxPrice + " lv.");
    }
}

solve('motorcycle', 125, 10);