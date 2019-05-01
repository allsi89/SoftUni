function sort(first, second, third) {

    let numArray = [first, second, third];

    numArray.sort(function (a, b) { return b - a; });

    console.log(numArray);
}
sort(2, 1, 3);