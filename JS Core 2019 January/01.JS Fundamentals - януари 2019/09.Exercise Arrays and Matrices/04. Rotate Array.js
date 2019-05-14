//jshint esversion:6
function solve(arr) {
    let rotations = +arr.pop();
    for (let i = 0; i < rotations % arr.length; i++) {
        arr.unshift(arr.pop());
    }
    return arr.join(' ');
}

console.log(solve([
    '1',
    '2',
    '3',
    '4',
    '2'
]));