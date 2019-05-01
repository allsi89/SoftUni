function solve([n]) {
    n = Number(n);

    console.log("*".repeat(n));

    for (var row = 1; row <= n - 2; row++) {
        console.log(`*${" ".repeat(n - 2)}*`);
    }

    console.log("*".repeat(n));

}
solve([5]);