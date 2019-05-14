//jshint esversion: 6
function solve(arr) {
    let sorted = arr.sort((a, b) => {
        return a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase());
    });

    console.log(sorted.join('\n'));
}

solve(
    [
    'Alphaa', 
    'betat', 
    'Gamma'
]);