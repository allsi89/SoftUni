function solve(num1, num2, num3) {

    let year = Number(num1);
    let month = Number(num2 - 1);
    let day = Number(num3 + 2);

    let date = new Date(year, month, day);
    
    console.log(date);
}
solve(2016, 9, 30);