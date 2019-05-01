function solve(arr) {
    let breads = [];

    for (let currentBread of arr) {

        if (currentBread === 'Bake It!') {
            break;
        }
        let breadQuality = currentBread.split('#').map(Number);
        breads.push(breadQuality);
    }
    let bestBread = [...breads]
        .sort(sort)
        .shift();

    let bestBreadQuality = bestBread.reduce((a, b) => a + b, 0);
    console.log(`Best Batch quality: ${bestBreadQuality}`);
    console.log(bestBread.join(' '));

    function sort(a, b) {
        let aQuality = a.reduce((c, d) => c + d, 0);
        let bQuality = b.reduce((c, d) => c + d, 0);
        let bestQuality = bQuality - aQuality;

        if (bestQuality === 0) {
            let aAverage = aQuality / a.length;
            let bAverage = bQuality / b.length;
            let bestAverage = bAverage - aAverage;

            if (bestAverage === 0) {
                return a.length - b.length;
            }
            return bestAverage;
        }
        return bestQuality;
    }
}

solve(['5#3#2', '10#2#-2#1#-1', '4#2#1', 'Bake It!']);