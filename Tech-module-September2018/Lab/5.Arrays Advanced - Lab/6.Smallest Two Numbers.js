function twoSmallest(numbers) {

    let sortedNumbers = numbers.sort((a, b) => {
        return a - b;
    });
    let result = sortedNumbers.splice(0, 2);
    console.log(result.join(' '));
}

twoSmallest([3, 0, 10, 4, 7, 3]);