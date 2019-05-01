function solve(strings) {
    let palindromesArr = [];

    for (let text of strings) {
        text = text.split(' ')     // we can also replace empty spaces with .replace(/\s+/g, '');
            .join('');

        let palindrome = text
            .split('')
            .reverse()
            .join('');

        if (text === palindrome) {
            palindromesArr.push(palindrome);
        }
    }
    if (palindromesArr.length === 0) {
        console.log('No palindromes found');
    }
    else {
        console.log(palindromesArr.join(', '));
    }
}

solve([
    ' stella won no wallets',
    'not a palindrome']);