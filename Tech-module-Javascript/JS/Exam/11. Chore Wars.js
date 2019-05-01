function solve(input) {
    input.pop();

    let doTheDishesReg = /<[a-z\d]+>/g;
    let cleanTheHouseReg = /\[[A-Z\d]+\]/g;
    let laundryRegex = /{.+}/g;
    let dishesTotal = 0;
    let cleaningTime = 0;
    let laundryTime = 0;

    for (let row of input) {
        let valid = row.match(doTheDishesReg) || row.match(cleanTheHouseReg) || row.match(laundryRegex);

        if (valid) {
            let currentTime = valid[0].match(/\d/g)
                .map(Number)
                .reduce((a, b) => a + b, 0);

            if (row.match(doTheDishesReg)) {
                dishesTotal += currentTime;
            } else if (row.match(cleanTheHouseReg)) {
                cleaningTime += currentTime;
            } else if (row.match(laundryRegex)) {
                laundryTime += currentTime;
            }

        }
    }
    let totalTime = dishesTotal + cleaningTime + laundryTime;
    console.log(`Doing the dishes - ${dishesTotal} min.\nCleaning the house - ${cleaningTime} min.\nDoing the laundry - ${laundryTime} min.`);
    console.log(`Total - ${totalTime} min.`);
}

solve([
    'Vo.|1zps {lo2a}zgVGk{1)N+',
    'Asdad123zxc{3]',
    'R[A [F67G9C]6e3C@',
    'MVo.|1zpshM<9) <d85ifkh59votu>@',
    '<dm0g2y34mw1kpds2>iD|"p',
    'wife is happy'
]);