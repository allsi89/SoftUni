function solve(text) {
    let words = text.split(/[\.\?\s\!\,]+/g);
    
    if (words[words.length -1] === ""){
    words.pop();
    }

    console.log(`Longest -> ${getLongestWord(words)}`);
    console.log(`Shortest -> ${getSmallestWord(words)}`);

    function getLongestWord(words) {
        let longestWordLength = 0;
        let longestIndex = 0;

        for (let i = 0; i < words.length; i++) {

            if (words[i].length > longestWordLength) {
                longestWordLength = words[i].length;
                longestIndex = i;
            }
        }
        return words[longestIndex];
    }

    function getSmallestWord(words) {
        let smallestWordLength = Number.MAX_SAFE_INTEGER;
        let smallestIndex = 0;

        for (let i = 0; i < words.length; i++) {
            if (words[i].length < smallestWordLength) {
                smallestWordLength = words[i].length;
                smallestIndex = i;
            }
        }
        return words[smallestIndex];
    }
}

solve('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');