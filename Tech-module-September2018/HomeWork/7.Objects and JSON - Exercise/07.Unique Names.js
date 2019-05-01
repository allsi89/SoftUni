function solve(input) {
    let set = new Set();

    for (let element of input) {
        set.add(element);
    }

    let sortedSet = [...set.keys()].sort((a, b) => {
        // => sort by first criteria and if (equal), sort by second criteria !!!
        return a.length - b.length || a.localeCompare(b);
    })

    for (let element of sortedSet) {
        console.log(element);
    }
}

solve(["Ashton",
    "Kutcher",
    "Ariel",
    "Lilly",
    "Keyden",
    "Aizen",
    "Billy",
    "Braston"])