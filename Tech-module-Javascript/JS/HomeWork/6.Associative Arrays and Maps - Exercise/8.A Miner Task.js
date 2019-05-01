function solve(input) {
    let resourcesMap = new Map();

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = +input[i + 1];

        if (!resourcesMap.has(resource)) {
            resourcesMap.set(resource, quantity);
        }
        else {
            let oldQuantity = resourcesMap.get(resource);
            resourcesMap.set(resource, oldQuantity += quantity);
        }
    }
    for (let [resource, quantity] of resourcesMap) {
        console.log(`${resource} -> ${quantity}`);
    }
}

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);