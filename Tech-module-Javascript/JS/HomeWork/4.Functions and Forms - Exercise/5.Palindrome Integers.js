function solve(numArr) {

    for (let num of numArr) {
        console.log(isPalindrome(num));
    }

    function isPalindrome(num) {
        num = num.toString();
        let isPalindrome = true;
        for (let i = 0; i < num.length / 2; i++) {
            let firstSymbol = num[i];
            let secondSymbol = num[num.length - 1 - i];

            if (firstSymbol !== secondSymbol) {
                isPalindrome = false;
                break;
            }
        }
        return isPalindrome;
    }
}

solve([123, 323, 421, 121]);