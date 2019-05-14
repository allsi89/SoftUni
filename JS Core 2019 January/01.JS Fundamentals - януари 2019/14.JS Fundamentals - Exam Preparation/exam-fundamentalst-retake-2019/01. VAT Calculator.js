function calculateVAT(total, vat) {
    total = Number(total);
    vat = Number(vat);

    let result = total / ((100 + vat) / 100);
    console.log(result.toFixed(2));

}

calculateVAT(220.00,10.00);