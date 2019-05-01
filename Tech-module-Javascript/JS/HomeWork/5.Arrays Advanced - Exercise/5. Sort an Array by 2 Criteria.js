function solve(input) {

    input.sort(sortStrings);
    console.log(input.join('\n'));

    function sortStrings(a, b) {
        let aLength = a.length;
        let bLength = b.length;

        if (aLength - bLength === 0) {

            return a.localeCompare(b);  // alphabetical sorting
        }
        return aLength - bLength;
    }
}

solve(['test', 'Deny', 'omen', 'Default']);