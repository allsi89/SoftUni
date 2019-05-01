function solve([first, second, third]) {
    first = Number(first);
    second = Number(second);
    third = Number(third);

    if (first == second && second == third && first == third) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
solve([1, 21, 1]);