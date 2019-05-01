function celsiusToFahrenheit([imput]) {
    let c = Number(imput);
    let f = c * 1.8 + 32;
    console.log(Math.round(f * 100) / 100);
}
celsiusToFahrenheit([30]);