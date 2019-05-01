function solve(arr) {

    let step = Number(arr[arr.length - 1]);
    let output = [];

    for (let i = 0; i < arr.length - 1; i += step) {
        output.push(arr[i]);
    }
    console.log(output.join(' '));

}

solve(['1', '2', '3', '4', '5', '6']);