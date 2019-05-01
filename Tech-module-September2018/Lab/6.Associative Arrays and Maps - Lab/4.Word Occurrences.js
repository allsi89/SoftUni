function solve(text) {
    let map = new Map();

    for (let i = 0; i < text.length; i++) {
        map.set(text[i], 0);
    }

    for (let word of text) {

        if (map.has(word)) {
            let oldCount = map.get(word);
            map.set(word, oldCount + 1);
        }
    }

    let sorted = [...map].sort((a, b) => b[1] - a[1]);

    sorted.forEach((kvp) => {
        let [word, count] = kvp;
        console.log(`${word} -> ${count} times`);
    })
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another",
    "sentence", "And", "finally", "the", "third", "sentence"]);