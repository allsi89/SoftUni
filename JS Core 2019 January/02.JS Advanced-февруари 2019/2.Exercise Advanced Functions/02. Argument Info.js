function solve() {

    let summary = {};

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(`${type}: ${obj}`);

        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }

    let sortedTypes = [];
    for (let currentType in summary) {
        sortedTypes.push([currentType, summary[currentType]]);
    }
    sortedTypes.sort((a,b) => {
        let result = b[1] - a[1];
        if (result !== 0) {
            return result;
        }
    });
    sortedTypes.forEach(t => console.log(`${t[0]} = ${t[1]}`));
}

solve('cat', 42, function () {console.log('Hello world!'); }, 44);