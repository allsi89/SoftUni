function charactersInRange(firstChar,secondChar) {
    let firstCode = firstChar.charCodeAt(0);
    let secondCode = secondChar.charCodeAt(0);
    let start = Math.min(firstCode,secondCode);
    let end = Math.max(firstCode,secondCode);

    let characters = [];
    for (let i = start + 1; i < end; i++) {
        characters.push(String.fromCharCode(i));
    }
    return characters.join(' ');
}
console.log(charactersInRange('C', '#'));