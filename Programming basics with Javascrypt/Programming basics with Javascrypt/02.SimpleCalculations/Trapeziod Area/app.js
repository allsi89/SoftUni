function trapezoidArea([arg1, arg2, arg3]){
    let b1 = Number(arg1);
    let b2 = Number(arg2);
    let h = Number(arg3);
    let area = h * (b1 + b2) / 2;
    console.log("Trapezoid area = " + area);
}
