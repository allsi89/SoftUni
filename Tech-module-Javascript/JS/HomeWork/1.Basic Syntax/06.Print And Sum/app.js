function solve(num1, num2) {

    let first = Number(num1);
    let second = Number(num2);
    let sum = 0;
    let sumAsText = "";

    for (var i = num1; i <= num2; i++) {
        sum += i;
        sumAsText += i + " ";
    }
    console.log(sumAsText);
    console.log(`Sum: ${sum}`);
}
solve(50, 60);