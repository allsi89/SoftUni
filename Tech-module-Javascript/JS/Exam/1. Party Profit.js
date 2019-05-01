function solve(input) {
    // Input is an array of TWO strings
    // Use map to convert them to Numbers
    let [ partySize, days ] = input.map(Number);
    let coins = 0;

    // Start the for loop from one to the number of days(inclusive)
    for(let i = 1; i <= days; i++) {
        // If it is every tenth day decrease the companion
        if (i % 10 === 0) {
            partySize -= 2;
        }

        // If it is every fifteenth day increase the companion
        if (i % 15 === 0) {
            partySize += 5;
        }

        // Every days increase the coins with 50
        // And decrease the coins with 2 multiplied by the party size
        coins += 50;
        coins -= 2 * partySize;

        // Every third day decrease the coins
        if (i % 3 === 0) {
            coins -= 3 * partySize;
        }

        // Every fifth day increase the coins
        if (i % 5 === 0) {
            coins += 20 * partySize;

            // If it is fifth and third day (for example 15)
            // Increase and decrease the coins
            if (i % 3 === 0) {
                coins -= 2 * partySize;
            }
        }

    }

    // Get the integral part of the received coins
    // You can use Math.trunc, Math.floor or parseInt
    console.log(`${partySize} companions received ${Math.trunc(coins / partySize)} coins each.`)
}

solve([15,30]);