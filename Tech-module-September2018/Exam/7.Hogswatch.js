function solve(inputArr) {
    const homesToVisit = Number(inputArr.shift());
    const initialNumbersPresents = Number(inputArr.shift());
    let presentsNumber = initialNumbersPresents;
    let visitedHomes = 0;
    let timesBack = 0;
    let additionalPresentsTaken = 0;

    for (let i = 0; i < inputArr.length; i++) {
        let numberChildren = Number(inputArr[i]);
        visitedHomes++;

        if (presentsNumber >= numberChildren) {
            presentsNumber -= numberChildren;
        } else {
            timesBack++;
            let presentsTaken = Math.floor(initialNumbersPresents / visitedHomes) * (homesToVisit - visitedHomes) + (numberChildren - presentsNumber);
            presentsNumber += presentsTaken;
            additionalPresentsTaken += presentsTaken;
            presentsNumber -= numberChildren;
        }
    }

    if (timesBack > 0) {
        console.log(timesBack);
        console.log(additionalPresentsTaken)
    } else {
        console.log(presentsNumber);
    }
}

solve([4, 20, 12, 10, 3, 9]);