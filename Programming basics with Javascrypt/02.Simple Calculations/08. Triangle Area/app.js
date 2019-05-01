function triangleArea([arg1, arg2]) {
    let a = Number(arg1); // side
    let h = Number(arg2); // height
    let area = a * h / 2;
    console.log(area.toFixed(2));
}
triangleArea([7, 7]);