function solve(arr, commandStr) {
    let header = arr.shift();
    let commandArr = commandStr.split(' ');
    let idxCol = header.indexOf(commandArr[1]);
    let print = el => console.log(el.join(' | '));

    if (commandArr[0] === 'sort') {
        arr.sort((a, b) => a[idxCol].localeCompare(b[idxCol]));
        print(header);
        arr.forEach(x => print(x));
    } else if (commandArr[0] === 'hide') {
        arr.map(x => x.splice(idxCol, 1));
        header.splice(idxCol, 1);
        print(header);
        arr.forEach(x => print(x));
    } else if (commandArr[0] === 'filter') {
        let value = commandArr[2];
        print(header);
        let printArr = arr.filter(x => x[idxCol] === value);
        printArr.forEach(x => print(x));
    }
}
solve([
        ['name', 'age', 'grade'],
        ['Peter', '25', '5.00'],
        ['George', '34', '6.00'],
        ['Marry', '28', '5.49']],
    'sort age'
);