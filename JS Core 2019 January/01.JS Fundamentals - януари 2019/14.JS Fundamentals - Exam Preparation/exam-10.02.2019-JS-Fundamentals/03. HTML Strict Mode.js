function solve(arr) {
    let stringToPrint = []
    let [startReg, endReg] = [/^<[a-zA-Z0-9_]+>/, /<\/[a-zA-Z0-9_]+>$/]
    for (let line of arr) {
        let check = startReg.test(line) && endReg.test(line);
        let [start, end] = [line.match(startReg), line.match(endReg)];
        if (check && start[0] === end[0].replace(/\//, '')) {
            stringToPrint.push(line.replace(/<\/*[a-zA-Z0-9_]+>/gi, ''));
        }
    }
    console.log(stringToPrint.join(' '))
}

solve([
    '<div><p>This</p> is</div>',
    '<div><a>perfectly</a></div>',
    '<div><p>valid</p></div>',
    '<div><p>This</div></p>',
    '<div><p>is not</p><div>']
);