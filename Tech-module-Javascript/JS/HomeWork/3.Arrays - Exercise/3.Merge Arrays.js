function solve(firstArr, secondArr) {
    let thirdArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        let firstEl = firstArr[i];
        let secondEl = secondArr[i];

        if (i % 2 === 0) {
            thirdArr.push(Number(firstEl) + Number(secondEl));
        } else {
            thirdArr.push(firstEl + secondEl);
        }
    }
    console.log(thirdArr.join(' - '));
}

solve(["5", "15", "23", "56", "35"],
    ["17", "22", "87", "36", "11"]);